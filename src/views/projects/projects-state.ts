import { FirestoreProjectModel } from "@/data/models/firestore-project-model";

/**
 * View state for the projects view.
 */
export class ProjectsState {	 
	/**
	 * True if projects are currently in the process of loading.
	 */
	public isLoadingInitialProjects: boolean = false;

	/**
	 * True if projects are currently in the process of loading.
	 */
	public isLoadingMoreProjects: boolean = false;

	/**
	 * The list of projects to display.
	 */
	public projects: Array<FirestoreProjectModel> = [];

	/**
	 * Returns the value of the search field.
	 */
	public search: string = "";
}