import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the join classroom modal.
 */
export class JoinClassroomState {
	/**
	 * Stores data from the join classroom form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the join classroom form.
	 */
	public errors: FormErrors = {};

	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

	/**
	 * True if the user is being redirected to the classroom join page.
	 */
	public isRedirecting: boolean = false;
}