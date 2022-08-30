import { AuthenticationUtilities, SocialAuthProvider } from "@/utilities/authentication-utilities";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { reactive, watchEffect } from "vue";
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
	 * Returns a list of social authentication providers.
	 */
	public getSocialAuthProviders(): Array<SocialAuthProvider> {
		return AuthenticationUtilities.socialAuthProviders;
	}

	/**
	 * Called when a social provider is clicked and attempts to login, if successful the login modal will close.
	 */
	public async onSocialAuthProviderClicked(provider: SocialAuthProvider): Promise<void> {
		this.state.isBusy = true;
		await AuthenticationUtilities.loginWithSocialAuthProvider(provider.provider).then(() => {
			ModalUtilities.closeModal();
		}).catch(() => {
			ModalUtilities.showModal({
				modal: "Error"
			});
		});
		this.state.isBusy = false;
	}

	/**
	 * Called when a the user clicks the login button. 
	 * Takes the entered email and password and sends them to firebase to login.
	 */
	public async onLoginClicked(): Promise<void> {
		if (this.state.isValid) {
			this.state.isBusy = true;
			await AuthenticationUtilities.loginWithEmailAndPassword(this.state.data["email"], this.state.data["password"]).then(() => {
				ModalUtilities.closeModal();
			}).catch(() => {
				this.state.errors["email"] = this.getText("incorrect-email-password");
			});
			this.state.isBusy = false;
		}
	}
}

// Export the modal model.
export const modal: LoginModal = new LoginModal();