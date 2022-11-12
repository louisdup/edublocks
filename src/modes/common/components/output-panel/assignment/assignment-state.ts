import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";

/**
 * Component state for the assignment output panel component.
 */
export class AssignmentState {
	/**
	 * True if the assignment is currently in the process of loading.
	 */
	public isLoadingAssignment: boolean = false;

	/**
	 * Returns the assignment.
	 */
	public assignment: ClassroomAssignmentModel | undefined;
}