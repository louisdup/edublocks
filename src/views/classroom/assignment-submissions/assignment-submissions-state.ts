import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";

/**
 * View state for the assignment submissions view.
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
	 * Returns the assignment.
	 */
	public assignment: ClassroomAssignmentModel | undefined;

	/**
	 * Returns a list of assignment submissions.
	 */
	public assignmentSubmissions: Array<ClassroomAssignmentSubmissionModel> = [];

	/**
	 * Returns the currently active tab.
	 */
	public activeTab: string = "all";
}