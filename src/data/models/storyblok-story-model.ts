/**
 * Data model for a storyblok story.
 */
export interface StoryblokStoryModel<T> {
	name: string;
	created_at: string;
	published_at: string;
	id: number;
	uuid: string;
	content: T;
	slug: string;
	lang: string;
}