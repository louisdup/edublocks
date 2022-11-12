import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomModel } from "@/data/models/classroom-model";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the create assignment modal.
 */
export class CreateAssignmentState {
	/**
	 * Returns the current classroom.
	 */
	public classroom: ClassroomModel | undefined;

	/**
	 * Returns a previously created assignment.
	 */
	public assignment: ClassroomAssignmentModel | undefined;

	/**
	 * Stores data from the create assignment form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the create assignment form.
	 */
	public errors: FormErrors = {};

	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

	/**
	 * True if existing projects are currently in the process of loading.
	 */
	public isLoadingExisitingProjects: boolean = false;

	/**
	 * Returns a list of existing projects.
	 */
	public existingProjects: Array<FirestoreProjectModel> = [];

	/**
	 * True if an assignment is being created.
	 */
	public isCreatingAssignment: boolean = false;

	/**
	 * True if an assignment is being saved.
	 */
	public isSavingAssignment: boolean = false;
}