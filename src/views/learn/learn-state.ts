import { LearnGuideModel } from "@/data/models/learn-guide-model";

/**
 * View state for the learn view.
 */
export class LearnState {
	/**
	 * True if learn guides are currently in the process of loading.
	 */
	 public isLoadingLearnGuides: boolean = false;
 
	 /**
	  * The list of learn guides to display.
	  */
	 public learnGuides: Array<LearnGuideModel> = [];
 
	 /**
	  * Returns the currently active tab.
	  */
	 public activeTab: string = "all";
}