import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { reactive, watchEffect } from "vue";
import { AssignmentSubmissionsState } from "./assignment-submissions-state";
import * as yup from "yup";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import * as UsersProvider from "@/data/providers/users-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";
import { EbSelectOption } from "@/components/eb-select/eb-select-types";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { FormatUtilities } from "@/utilities/format-utilities";
import router from "@/router";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { CloudFunctionsResponseModel } from "@/data/models/cloud-functions-fetch-response-model";
import { OtherUserModel } from "@/data/models/other-user-model";

/**
 * Component model for the assignment submissions sidebar component.
 */
class AssignmentSubmissionsModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "assignment-submissions";
	}

	/**
	 * Reactive instance of the component state.
	 */
	public state: AssignmentSubmissionsState = reactive(new AssignmentSubmissionsState());

	/**
	 * Initialise the component model.
	 */
	public init(): void {
		this.watchForFormChanges();

		// Load the initial data.
		this.loadInitialData();
	}

	/**
	 * Returns the title for the assignment submissions sidebar component.
	 */
	public getTitle(): string {
		return this.getText("submissions");
	}

	/**
	 * Watches for changes on the form and checks if it's valid.
	 */
	private watchForFormChanges(): void {
		watchEffect(async () => {
			this.state.isValid = await FormUtilities.isFormValid(this.getValidationSchema(), this.state.data);
		});
	}
	
	/**
	 * Returns validation schema.
	 */
	private getValidationSchema(): ValidationSchema {
		return {
			marked: yup
				.boolean(),
			feedback: yup
				.string()
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
	 * Load the initial set of data required by the component.
	 */
	private async loadInitialData(): Promise<void> {
		await this.loadAssignment();
		await this.loadAssignmentSubmissions();
		this.setCurrentAssignmentSubmission();
	}
	
	/**
	 * Loads the requested assignment.
	 */
	private async loadAssignment(): Promise<void> {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {
			this.state.isLoadingAssignment = true;
		
			await ClassroomProvider.getAssignmentAsync(EditorUtilities.currentProject.value.firestoreProject.assignment.classroom, EditorUtilities.currentProject.value.firestoreProject.assignment.id).then((response: FirestoreFetchResponseModel<ClassroomAssignmentModel>) => {
				if (response.wasSuccessful && response.data) {
					this.state.assignment = response.data;
				}
				this.state.isLoadingAssignment = false;
			});
		}
	}
	
	/**
	 * Loads information about a user.
	 */
	private async loadUserInfo(id: string): Promise<OtherUserModel | undefined> {
		const response: CloudFunctionsResponseModel<OtherUserModel> = await UsersProvider.getUserAsync(id);
	
		if (response.wasSuccessful && response.data) {
			return response.data;
		}
		else {
			return undefined;
		}
	}
	
	/**
	 * Loads the assignment's submissions.
	 */
	private async loadAssignmentSubmissions(): Promise<void> {		
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {			
			this.state.isLoadingAssignmentSubmissions = true;

			this.state.assignmentSubmissions = [];
			
			await ClassroomProvider.getClassroomAssignmentSubmissionsAsync(EditorUtilities.currentProject.value.firestoreProject.assignment.classroom, EditorUtilities.currentProject.value.firestoreProject.assignment.id).then(async (response: FirestoreFetchResponseModel<Array<ClassroomAssignmentSubmissionModel>>) => {
				if (response.wasSuccessful && response.data) {
					for await (const submission of response.data) {
						submission.user = await this.loadUserInfo(submission.uid);
						this.state.assignmentSubmissions.push(submission);
					}
				}
				this.state.isLoadingAssignmentSubmissions = false;
			});
		}
	}

	/**
	 * Called when the user clicks the back button.
	 * Returns the user to the assignment submissions list page.
	 */
	public onBackButtonClicked(): void {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {
			router.push(`/classroom/${EditorUtilities.currentProject.value.firestoreProject.assignment.classroom}/assignment/${EditorUtilities.currentProject.value.firestoreProject.assignment.id}/submissions`);
		}
	}

	/**
	 * Sets the currently selected assignment submission based on the assignment linked to the current project.
	 */
	private setCurrentAssignmentSubmission(): void {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {
			this.state.data["submission"] = EditorUtilities.currentProject.value.firestoreProject.assignment.submission;
			this.state.currentAssignmentSubmission = this.getAssignmentSubmissionById(this.state.data["submission"]);
			this.state.data["feedback"] = this.state.currentAssignmentSubmission?.feedback;
			if (this.state.currentAssignmentSubmission?.marked) {
				this.state.data["marked"] = true;
			}
		}
	}

	/**
	 * Returns an assignment submission by it's id.
	 */
	private getAssignmentSubmissionById(id: string): ClassroomAssignmentSubmissionModel | undefined {
		return this.state.assignmentSubmissions.filter((submission: ClassroomAssignmentSubmissionModel) => {
			 return submission.id === id;
		})[0];
	}

	/**
	 * Returns the assignment's name.
	 */
	public getAssignmentName(): string | undefined {
		if (this.state.assignment) {
			return this.state.assignment.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the assignment and it's submissions are loading.
	 */
	public isAssignmentSubmissionsSelectInputLoading(): boolean {
		return this.state.isLoadingAssignment || this.state.isLoadingAssignmentSubmissions;
	}
	
	/**
	 * Returns assignment submissions for the select input.
	 */
	public getAssignmentSubmissions(): Array<EbSelectOption> {
		return ClassroomUtilities.remapAssignmentSubmissionsForSelect(this.state.assignmentSubmissions);
	}

	/**
	 * Loads a new assignment submission when the value of the select input changes.
	 */
	public onAssignmentSubmissionSelectInput(): void {
		const submission: ClassroomAssignmentSubmissionModel | undefined = this.getAssignmentSubmissionById(this.state.data["submission"]);

		if (submission) {
			location.href = `/project/${submission.uid}/${submission.project}`;
		}
	}

	/**
	 * Returns the name of the user linked to the currently selected assignment submission.
	 */
	public getCurrentAssignmentSubmissionTitle(): string | undefined {
		if (this.state.currentAssignmentSubmission && this.state.currentAssignmentSubmission.user) {
			return this.state.currentAssignmentSubmission.user.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the status of the current assignment submission.
	 */
	public getCurrentAssignmentSubmissionSubtitle(): string | undefined {
		if (this.state.currentAssignmentSubmission) {
			if (this.state.currentAssignmentSubmission.marked) {
				return this.getText("marked-on", [FormatUtilities.formatDate(this.state.currentAssignmentSubmission.marked)]);
			}
			else if (this.state.currentAssignmentSubmission.submitted) {
				return this.getText("submitted-on", [FormatUtilities.formatDate(this.state.currentAssignmentSubmission.submitted)]);
			}
			else {
				return this.getText("started-on", [FormatUtilities.formatDate(this.state.currentAssignmentSubmission.created)]);
			}			
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the profile picture of the user linked to the currently selected assignment submission.
	 */
	public getCurrentAssignmentSubmissionThumbnail(): string | undefined {
		if (this.state.currentAssignmentSubmission && this.state.currentAssignmentSubmission.user) {
			return this.state.currentAssignmentSubmission.user.image;
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the assignment submission has been submitted.
	 */
	public isCurrentAssignmentSubmissionMarkingSectionVisible(): boolean {
		return this.state.currentAssignmentSubmission?.submitted !== undefined && this.state.currentAssignmentSubmission?.submitted !== null;
	}

	/**
	 * True if the assignment submission is being saved.
	 */
	public isSaveButtonLoading(): boolean {
		return this.state.isAssignmentSubmissionBeingSaved;
	}

	/**
	 * True if the form is not valid.
	 */
	public isSaveButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * Called when the save button clicked.
	 * Saves the teachers feedback/marked status against the current submission.
	 */
	public onSaveButtonClicked(): void {
		if (this.state.isValid && EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {
			this.state.isAssignmentSubmissionBeingSaved = true;

			const markedDate: string = new Date().toISOString();
			const body: object = {
				feedback: this.state.data["feedback"]
			};

			if (this.state.data["marked"]) {
				body["marked"] = markedDate;
			}
			else {
				body["marked"] = null;
			}

			ClassroomProvider.updateAssignmentSubmissionAsync(EditorUtilities.currentProject.value.firestoreProject.assignment.classroom, EditorUtilities.currentProject.value.firestoreProject.assignment.id, EditorUtilities.currentProject.value.firestoreProject.assignment.submission, body).then((response: FirestoreFetchResponseModel<void>) => {
				if (response.wasSuccessful && this.state.currentAssignmentSubmission) {
					if (this.state.data["marked"]) {
						this.state.currentAssignmentSubmission.marked = markedDate;
					}
					else {
						this.state.currentAssignmentSubmission.marked = undefined;
					}
				}
				this.state.isAssignmentSubmissionBeingSaved = false;
			});
		}
	}
	
	/**
	 * Called when the unsubmit button clicked.
	 * Unsubmits the current assignment and hands it back to the student.
	 */
	public onUnsubmitButtonClicked(): void {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {
			ModalUtilities.showModal({
				modal: "UnsubmitAssignment",
				options: {
					classroomId: EditorUtilities.currentProject.value.firestoreProject.assignment.classroom,
					assignmentId: EditorUtilities.currentProject.value.firestoreProject.assignment.id,
					submissionId: EditorUtilities.currentProject.value.firestoreProject.assignment.submission,
					isCurrentUserAdmin: true
				}
			});

			this.observeContentRefresh(() => {
				if (this.state.currentAssignmentSubmission) {
					this.state.currentAssignmentSubmission.submitted = undefined;
					this.state.currentAssignmentSubmission.marked = undefined;
					this.state.data["marked"] = false;
					this.state.data["feedback"] = undefined;
				}
			});
		}
	}
}

// Export the component model
export const component: AssignmentSubmissionsModel = new AssignmentSubmissionsModel();