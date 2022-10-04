import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the create project modal.
 */
export class CreateProjectState {
	/**
	 * Stores data from the create project form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the create project form.
	 */
	public errors: FormErrors = {};

	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

	/**
	 * Returns a placeholder project name.
	 */
	public placeholderName: string = "";
}