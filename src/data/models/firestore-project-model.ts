import { QueryDocumentSnapshot } from "@firebase/firestore";
import { FirestoreProjectAssignmentModel } from "./firestore-project-assignment-model";

/**
 * Data model for a project in firestore.
 */
export interface FirestoreProjectModel {
	id: string;
	name: string;
	mode: string;
	uid: string;
	path: string;
	size: number;
	created: string;
	updated: string;
	access: "private" | "public-read" | "public-write";
	type: "blocks" | "text";
	snapshot: QueryDocumentSnapshot;
	assignment?: FirestoreProjectAssignmentModel;
}