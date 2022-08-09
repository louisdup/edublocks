import { reactive } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { HomeState } from "./home-state";

/**
 * View model for the home view.
 */
class HomeModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "home";
	}
		
	/**
	 * Reactive instance of the view state.
	 */
	public state: HomeState = reactive(new HomeState());

	/**
	 * Returns the text to display in the page title of the view.
	 */
	public getPageTitle(): string {
		return this.getText("home");
	}

}

// Export the view model.
export const view: HomeModel = new HomeModel();