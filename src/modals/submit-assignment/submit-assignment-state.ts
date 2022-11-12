/**
 * View state for the submit assignment modal.
 */
export class SubmitAssignmentState {
	/**
	 * Returns the id of the assignment's classroom.
	 */
	public classroomId: string | undefined;

	/**
	 * Returns the id of the assignment.
	 */
	public assignmentId: string | undefined;

	/**
	 * Returns the id of the assignment.
	 */
	public submissionId: string | undefined;

	/**
	 * True if an assignment is being submitted.
	 */
	public isSubmittingAssignment: boolean = false;
}