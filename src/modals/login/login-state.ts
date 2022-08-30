import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the login modal.
 */
export class LoginState {
	/**
	 * Stores data from the login form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the login form.
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