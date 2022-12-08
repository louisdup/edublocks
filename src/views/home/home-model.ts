import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { reactive } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { HomeState } from "./home-state";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { ShowcaseUtilities } from "@/utilities/showcase-utilities";
import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { ProjectsUtilities } from "@/utilities/projects-utilities";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";

/**
 * View model for the home view.
 */
class HomeModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "home";
	}
		
	/**
	 * Reactive instance of the view state.
	 */
	public state: HomeState = reactive(new HomeState());

	/**
	 * Returns the text to display in the page title of the view.
	 */
	public getPageTitle(): string {
		return this.getText("home");
	}

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		// Load the initial data.
		this.loadInitialData();

		// Reload the initial set of data if a content refresh is triggered.
		this.observeContentRefresh(() => {
			this.loadInitialData();
		});
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private loadInitialData(): void {
		this.loadShowcaseProjects();
		this.loadRecentProjects();
	}

	/**
	 * Loads 5 projects from the showcase to display on the homepage.
	 */
	private loadShowcaseProjects(): void {
		this.state.isLoadingShowcaseProjects = true;

		ShowcaseProvider.getShowcaseProjectsAsync(5).then((response: FirestoreFetchResponseModel<Array<ShowcaseProjectModel>>) => {
			if (response.wasSuccessful && response.data) {
				this.state.showcaseProjects = response.data;
			}
			this.state.isLoadingShowcaseProjects = false;
		});
	}

	/**
	 * Returns a list of options for a showcase project dropdown.
	 */
	public getShowcaseProjectDropdownOptions(project: ShowcaseProjectModel): Array<Array<EbDropdownOption>> {
		return ShowcaseUtilities.getShowcaseProjectDropdownOptions(project);
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
	 * Called when a showcase project is clicked.
	 * Opens the showcase project detail page.
	 */
	public onShowcaseProjectClicked(project: ShowcaseProjectModel): void {
		ShowcaseUtilities.openShowcaseProject(project.id);
	}

	/**
	 * Loads 5 recent projects belonging to the current user to display on the homepage.
	 */
	private loadRecentProjects(): void {
		if (this.isCurrentUserLoggedIn()) {
			this.state.isLoadingRecentProjects = true;

			ProjectsProvider.getProjectsAsync(5).then((response: FirestoreFetchResponseModel<Array<FirestoreProjectModel>>) => {
				if (response.wasSuccessful && response.data) {
					this.state.recentProjects = response.data;
				}
				this.state.isLoadingRecentProjects = false;
			});
		}
		else {
			this.state.recentProjects = [];
		}
	}

	/**
	 * Returns a recent projects for the recent projects table.
	 */
	public getRecentProjects(): Array<EbTableItem> {
		return ProjectsUtilities.remapProjectsForTable(this.state.recentProjects);
	}

	/**
	 * True if projects are loading.
	 */
	public isProjectsTableLoading(): boolean {
		return this.state.isLoadingRecentProjects;
	}

	/**
	 * Returns a title for the projects table empty state.
	 */
	public getProjectsTableEmptyStateTitle(): string {
		return AuthenticationUtilities.currentUser.value ? this.getText("no-projects-found") : this.getText("login-to-view-projects");
	}
	
	/**
	 * Returns a title for the projects table empty state.
	 */
	public getProjectsTableEmptyStateSubtitle(): string {
		return AuthenticationUtilities.currentUser.value ? this.getText("get-started-by-creating") : this.getText("you-need-to-be-logged-in");
	}

	/**
	 * Called when a list item is clicked on the create new project slider.
	 * Redirects the user to the new project editor page.
	 */
	public onCreateNewProjectListItemClicked(mode: ModeModelBase): void {
		EditorUtilities.openEditor(mode);
	}
}

// Export the view model.
export const view: HomeModel = new HomeModel();