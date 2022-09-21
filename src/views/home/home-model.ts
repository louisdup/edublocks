import { FetchResponse } from "@/data/fetch/types";
import { reactive, ref } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { HomeState } from "./home-state";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { ShowcaseUtilities } from "@/utilities/showcase-utilities";
import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { ProjectsUtilities } from "@/utilities/projects-utilities";
import { EbTableHeader } from "@/components/eb-table/eb-table-types";
import { EditorUtilities } from "@/utilities/editor-utilities";
import router from "@/router";
import { PlatformModelBase } from "@/platforms/base-classes/platform-model-base";
import { FilenameUtilities } from "@/utilities/filename-utilities";

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
	 * Loads 10 projects from the showcase to display on the homepage.
	 */
	public loadShowcaseProjects(): void {
		this.state.isLoadingShowcaseProjects = true;

		ShowcaseProvider.getShowcaseProjectsAsync(10).then((response: FetchResponse<Array<ShowcaseProjectModel>>) => {
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
	 * Loads 10 recent projects belonging to the current user to display on the homepage.
	 */
	public loadRecentProjects(): void {
		this.state.isLoadingRecentProjects = true;
		
		if (this.isCurrentUserLoggedIn()) {
			ProjectsProvider.getProjectsAsync(10).then((response: FetchResponse<Array<FirestoreProjectModel>>) => {
				if (response.wasSuccessful && response.data) {
					this.state.recentProjects = response.data;
				}
				this.state.isLoadingRecentProjects = false;
			});
		}
	}

	/**
	 * Returns a list of headers for the recent projects table.
	 */
	public getRecentProjectsTableHeaders(): Array<EbTableHeader> {
		return ProjectsUtilities.getProjectsTableHeaders();
	}

	/**
	 * Returns a list of options for a project dropdown.
	 */
	public getProjectDropdownOptions(project: FirestoreProjectModel): Array<Array<EbDropdownOption>> {
		return ProjectsUtilities.getProjectDropdownOptions(project);
	}

	/**
	 * Called when a list item is clicked on the create new project slider.
	 * Sets the current project to be a new project with the selected platform.
	 * The user is then redirected to the editor.
	 */
	public onCreateNewProjectListItemClicked(platform: PlatformModelBase): void {
		EditorUtilities.setCurrentProject({
			name: FilenameUtilities.generateRandomFilename(),
			platform,
			type: "blocks",
			code: ref(""),
			blocks: ""
		});

		router.push("/editor");
	}
}

// Export the view model.
export const view: HomeModel = new HomeModel();