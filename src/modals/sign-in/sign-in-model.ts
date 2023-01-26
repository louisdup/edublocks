import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { SignInState } from "./sign-in-state";
import * as yup from "yup";

/**
 * Modal model for the sign in modal.
 */
class SignInModal extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "sign-in";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: SignInState = reactive(new SignInState());

	/**
	 * Returns validation schema for the sign in form.
	 */
	public getValidationSchema(): ValidationSchema {
		return {
			email: yup
				.string()
				.email(FormUtilities.getValidationMessage("email"))
				.required(FormUtilities.getValidationMessage("required", [this.getText("email-address")])),
			password: yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("password")]))
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
	 * Called when the google icon is clicked and prompts the user to sign in with google.
	 */
	public async onGoogleClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			await AuthenticationUtilities.signInWithGoogle();
			ModalUtilities.closeModal();
		}
		catch {
			ModalUtilities.showModal({
				modal: "Error"
			});		
		}
		this.state.isBusy = false;
	}

	/**
	 * Called when the microsoft icon is clicked and prompts the user to sign in with microsoft.
	 */
	public async onMicrosoftClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			await AuthenticationUtilities.signInWithMicrosoft();
			ModalUtilities.closeModal();
		}
		catch {
			ModalUtilities.showModal({
				modal: "Error"
			});		
		}
		this.state.isBusy = false;
	}

	/**
	 * Called when the apple icon is clicked and prompts the user to sign in with apple.
	 */
	public async onAppleClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			await AuthenticationUtilities.signInWithApple();
			ModalUtilities.closeModal();
		}
		catch {
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
		this.state.isBusy = false;
	}

	/**
	 * Called when a the user clicks the sign in button. 
	 * Takes the entered email and password and sends them to firebase to sign in.
	 */
	public async onSignInClicked(): Promise<void> {
		if (this.state.isValid) {
			this.state.isBusy = true;
			try {
				await AuthenticationUtilities.signInWithEmailAndPassword(this.state.data["email"], this.state.data["password"]);
				ModalUtilities.closeModal();
			}
			catch {
				this.state.errors["email"] = this.getText("incorrect-email-password");
			}
			this.state.isBusy = false;
		}
	}

	/**
	 * True if the sign in modal is busy. 
	 */
	public isSignInButtonLoading(): boolean {
		return this.state.isBusy;
	}

	/**
	 * True if the sign in form is not valid. 
	 */
	public isSignInButtonDisabled(): boolean {
		return !this.state.isValid;
	}
}

// Export the modal model.
export const modal: SignInModal = new SignInModal();