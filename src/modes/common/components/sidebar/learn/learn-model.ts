import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { reactive } from "vue";
import { LearnState } from "./learn-state";
import * as LearnProvider from "@/data/providers/learn-provider";
import { FetchResponseModel } from "@/data/models/fetch-response-model";
import { LearnGuideModel } from "@/data/models/learn-guide-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { StoryblokResponseModel } from "@/data/models/storyblok-response-model";
import { StoryblokStoryModel } from "@/data/models/storyblok-story-model";

/**
 * Component model for the project settings component.
 */
class LearnModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "learn";
	}

	/**
	 * Reactive instance of the component state.
	 */
	public state: LearnState = reactive(new LearnState());

	/**
	 * Initialise the component model.
	 */
	public init(): void {
		this.loadInitialData();
	}

	/**
	 * Returns the title for the learn component.
	 */
	public getTitle(): string {
		return this.getText("learn");
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private loadInitialData(): void {
		this.loadLearnGuides();
	}

	/**
	 * Loads all learn guides.
	 */
	private loadLearnGuides(): void {
		this.state.isLoadingLearnGuides = true;

		this.state.learnGuides = [];
		
		LearnProvider.getLearnGuidesAsync().then((response: FetchResponseModel<StoryblokResponseModel<LearnGuideModel>>) => {
			if (response.wasSuccessful && response.data) {
				response.data.stories.forEach((story: StoryblokStoryModel<LearnGuideModel>) => {
					story.content.slug = story.slug;
					this.state.learnGuides.push(story.content);
				});
			}
			this.state.isLoadingLearnGuides = false;
		});
	}

	/**
	 * True if there is no active learn guide set against the current project.
	 */
	public isLearnGuidesGridVisible(): boolean {
		if (EditorUtilities.currentProject.value && !EditorUtilities.currentProject.value.learnGuide) {
			return true;
		}
		else {
			return false;
		}
	}

	/**
	 * Returns a list of learn guides filtered by mode.
	 */
	public getFilteredLearnGuides(): Array<LearnGuideModel> {
		return this.state.learnGuides.filter((guide: LearnGuideModel) => {
			return EditorUtilities.currentProject.value?.mode.config.key === guide.mode;
		});
	}
	
	/**
	 * True if there are no guides to display and no guides are loading.
	 */
	public isEmptyStateVisible(): boolean {
		return this.getFilteredLearnGuides().length === 0 && !this.state.isLoadingLearnGuides;
	}

	/**
	 * Called when the user clicks a learn guide.
	 * Sets it as the active guide.
	 */
	public onLearnGuideClicked(guide: LearnGuideModel): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.learnGuide = guide;
		}
	}

	/**
	 * Removes the active learn guide.
	 */
	public onBackButtonClicked(): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.learnGuide = undefined;
		}
	}

	/**
	 * Returns the title of the current learn guide.
	 */
	public getLearnGuideTitle(): string | undefined {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.learnGuide) {
			return EditorUtilities.currentProject.value.learnGuide.title;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the url of the current learn guide.
	 */
	public getLearnGuideUrl(): string | undefined {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.learnGuide) {
			return `https://learn.edublocks.org/guide/${EditorUtilities.currentProject.value.learnGuide.slug}`;
		}
		else {
			return undefined;
		}
	}
}

// Export the component model
export const component: LearnModel = new LearnModel();