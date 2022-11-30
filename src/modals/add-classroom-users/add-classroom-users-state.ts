/**
 * View state for the add classroom users modal.
 */
export class AddClassroomUsersState {
	/**
	 * Returns the join classroom short link.
	 */
	public joinClassroomLink: string | undefined;

	/**
	 * True if the modal is busy doing something.
	 */
	public isBusy: boolean = false;

	/**
	 * True if the project link has been copied to the clipboard.
	 */
	public hasCopied: boolean = false;

	/**
	 * True if the project belongs to the current user.
	 */
	public isCurrentUserAuthor: boolean = false;
}