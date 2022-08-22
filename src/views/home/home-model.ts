import { FetchResponse } from "@/data/fetch/types";
import { reactive } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { HomeState } from "./home-state";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";

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

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		this.loadShowcaseProjects();
	}

	/**
	 * Loads 10 projects from the showcase to display on the homepage.
	 */
	public loadShowcaseProjects(): void {
		this.state.isLoadingShowcaseProjects = true;

		ShowcaseProvider.getShowcaseProjectsAsync(10).then((response: FetchResponse<Array<ShowcaseProjectModel>>) => {
			if (response.wasSuccessful && response.data) {
				this.state.showcaseProjects = response.data;
			}
			this.state.isLoadingShowcaseProjects = false;
		});
	}

}

// Export the view model.
export const view: HomeModel = new HomeModel();