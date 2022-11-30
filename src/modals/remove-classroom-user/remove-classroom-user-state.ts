/**
 * View state for the remove classroom user modal.
 */
export class RemoveClassroomUserState {
	/**
	 * Returns the id of the classroom.
	 */
	public classroomId: string | undefined;

	/**
	 * Returns the id of the classroom user.
	 */
	public userId: string | undefined;

	/**
	 * True if the classroom user is being removed.
	 */
	public isRemovingClassroomUser: boolean = false;
}