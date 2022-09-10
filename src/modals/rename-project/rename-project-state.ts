import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the rename project modal.
 */
export class RenameProjectState {
	/**
	 * Stores data from the rename project form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the rename project form.
	 */
	public errors: FormErrors = {};

	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

	/**
	 * True if the modal is busy doing something.
	 */
	public isBusy: boolean = false;
}