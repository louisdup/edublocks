import { OtherUserModel } from "./other-user-model";

/**
 * Data model for a classroom user.
 */
export interface ClassroomUserModel {
	id: string;
	role: string;
	enrolled: boolean;
	created: string;
	user?: OtherUserModel;
}