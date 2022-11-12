import { ClassroomModel } from "@/data/models/classroom-model";

/**
 * View state for the classroom list view.
 */
export class ClassroomListState {
	/**
	 * True if classrooms are currently in the process of loading.
	 */
	public isLoadingInitialClassrooms: boolean = false;

	/**
	 * The list of classrooms to display.
	 */
	public classrooms: Array<ClassroomModel> = [];
}