import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { UsersUtilities } from "@/utilities/users-utilities";

/**
 * Component model for the user menu component.
 */
export class UserMenuModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "user-menu";
	}

	/**
	 * True if there is a logged in user.
	 */
	public isUserLoggedIn(): boolean {
		return AuthenticationUtilities.currentUser.value ? true : false;
	}

	/**
	 * Called when the login button is clicked.
	 * Opens the login modal.
	 */
	public onLoginClicked(): void {
		ModalUtilities.showModal({
			modal: "SignIn"
		});
	}

	/**
	 * Returns a profile picture for the current user.
	 */
	public getCurrentUserProfilePicture(): string | undefined {
		if (AuthenticationUtilities.currentUser.value && AuthenticationUtilities.currentUser.value.email) {
			return UsersUtilities.getProfilePictureForEmail(AuthenticationUtilities.currentUser.value.email);
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns a list of dropdown options for the user menu.
	 */
	public getDropdownOptions(): Array<Array<EbDropdownOption>> {
		return [
			[
				{
					title: this.getText("sign-out"),
					icon: ["far", "arrow-right-from-bracket"],
					action: (): void => {
						AuthenticationUtilities.signOut();
					}
				}
			]
		];
	}
}

// Export the component model.
export const component: UserMenuModel = new UserMenuModel();