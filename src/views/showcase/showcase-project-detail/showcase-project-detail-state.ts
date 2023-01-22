import { OtherUserModel } from "@/data/models/other-user-model";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";

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
	public showcaseProjectAuthor: OtherUserModel | undefined;

	/**
	 * True if the requested showcase project is currently in the process of loading.
	 */
	public isLoadingShowcaseProject: boolean = false;

	/**
	 * True if the author of the showcase project is currently in the process of loading.
	 */
	public isLoadingShowcaseProjectAuthor: boolean = false;
}