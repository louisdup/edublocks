/**
 * View state for the unsubmit assignment modal.
 */
export class UnsubmitAssignmentState {
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
	 * True if the current user has the admin role.
	 */
	public isCurrentUserAdmin: boolean | undefined;

	/**
	 * True if an assignment is being unsubmitted.
	 */
	public isUnsubmittingAssignment: boolean = false;
}