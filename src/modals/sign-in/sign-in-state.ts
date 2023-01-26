import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the sign in modal.
 */
export class SignInState {
	/**
	 * Stores data from the sign in form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the sign in form.
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