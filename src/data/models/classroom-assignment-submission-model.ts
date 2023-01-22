import { OtherUserModel } from "./other-user-model";

/**
 * Data model for a classroom assignment submission.
 */
export interface ClassroomAssignmentSubmissionModel {
	id: string;
	uid: string;
	created: string;
	project: string;
	submitted?: string;
	marked?: string;
	feedback?: string;
	user?: OtherUserModel;
}