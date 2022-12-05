import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the create classroom modal.
 */
export class CreateClassroomState {
	/**
	 * Stores data from the create classroom form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the create classroom form.
	 */
	public errors: FormErrors = {};

	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

	/**
	 * True if the classroom is being created.
	 */
	public isCreatingClassroom: boolean = false;
}