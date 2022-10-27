import { FormData } from "@/utilities/form-utilities";

/**
 * View state for the share project modal.
 */
export class ShareProjectState {
	/**
	 * Stores data from the share project modal.
	 */
	public data: FormData = {};
	
	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

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