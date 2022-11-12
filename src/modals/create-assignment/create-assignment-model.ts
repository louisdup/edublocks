import { EbRadioGroupOption } from "@/components/eb-radio-group/eb-radio-group-types";
import { EbSelectOption } from "@/components/eb-select/eb-select-types";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { ModeUtilities } from "@/utilities/mode-utilities";
import { reactive, watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { CreateAssignmentState } from "./create-assignment-state";
import * as yup from "yup";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { ProjectsUtilities } from "@/utilities/projects-utilities";
import { Data } from "@/components/types";
import { ClassroomModel } from "@/data/models/classroom-model";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import router from "@/router";
import { StorageFetchResponseModel } from "@/data/models/storage-fetch-response-model";
import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ContentUtilities } from "@/utilities/content-utilities";

/**
 * Modal model for the create assignment modal.
 */
class CreateAssignmentModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "create-assignment";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: CreateAssignmentState = reactive(new CreateAssignmentState());

	/**
	 * Initialise the modal model.
	 */
	public init(props: Data): void {
		this.watchForFormChanges();
		this.setInitialValues(props);
	}

	/**
	 * Returns the title for the create assignment modal.
	 */
	public getTitle(): string {
		if (this.state.assignment) {
			return this.getText("edit-assignment");
		}
		else {
			return this.getText("create-assignment");
		}
	}

	/**
	 * Watches for changes on the form and checks if it's valid 
	 * Loads existing projects if user selects existing project type.
	 */
	private watchForFormChanges(): void {
		watchEffect(async () => {
			this.state.isValid = await FormUtilities.isFormValid(this.getValidationSchema(), this.state.data);

			if (this.state.data["project_type"] === "clone-existing-project") {
				this.loadExistingProjects();
			}
		});
	}

	/**
	 * Sets initial form values.
	 */
	private setInitialValues(props: Data): void {
		this.state.classroom = props.classroom as ClassroomModel;

		if (props.assignment) {
			// Edit previously created assignment.
			this.state.assignment = props.assignment as ClassroomAssignmentModel;
			this.state.data["name"] = this.state.assignment.name;
			this.state.data["due"] = this.state.assignment.due.split(":00.000Z")[0];
			this.state.data["description"] = this.state.assignment.description;
		}
		else {
			this.state.assignment = undefined;
			this.state.data = {};
			this.state.data["project_type"] = "new-project";
			this.state.data["mode"] = this.getModeOptions()[0].value;
		}
	}

	/**
	 * Loads existing projects belonging to the current user.
	 */
	private loadExistingProjects(): void {
		if (this.state.existingProjects.length === 0) {
			this.state.isLoadingExisitingProjects = true;
	
			ProjectsProvider.getProjectsAsync(1000).then((response: FirestoreFetchResponseModel<Array<FirestoreProjectModel>>) => {
				if (response.wasSuccessful && response.data) {
					this.state.existingProjects = response.data;
					this.state.data["project"] = response.data[0].id;
				}
				this.state.isLoadingExisitingProjects = false;
			});
		}
	}

	/**
	 * Returns validation schema for the create project form.
	 */
	private getValidationSchema(): ValidationSchema {
		return {
			name: yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("assignment-name")])),
			due: yup
				.date()
				.required(FormUtilities.getValidationMessage("required", [this.getText("due-date")])),
			description: yup
				.string(),
			project_type: !this.state.assignment ? yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("starter-project")])) :
				yup.string(),
			project: this.state.data["project_type"] === "clone-existing-project" && !this.state.assignment ? yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("starter-project")])) : 
				yup.string(),
			mode: this.state.data["project_type"] === "new-project" && !this.state.assignment ? yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("mode")])) : 
				yup.string()
		};
	}

	/**
	 * Validates a specified field and then updates the value of isValid to true if all fields are valid.
	 */
	public async validateField(field: string): Promise<void> {
		FormUtilities.validateField(field, this.getValidationSchema(), this.state.data, this.state.errors);
		this.state.isValid = await FormUtilities.isFormValid(this.getValidationSchema(), this.state.data);
	}

	/**
	 * Returns a list of starter project options to populate the type radio group input.
	 */
	public getStarterProjectOptions(): Array<EbRadioGroupOption> {
		return [
			{
				key: "new-project",
				title: this.getText("new-project")
			},
			{
				key: "clone-existing-project",
				title: this.getText("clone-existing-project"),
			}
		];
	}

	/**
	 * True if the there is no existing assignment.
	 */
	public isProjectTypeInputVisible(): boolean {
		return !this.state.assignment;
	}

	/**
	 * True if the there is no existing assignment and project type is "fork existing project".
	 */
	public isExistingProjectInputVisible(): boolean {
		return !this.state.assignment && this.state.data["project_type"] === "clone-existing-project";
	}

	/**
	 * True if existing projects have finished loading.
	 */
	public isExistingProjectInputLoading(): boolean {
		return this.state.isLoadingExisitingProjects;
	}

	/**
	 * Returns a list of existing projects for the existing project input.
	 */
	public getExistingProjects(): Array<EbSelectOption> {
		return ProjectsUtilities.remapProjectsForSelect(this.state.existingProjects);
	}

	/**
	 * True if there is no exisiting assignment and project type is "new project".
	 */
	public isModeInputVisible(): boolean {
		return !this.state.assignment && this.state.data["project_type"] === "new-project";
	}

	/**
	 * Returns a list of modes to populate the mode select box.
	 */
	public getModeOptions(): Array<EbSelectOption> {
		const modeOptions: Array<EbSelectOption> = [];

		ModeUtilities.getModes().forEach((mode: ModeModelBase) => {
			modeOptions.push({
				label: mode.config.name,
				value: mode.config.key
			});
		});

		return modeOptions;
	}

	/**
	 * Finds a project by ID in the existing projects list.
	 */
	private getExistingProjectById(id: string): FirestoreProjectModel | undefined {
		return this.state.existingProjects.filter((project: FirestoreProjectModel) => {
			return project.id === id;
		})[0];
	}

	/**
	 * True if there is no existing assignment. 
	 */
	public isCreateButtonVisible(): boolean {
		return !this.state.assignment;
	}

	/**
	 * True if the create project form is not valid. 
	 */
	public isCreateButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * True if an assignment is being created. 
	 */
	public isCreateButtonLoading(): boolean {
		return this.state.isCreatingAssignment;
	}

	/**
	 * Called when the user clicks the create button.
	 */
	public async onCreateButtonClicked(): Promise<void> {
		if (this.state.isValid && this.state.classroom && AuthenticationUtilities.currentUser.value) {
			this.state.isCreatingAssignment = true;
	
			const assignmentBody: object = {
				name: this.state.data["name"],
				description: this.state.data["description"],
				due: new Date(this.state.data["due"]).toISOString(),
				created: new Date().toISOString()
			};

			let projectId: string | undefined;
	
			if (this.state.data["project_type"] === "clone-existing-project") {
				const existingProject: FirestoreProjectModel | undefined = this.getExistingProjectById(this.state.data["project"]);

				if (existingProject) {
					const existingProjectCode: StorageFetchResponseModel = await ProjectsProvider.getProjectCodeAsync(existingProject.path);

					if (existingProjectCode.wasSuccessful && existingProjectCode.data) {
						projectId = await ProjectsUtilities.createFirestoreProject(
							this.state.data["name"], 
							this.state.data["mode"], 
							"blocks", 
							existingProjectCode.data.content, 
							undefined, 
							true
						);

						if (projectId) {
							assignmentBody["project"] = {
								id: projectId,
								uid: AuthenticationUtilities.currentUser.value.uid,
								mode: existingProject.mode
							};
						}
					}
				}
			}
			else if (this.state.data["project_type"] === "new-project") {
				projectId = await ProjectsUtilities.createFirestoreProject(
					this.state.data["name"], 
					this.state.data["mode"], 
					"blocks", 
					undefined, 
					undefined, 
					true
				);

				if (projectId) {
					assignmentBody["project"] = {
						id: projectId,
						uid: AuthenticationUtilities.currentUser.value.uid,
						mode: this.state.data["mode"]
					};
				}
			}

			const assignmentResponse: FirestoreFetchResponseModel<string> = await ClassroomProvider.createAssignmentAsync(this.state.classroom.id, assignmentBody);

			if (assignmentResponse.wasSuccessful && assignmentResponse.data) {
				ModalUtilities.closeModal();
				this.state.data = {};
				router.push(`/project/${AuthenticationUtilities.currentUser.value.uid}/${projectId}`);
			}
			
			this.state.isCreatingAssignment = false;
		}
	}

	/**
	 * True if there is an existing assignment. 
	 */
	public isSaveButtonVisible(): boolean {
		return this.state.assignment !== undefined;
	}

	/**
	 * True if the form is not valid. 
	 */
	public isSaveButtonDisabled(): boolean {
		return !this.state.isValid;
	}
	
	/**
	 * True if an assignment is being saved. 
	 */
	public isSaveButtonLoading(): boolean {
		return this.state.isSavingAssignment;
	}
	
	/**
	 * Called when the user clicks the save button.
	 * Saves the updated assignment information. 
	 */
	public async onSaveButtonClicked(): Promise<void> {
		if (this.state.isValid && this.state.classroom && this.state.assignment) {
			this.state.isSavingAssignment = true;

			const body: object = {
				name: this.state.data["name"],
				description: this.state.data["description"],
				due: new Date(this.state.data["due"]).toISOString()
			};

			const response: FirestoreFetchResponseModel<void> = await ClassroomProvider.updateAssignmentAsync(this.state.classroom.id, this.state.assignment.id, body);

			if (response.wasSuccessful) {
				ModalUtilities.closeModal();
				ContentUtilities.triggerContentRefresh();
			}

			this.state.isSavingAssignment = false;
		}
	}
}

// Export the modal model.
export const modal: CreateAssignmentModel = new CreateAssignmentModel();