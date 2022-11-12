import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";
import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * Component state for the assignment submissions sidebar component.
 */
export class AssignmentSubmissionsState {
	/**
	 * True if the assignment is currently in the process of loading.
	 */
	public isLoadingAssignment: boolean = false;

	/** 
	 * True if the assignment's submissions are currently in the process of loading.
	 */
	public isLoadingAssignmentSubmissions: boolean = false;

	/** 
	 * True if the assignment submissions is being saved.
	 */
	public isAssignmentSubmissionBeingSaved: boolean = false;

	/**
	 * Returns the assignment.
	 */
	public assignment: ClassroomAssignmentModel | undefined;

	/**
	 * Returns a list of assignment submissions.
	 */
	public assignmentSubmissions: Array<ClassroomAssignmentSubmissionModel> = [];

	/**
	 * Returns the current assignment submission.
	 */
	public currentAssignmentSubmission: ClassroomAssignmentSubmissionModel | undefined;

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