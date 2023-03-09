import { EbTabsOption } from "@/components/eb-tabs/eb-tabs-types";
import { ModeUtilities } from "@/utilities/mode-utilities";
import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { LearnState } from "./learn-state";
import * as LearnProvider from "@/data/providers/learn-provider";
import { FetchResponseModel } from "@/data/models/fetch-response-model";
import { LearnGuideModel } from "@/data/models/learn-guide-model";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import router from "@/router";
import { StoryblokResponseModel } from "@/data/models/storyblok-response-model";
import { StoryblokStoryModel } from "@/data/models/storyblok-story-model";

/**
 * View model for the learn view.
 */
class LearnModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "learn";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: LearnState = reactive(new LearnState());

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		this.loadInitialData();
	}

	/**
	 * Returns the text to display in the page title of the view.
	 */
 	public getPageTitle(): string {
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
	 * Called when the learn more button is clicked.
	 * Sends the user to the curriculum website.
	 */
	public onLearnMoreButtonClicked(): void {
		window.open("https://curriculum.edublocks.org", "_blank")!.focus();
	}

	/**
	 * Returns a list of tabs so the user can filter guides by mode.
	 */
	public getTabs(): Array<EbTabsOption> {
		return [
			{
				key: "all",
				label: this.getText("all")
			},
			...ModeUtilities.remapModesForTabs()
		];
	}

	/**
	 * Called when a tab is clicked.
	 */
	public onTabClicked(tab: EbTabsOption): void {
		this.state.activeTab = tab.key;
	}

	/**
	 * Returns a list of learn guides filtered by mode.
	 */
	public getFilteredLearnGuides(): Array<LearnGuideModel> {
		return this.state.learnGuides.filter((guide: LearnGuideModel) => {
			return this.state.activeTab === guide.mode || this.state.activeTab === "all";
		});
	}

	/**
	 * Called when a learn guide is clicked.
	 * Opens the learn guide.
	 */
	public async onLearnGuideClicked(guide: LearnGuideModel): Promise<void> {
		const mode: ModeModelBase = ModeUtilities.getModeFromKey(guide.mode);
		
		EditorUtilities.setCurrentProject({
			name: guide.title,
			mode: mode,
			type: "blocks",
			learnGuide: guide
		});

		if (EditorUtilities.currentProject.value) {
			await router.push("/project/new");
			EditorUtilities.currentProject.value.mode.setSidebarTabActive("learn");
		}
	}

	/**
	 * True if there are no guides to display and no guides are loading.
	 */
	public isEmptyStateVisible(): boolean {
		return this.getFilteredLearnGuides().length === 0 && !this.state.isLoadingLearnGuides;
	}
}

// Export the view model.
export const view: LearnModel = new LearnModel();