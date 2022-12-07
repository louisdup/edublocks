import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";

/**
 * View state for the showcase view.
 */
export class ShowcaseState {
	/**
	 * True if showcase projects are currently in the process of loading.
	 */
	 public isLoadingInitialShowcaseProjects: boolean = false;

	 /**
	  * True if showcase projects are currently in the process of loading.
	  */
	 public isLoadingMoreShowcaseProjects: boolean = false;
 
	 /**
	  * The list of showcase projects to display.
	  */
	 public showcaseProjects: Array<ShowcaseProjectModel> = [];
}