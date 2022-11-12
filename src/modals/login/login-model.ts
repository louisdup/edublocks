import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { LoginState } from "./login-state";
import * as yup from "yup";

/**
 * Modal model for the login modal.
 */
class LoginModal extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "login";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: LoginState = reactive(new LoginState());

	/**
	 * Returns validation schema for the login form.
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
	 * Called when the google icon is clicked and prompts the user to login with google.
	 */
	public async onGoogleClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			await AuthenticationUtilities.loginWithGoogle();
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
	 * Called when the microsoft icon is clicked and prompts the user to login with microsoft.
	 */
	public async onMicrosoftClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			await AuthenticationUtilities.loginWithMicrosoft();
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
	 * Called when the apple icon is clicked and prompts the user to login with apple.
	 */
	public async onAppleClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			await AuthenticationUtilities.loginWithApple();
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
	 * Called when a the user clicks the login button. 
	 * Takes the entered email and password and sends them to firebase to login.
	 */
	public async onLoginClicked(): Promise<void> {
		if (this.state.isValid) {
			this.state.isBusy = true;
			try {
				await AuthenticationUtilities.loginWithEmailAndPassword(this.state.data["email"], this.state.data["password"]);
				ModalUtilities.closeModal();
			}
			catch {
				this.state.errors["email"] = this.getText("incorrect-email-password");
			}
			this.state.isBusy = false;
		}
	}

	/**
	 * True if the login modal is busy. 
	 */
	public isLoginButtonLoading(): boolean {
		return this.state.isBusy;
	}

	/**
	 * True if the login form is not valid. 
	 */
	public isLoginButtonDisabled(): boolean {
		return !this.state.isValid;
	}
}

// Export the modal model.
export const modal: LoginModal = new LoginModal();