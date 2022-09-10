import { QueryDocumentSnapshot } from "@firebase/firestore";

/**
 * Data model for a project.
 */
export interface ProjectModel {
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