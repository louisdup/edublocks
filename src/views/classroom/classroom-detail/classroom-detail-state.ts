import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomModel } from "@/data/models/classroom-model";
import { ClassroomUserModel } from "@/data/models/classroom-user-model";

/**
 * View state for the classroom detail view.
 */
export class ClassroomDetailState {
	/**
	 * True if the classroom is currently in the process of loading.
	 */
	public isLoadingClassroom: boolean = false;

	/** 
	 * True if the classroom's users are currently in the process of loading.
	 */
	public isLoadingClassroomUsers: boolean = false;

	/** 
	 * True if the classroom's assignments are currently in the process of loading.
	 */
	public isLoadingClassroomAssignments: boolean = false;

	/** 
	 * True if the view is busy doing something.
	 */
	public isBusy: boolean = false;

	/**
	 * Returns a classroom.
	 */
	public classroom: ClassroomModel | undefined;

	/**
	 * Returns a list of classroom users.
	 */
	public classroomUsers: Array<ClassroomUserModel> = [];

	/**
	 * Returns a list of classroom assignments.
	 */
	public classroomAssignments: Array<ClassroomAssignmentModel> = [];

	/**
	 * True if the current user has the admin role.
	 */
	public isCurrentUserAdmin: boolean | undefined;

	/**
	 * Returns the currently active tab.
	 */
	public activeTab: string = "";
}