import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { reactive, watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { CreateClassroomState } from "./create-classroom-state";
import * as yup from "yup";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";

/**
 * Modal model for the create classroom modal.
 */
class CreateClassroomModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "create-classroom";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: CreateClassroomState = reactive(new CreateClassroomState());

	/**
	 * Initialise the modal model.
	 */
	public init(): void {
		this.watchForFormChanges();
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
	 * Returns validation schema for the join classroom form.
	 */
	public getValidationSchema(): ValidationSchema {
		return {
			name: yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("classroom-name")]))
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
	 * True if the create classroom form is not valid. 
	 */
	public isCreateButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * True if the classroom is being created.
	 */
	public isCreateButtonLoading(): boolean {
		return this.state.isCreatingClassroom;
	}

	/**
	 * Called when the user clicks the create button.
	 * Creates a new classroom.
	 */
	public async onCreateButtonClicked(): Promise<void> {
		if (this.state.isValid && AuthenticationUtilities.currentUser.value) {
			this.state.isCreatingClassroom = true;

			const classroomBody: object = {
				name: this.state.data["name"],
				created: new Date().toISOString()
			};

			const classroomResponse: FirestoreFetchResponseModel<string> = await ClassroomProvider.createClassroomAsync(classroomBody);

			if (classroomResponse.wasSuccessful && classroomResponse.data) {
				await ClassroomUtilities.addClassroomUser(classroomResponse.data, AuthenticationUtilities.currentUser.value.uid, "admin");
			}

			ModalUtilities.closeModal();

			this.state.isCreatingClassroom = false;
		}
	}
}

// Export the modal model.
export const modal: CreateClassroomModel = new CreateClassroomModel();