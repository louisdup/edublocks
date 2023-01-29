import { LearnGuideModel } from "./learn-guide-model";

/**
 * Data model for a group of learn guides.
 */
export interface LearnGuidesModel {
	categories: any;
	codelabs: Array<LearnGuideModel>;
}