import { EbBulletListItem } from "@/components/eb-bullet-list/eb-bullet-list-types";
import router from "@/router";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { LogoUtilities } from "@/utilities/logo-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { RegisterState } from "./register-state";
import * as yup from "yup";

/**
 * View model for the register view.
 */
class RegisterModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "register";
	}

	/**
	 * Reactive instance of the view state.
	 */
	public state: RegisterState = reactive(new RegisterState());

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		this.determineUserAccess();
	}

	/**
	 * Determines if the user has access to the register page and redirects them to the relevant page if not.
	 */
	private determineUserAccess(): void {
		if (AuthenticationUtilities.currentUser.value && AuthenticationUtilities.hasVerifiedEmail()) {
			router.push("/");
		}
	}

	/**
	 * Returns validation schema for the sign in form.
	 */
	public getValidationSchema(): ValidationSchema {
		return {
			name: yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("name")])),
			email: yup
				.string()
				.email(FormUtilities.getValidationMessage("email"))
				.required(FormUtilities.getValidationMessage("required", [this.getText("email-address")])),
			password: yup
				.string()
				.min(8, FormUtilities.getValidationMessage("min-characters", [this.getText("password"), "8"]))
				.required(FormUtilities.getValidationMessage("required", [this.getText("password")])),
			confirm_password: yup
				.string()
				.oneOf([yup.ref("password"), null], FormUtilities.getValidationMessage("passwords-must-match"))
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
	 * Returns an image file path for the logo.
	 */
	public getLogoPath(): string {
		return LogoUtilities.getFullLogoPath();
	}

	/**
	 * Returns a list of promo items for the left promo container.
	 */
	public getPromoItems(): Array<EbBulletListItem> {
		return [
			{
				key: "save-projects-to-cloud",
				label: this.getText("save-projects-to-cloud")
			},
			{
				key: "share-projects",
				label: this.getText("share-projects")
			},
			{
				key: "manage-student-work",
				label: this.getText("manage-student-work")
			}
		];
	}

	/**
	 * Called when the google icon is clicked and prompts the user to sign in with google.
	 */
	public async onGoogleClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			await AuthenticationUtilities.signInWithGoogle();
			router.push("/");
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
			router.push("/");
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
			router.push("/");
		}
		catch {
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
		this.state.isBusy = false;
	}

	/**
	 * True if the register modal is busy. 
	 */
	public isRegisterButtonLoading(): boolean {
		return this.state.isBusy;
	}
	
	/**
	 * True if the register form is not valid. 
	 */
	public isRegisterButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * Called when the user clicks the register button.
	 * Registers a new user account. 
	 */
	public async onRegisterButtonClicked(): Promise<void> {
		if (this.state.isValid) {
			this.state.isBusy = true;

			try {
				await AuthenticationUtilities.registerWithEmailAndPassword(this.state.data["email"], this.state.data["password"], this.state.data["name"]);
			}
			catch {
				ModalUtilities.showModal({
					modal: "Error"
				});
			}

			this.state.isBusy = false;
		}
	}

	/**
	 * True if there is no signed in user. 
	 */
	public showRegisterForm(): boolean {
		return !AuthenticationUtilities.currentUser.value;
	}

	/**
	 * Returns text for the verify email screen. 
	 */
	public getVerifyEmailDescriptionText(): string {
		if (AuthenticationUtilities.currentUser.value) {
			return this.getText("to-verify-your-email", [AuthenticationUtilities.currentUser.value.email as string]);
		}
		else {
			return "";
		}
	}

	/**
	 * Called when the user clicks the sign out button.
	 * Signs them out and returns them to the homepage. 
	 */
	public async onSignOutButtonClicked(): Promise<void> {
		await AuthenticationUtilities.signOut();
		router.push("/");
	}

	/**
	 * True if the register modal is busy. 
	 */
	public isResendEmailButtonLoading(): boolean {
		return this.state.isBusy;
	}

	/**
	 * Called when the user clicks the resend email button.
	 */
	public async onResendEmailButtonClicked(): Promise<void> {
		this.state.isBusy = true;
		try {
			if (AuthenticationUtilities.currentUser.value) {
				await AuthenticationUtilities.sendVerificationEmail(AuthenticationUtilities.currentUser.value);
			}
		}
		catch {
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
		this.state.isBusy = false;
	}
}

// Export the view model.
export const view: RegisterModel = new RegisterModel();