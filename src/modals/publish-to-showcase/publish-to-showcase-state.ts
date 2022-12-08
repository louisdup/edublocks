import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the publish to showcase modal.
 */
export class PublishToShowcaseState {
	/**
	 * Returns the project to publish.
	 */
	public project: FirestoreProjectModel | undefined;

	/**
	 * Stores data from the publish to showcase form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the publish to showcase form.
	 */
	public errors: FormErrors = {};

	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

	/**
	 * True if the project is being published.
	 */
	public isPublishingProject: boolean = false;
}