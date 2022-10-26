import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * Component state for the project settings component.
 */
export class ProjectSettingsState {
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
}