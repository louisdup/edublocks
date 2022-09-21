import { QueryDocumentSnapshot } from "@firebase/firestore";

/**
 * Data model for a project in firestore.
 */
export interface FirestoreProjectModel {
	id: string;
	name: string;
	platform: string;
	path: string;
	size: number;
	created: string;
	updated: string;
	type: "blocks" | "text";
	snapshot: QueryDocumentSnapshot;
}