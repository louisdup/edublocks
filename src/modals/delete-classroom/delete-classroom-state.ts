/**
 * View state for the delete classroom modal.
 */
export class DeleteClassroomState {
	/**
	 * Returns the id of the classroom.
	 */
	public classroomId: string | undefined;

	/**
	 * True if an classroom is being deleted.
	 */
	public isDeletingClassroom: boolean = false;
}