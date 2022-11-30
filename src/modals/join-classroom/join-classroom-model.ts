import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { reactive, watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { JoinClassroomState } from "./join-classroom-state";
import * as yup from "yup";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";

/**
 * Modal model for the join classroom modal.
 */
class JoinClassroomModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "join-classroom";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: JoinClassroomState = reactive(new JoinClassroomState());

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
			code: yup
				.string()
				.min(4, FormUtilities.getValidationMessage("min-characters", [this.getText("code"), "4"]))
				.required(FormUtilities.getValidationMessage("required", [this.getText("code")]))
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
	 * True if the join classroom form is not valid. 
	 */
	public isJoinButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * True if the user is being redirected to the classroom join page.
	 */
	public isJoinButtonLoading(): boolean {
		return this.state.isRedirecting;
	}

	/**
	 * Called when the user clicks the join button.
	 * Redirects the user to the join page of the specified classroom.
	 */
	public onJoinClicked(): void {
		if (this.state.isValid) {
			this.state.isRedirecting = true;
			location.href = `${ClassroomUtilities.joinUrl}/${this.state.data["code"]}`;
		}
	}
}

// Export the modal model.
export const modal: JoinClassroomModel = new JoinClassroomModel();