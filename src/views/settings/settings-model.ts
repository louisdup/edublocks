import { EbSelectOption } from "@/components/eb-select/eb-select-types";
import { EbTabsOption } from "@/components/eb-tabs/eb-tabs-types";
import { state } from "@/data/state";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { LocalizationUtilities } from "@/utilities/localization-utilities";
import { UsersUtilities } from "@/utilities/users-utilities";
import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive, watchEffect } from "vue";
import { SettingsState } from "./settings-state";

/**
 * View model for the settings view.
 */
class SettingsModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "settings";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: SettingsState = reactive(new SettingsState());

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		this.setInitialValues();
	}

	/**
	 * Set initial values for the settings page.
	 */
	public setInitialValues(): void {
		this.state.data["language"] = state.language;
	}

	/**
	 * Returns the text to display in the page title of the view.
	 */
	public getPageTitle(): string {
		return this.getText("settings");
	}

	/**
	 * Returns a list of tabs to display on the classroom detail page.
	 */
	public getTabs(): Array<EbTabsOption> {
		return [
			{
				label: this.getText("account"),
				key: "account"
			}
		];
	}
	
	/**
	 * Called when a tab is clicked.
	 */
	public onTabClicked(tab: EbTabsOption): void {
		this.state.activeTab = tab.key;
	}
	
	/**
	 * True if the user is logged in.
	 */
	public isProfileSectionVisible(): boolean {
		return AuthenticationUtilities.currentUser.value !== null;
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
	 * Returns the display name of the logged in user.
	 */
	public getCurrentUserDisplayName(): string | null | undefined {
		return AuthenticationUtilities.currentUser.value?.displayName;
	}

	/**
	 * Returns the email of the logged in user.
	 */
	public getCurrentUserEmail(): string | null | undefined {
		return AuthenticationUtilities.currentUser.value?.email;
	}

	/**
	 * Returns the join date of the logged in user.
	 */
	public getCurrentUserJoinDate(): string | null | undefined {
		return this.formatDate(AuthenticationUtilities.currentUser.value?.metadata.creationTime as string);
	}

	/**
	 * Called when the user clicks the language save button
	 * Switches the users language.
	 */
	public onLanguageSaveButtonClicked(): void {
		localStorage.setItem("language", this.state.data["language"]);
		location.reload();
	}

	/**
	 * Returns a list of language options.
	 */
	public getLanguageOptions(): Array<EbSelectOption> {
		return LocalizationUtilities.remapSupportedLanguagesForSelect();
	}
}

// Export the view model.
export const view: SettingsModel = new SettingsModel();