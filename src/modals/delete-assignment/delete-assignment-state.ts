/**
 * View state for the delete assignment modal.
 */
export class DeleteAssignmentState {
	/**
	 * Returns the id of the assignment's classroom.
	 */
	public classroomId: string | undefined;

	/**
	 * Returns the id of the assignment.
	 */
	public assignmentId: string | undefined;

	/**
	 * True if an assignment is being deleted.
	 */
	public isDeletingAssignment: boolean = false;
}