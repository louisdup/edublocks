import { LearnGuideModel } from "@/data/models/learn-guide-model";

/**
 * Component state for the learn sidebar component.
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
}