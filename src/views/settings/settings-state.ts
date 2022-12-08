import { FormData } from "@/utilities/form-utilities";

/**
 * View state for the settings view.
 */
export class SettingsState {
	/**
	 * Returns the currently active tab.
	 */
	public activeTab: string = "account";

	/**
	 * Stores data from the settings page.
	 */
	 public data: FormData = {};
}