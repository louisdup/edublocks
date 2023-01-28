import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { DesktopLayoutState } from "./desktop-layout-state";

/**
 * View model for the desktop layout component.
 */
export class DesktopLayoutModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "desktop-layout";
	}

	/**
	 * Reactive instance of the view state.
	 */
	public state: DesktopLayoutState = reactive(new DesktopLayoutState());

	/**
	 * Called when the menu button is clicked.
	 * Toggles whether or not the nav should be minimized
	 */
	public onMenuButtonClicked(): void {
		this.state.isNavMinimized = !this.state.isNavMinimized;
	}
}

// Export the view model.
export const view: DesktopLayoutModel = new DesktopLayoutModel();