import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the register view.
 */
export class RegisterState {
	/**
	 * Stores data from the register form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the register form.
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