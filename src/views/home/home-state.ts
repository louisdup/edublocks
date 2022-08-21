import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";

/**
 * View state for the home view.
 */
export class HomeState {
	/**
	 * The list of showcase projects to display.
	 */
	public showcaseProjects: Array<ShowcaseProjectModel> = [];
	 
	/**
	 * True if showcase projects are currently in the process of loading.
	 */
	public isLoadingShowcaseProjects: boolean = false;
}