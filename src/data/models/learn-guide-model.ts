import { LearnGuideStepModel } from "./learn-guide-step-model";
import { StoryblokImageModel } from "./storyblok-image-model";

/**
 * Data model for a learn guide.
 */
export interface LearnGuideModel {
	title: string;
	mode: string;
	description: string;
	image: StoryblokImageModel;
	steps: Array<LearnGuideStepModel>;
	slug: string;
}