import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { reactive } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { ProjectsState } from "./projects-state";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { ProjectsUtilities } from "@/utilities/projects-utilities";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
/**
 * View model for the projects view.
 */
class ProjectsModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "projects";
	}
		
	/**
	 * Reactive instance of the view state.
	 */
	public state: ProjectsState = reactive(new ProjectsState());

	/**
	 * Returns the text to display in the page title of the view.
	 */
	public getPageTitle(): string {
		return this.getText("projects");
	}

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		// Load the initial data.
		this.loadInitialData();

		// Reload the initial set of data if a content refresh is triggered.
		this.observeContentRefresh(() => {
			console.log("HELLO WORLD");
			this.loadInitialData();
		});
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private loadInitialData(): void {
		this.loadProjects();
	}

	/**
	 * Loads initial 20 projects belonging to the current user.
	 */
	private loadProjects(): void {
		if (this.isCurrentUserLoggedIn()) {
			this.state.isLoadingInitialProjects = true;

			ProjectsProvider.getProjectsAsync(20, this.state.search).then((response: FirestoreFetchResponseModel<Array<FirestoreProjectModel>>) => {
				if (response.wasSuccessful && response.data) {
					this.state.projects = response.data;
				}
				this.state.isLoadingInitialProjects = false;
			});
		}
		else {
			this.state.projects = [];
		}
	}

	/**
	 * Loads 20 more projects and pushes them to the project list in state.
	 */
	private loadMoreProjects(): void {	
		if (this.isCurrentUserLoggedIn()) {
			this.state.isLoadingMoreProjects = true;

			const lastProjectSnapshot: QueryDocumentSnapshot = this.state.projects[this.state.projects.length-1].snapshot;

			ProjectsProvider.getProjectsAsync(20, this.state.search, lastProjectSnapshot).then((response: FirestoreFetchResponseModel<Array<FirestoreProjectModel>>) => {
				if (response.wasSuccessful && response.data) {
					response.data.forEach((project: FirestoreProjectModel) => {
						this.state.projects.push(project);
					});
				}
				this.state.isLoadingMoreProjects = false;
			});
		}
	}

	/**
	 * Returns a recent projects for the recent projects table.
	 */
	public getRecentProjects(): Array<EbTableItem> {
		return ProjectsUtilities.remapProjectsForTable(this.state.projects);
	}

	/**
	 * Called when the user clicks the open local project button.
	 * Imports & opens a local project.
	 */
	public onOpenLocalProjectClicked(): void {
		ProjectsUtilities.openLocalProject();
	}

	/**
	 * True if user is logged in and data layout is list.
	 */
	public isProjectsTableVisible(): boolean {
		return this.isCurrentUserLoggedIn();
	}

	/**
	 * True if projects are loading.
	 */
	public isProjectsTableLoading(): boolean {
		return this.state.isLoadingInitialProjects;
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
		if (AuthenticationUtilities.currentUser.value) {
			if (this.state.search.length) {
				return this.getText("search-for-something-else");
			}
			else {
				return this.getText("get-started-by-creating");
			}
		}
		else {
			return this.getText("you-need-to-be-logged-in");
		}
	}

	/**
	 * Called when the search input changes, and filters the projects list based on the search term.
	 */
	public onSearchInput(): void {
		if (this.state.search.length > 2 || this.state.search.length === 0) {
			this.loadProjects();
		}
	}

	/**
	 * Called when the user scrolls on the page. 
	 * Calls firestore to load more projects when the user has scrolled past 70% of the page.
	 */
	public onPageScroll(event: Event): void {
		this.onScroll(event, 70, () => {
			if (!this.state.isLoadingInitialProjects && !this.state.isLoadingMoreProjects) {
				this.loadMoreProjects();
			}
		});
	}
}

// Export the view model.
export const view: ProjectsModel = new ProjectsModel();