import { StoryblokStoryModel } from "./storyblok-story-model";

/**
 * Data model for a storyblok story.
 */
export interface StoryblokResponseModel<T> {
	stories: Array<StoryblokStoryModel<T>>;
}