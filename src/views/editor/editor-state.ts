/**
 * View state for the editor view.
 */
export class EditorState {
	/**
	 * True if a panel in the split view is being resized.
	 */
	public isSplitViewBeingResized: boolean = false;

	/**
	 * True if the editor is loading a project.
	 */
	public isProjectLoading: boolean = false;

	/**
	 * True if the current user has no access to the project they're trying to access.
	 */
	public noAccess: boolean = false;
}