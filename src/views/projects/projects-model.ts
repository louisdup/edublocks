import { FetchResponse } from "@/data/fetch/types";
import { reactive } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { ProjectsState } from "./projects-state";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { ProjectsUtilities } from "@/utilities/projects-utilities";
import { EbTableHeader } from "@/components/eb-table/eb-table-types";
import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { QueryDocumentSnapshot } from "@firebase/firestore";
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
	public loadProjects(): void {
		this.state.isLoadingInitialProjects = true;
		
		if (this.isCurrentUserLoggedIn()) {
			ProjectsProvider.getProjectsAsync(20, this.state.search).then((response: FetchResponse<Array<FirestoreProjectModel>>) => {
				if (response.wasSuccessful && response.data) {
					this.state.projects = response.data;
				}
				this.state.isLoadingInitialProjects = false;
			});
		}
	}

	/**
	 * Loads 20 more projects and pushes them to the project list in state.
	 */
	public loadMoreProjects(): void {
		this.state.isLoadingMoreProjects = true;

		if (this.isCurrentUserLoggedIn()) {
			const lastProjectSnapshot: QueryDocumentSnapshot = this.state.projects[this.state.projects.length-1].snapshot;

			ProjectsProvider.getProjectsAsync(20, this.state.search, lastProjectSnapshot).then((response: FetchResponse<Array<FirestoreProjectModel>>) => {
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
	 * Returns a list of headers for the projects table.
	 */
	public getRecentProjectsTableHeaders(): Array<EbTableHeader> {
		return ProjectsUtilities.getProjectsTableHeaders();
	}

	/**
	 * True if user is logged in and data layout is list.
	 */
	public isProjectsTableVisible(): boolean {
		return this.isCurrentUserLoggedIn() && this.isDataLayoutList();
	}

	/**
	 * Returns a list of options for a project dropdown.
	 */
	public getProjectDropdownOptions(project: FirestoreProjectModel): Array<Array<EbDropdownOption>> {
		return ProjectsUtilities.getProjectDropdownOptions(project);
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