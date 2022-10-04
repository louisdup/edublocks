import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { ModalModelBase } from "../base-classes/modal-model-base";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { ContentUtilities } from "@/utilities/content-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { RenameProjectState } from "./rename-project-state";
import { reactive } from "vue";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import * as yup from "yup";
import { Data } from "@/components/types";
import { RenameProjectBody } from "./rename-project-types";

/**
 * Modal model for the rename project modal.
 */
class RenameProjectModal extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "rename-project";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: RenameProjectState = reactive(new RenameProjectState());

	/**
	 * Initialise the modal model.
	 */
	public init(props: Data): void {
		this.setNameInputValueToProjectName(props.project as FirestoreProjectModel);
	}

	/**
	 * Sets the value of the name input to that of the current project name.
	 */
	public setNameInputValueToProjectName(project: FirestoreProjectModel): void {
		this.state.data["name"] = project.name;
	}

	 /**
	  * Returns validation schema for the rename project form.
	  */
	 public getValidationSchema(): ValidationSchema {
		 return {
			 name: yup
				 .string()
				 .required(FormUtilities.getValidationMessage("required", [this.getText("name")])),
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
	 * Called when the rename button is clicked and renames the project in firestore.
	 */
	public async onRenameClicked(project: FirestoreProjectModel): Promise<void> {
		if (this.state.isValid) {
			const body: RenameProjectBody = {
				name: this.state.data["name"],
				updated: new Date().toISOString()
			};
			await ProjectsProvider.updateProjectAsync(project.id, body);
			ContentUtilities.triggerContentRefresh();
			ModalUtilities.closeModal();
		}
	}

	/**
	 * True if the rename project modal is busy. 
	 */
	public isRenameProjectButtonLoading(): boolean {
		return this.state.isBusy;
	}
	
	/**
	 * True if the rename project form is not valid. 
	 */
	public isRenameProjectButtonDisabled(): boolean {
		return !this.state.isValid;
	}
}

// Export the modal model.
export const modal: RenameProjectModal = new RenameProjectModal();