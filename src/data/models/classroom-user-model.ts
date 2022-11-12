import { QueryDocumentSnapshot } from "firebase/firestore";

/**
 * Data model for a classroom user.
 */
export interface ClassroomUserModel {
	id: string;
	role: string;
	enrolled: boolean;
	snapshot: QueryDocumentSnapshot;
}