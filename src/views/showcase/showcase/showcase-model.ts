import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { ShowcaseState } from "./showcase-state";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { ShowcaseUtilities } from "@/utilities/showcase-utilities";
import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";

/**
 * View model for the showcase view.
 */
class ShowcaseModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "showcase";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: ShowcaseState = reactive(new ShowcaseState());

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		this.loadInitialData();

		// Reload the initial set of data if a content refresh is triggered.
		this.observeContentRefresh(() => {
			this.loadInitialData();
		});
	}

	/**
	 * Returns the text to display in the page title of the view.
	 */
 	public getPageTitle(): string {
		return this.getText("showcase");
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private loadInitialData(): void {
		this.loadShowcaseProjects();
	}
	
	/**
	 * Loads initial 9 projects from the showcase.
	 */
	private loadShowcaseProjects(): void {
		this.state.isLoadingInitialShowcaseProjects = true;
	
		ShowcaseProvider.getShowcaseProjectsAsync(9).then((response: FirestoreFetchResponseModel<Array<ShowcaseProjectModel>>) => {
			if (response.wasSuccessful && response.data) {
				this.state.showcaseProjects = response.data;
			}
			this.state.isLoadingInitialShowcaseProjects = false;
		});
	}
	
	/**
	 * Loads 9 more projects and pushes them to the showcase project list in state.
	 */
	private loadMoreShowcaseProjects(): void {	
		this.state.isLoadingMoreShowcaseProjects = true;
	
		const lastProjectSnapshot: QueryDocumentSnapshot = this.state.showcaseProjects[this.state.showcaseProjects.length-1].snapshot;
	
		ShowcaseProvider.getShowcaseProjectsAsync(9, lastProjectSnapshot).then((response: FirestoreFetchResponseModel<Array<ShowcaseProjectModel>>) => {
			if (response.wasSuccessful && response.data) {
				response.data.forEach((project: ShowcaseProjectModel) => {
					this.state.showcaseProjects.push(project);
				});
			}
			this.state.isLoadingMoreShowcaseProjects = false;
		});
	}

	/**
	 * Called when the user scrolls on the page. 
	 * Calls firestore to load more showcase projects when the user has scrolled past 70% of the page.
	 */
	public onPageScroll(event: Event): void {
		this.onScroll(event, 70, () => {
			if (!this.state.isLoadingInitialShowcaseProjects && !this.state.isLoadingMoreShowcaseProjects) {
				this.loadMoreShowcaseProjects();
			}
		});
	}

	/**
	 * Returns the name of the current featured project.
	 */
 	public getFeaturedProjectName(): string {
		return this.getText("introducing-the-html-editor");
	}

	/**
	 * Returns the description of the current featured project.
	 */
 	public getFeaturedProjectDescription(): string {
		return this.getText("introducing-the-html-editor-description");
	}

	/**
	 * Called when a view project button is clicked.
	 * Opens the featured showcase project detail page.
	 */
	public onViewFeaturedProjectClicked(): void {
		ShowcaseUtilities.openShowcaseProject("4I4ly8Z0mRrurr9seUoP");
	}

	/**
	 * Returns the mode color based on the showcase project.
	 */
	public getShowcaseProjectThumbnailColor(project: ShowcaseProjectModel): string | undefined {
		if (project.mode) {
			return this.getModeFromKey(project.mode).config.color;
		}
		else {
			return undefined;
		}
	}
	
	/**
	 * Returns the mode logo based on the showcase project.
	 */
	public getShowcaseProjectThumbnailIcon(project: ShowcaseProjectModel): string | undefined {
		if (project.mode) {
			return this.getModeFromKey(project.mode).config.logo;
		}
		else {
			return undefined;
		}
	}
	
	/**
	 * Returns the mode name based on the showcase project.
	 */
	public getShowcaseProjectModeName(project: ShowcaseProjectModel): string | undefined {
		if (project.mode) {
			return this.getModeFromKey(project.mode).config.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns a list of options for a showcase project dropdown.
	 */
	public getShowcaseProjectDropdownOptions(project: ShowcaseProjectModel): Array<Array<EbDropdownOption>> {
		return ShowcaseUtilities.getShowcaseProjectDropdownOptions(project);
	}

	/**
	 * Called when a showcase project is clicked.
	 * Opens the showcase project detail page.
	 */
	public onShowcaseProjectClicked(project: ShowcaseProjectModel): void {
		ShowcaseUtilities.openShowcaseProject(project.id);
	}
}

// Export the view model.
export const view: ShowcaseModel = new ShowcaseModel();