import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { UserModel } from "@/data/models/user-model";

/**
 * View state for the showcase project detail view.
 */
export class ShowcaseProjectDetailState {
	/**
	 * Returns a showcase project.
	 */
	public showcaseProject: ShowcaseProjectModel | undefined;

	/**
	 * Returns the author of the showcase project.
	 */
	public showcaseProjectAuthor: UserModel | undefined;

	/**
	 * True if the requested showcase project is currently in the process of loading.
	 */
	public isLoadingShowcaseProject: boolean = false;
}