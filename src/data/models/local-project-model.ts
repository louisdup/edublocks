/**
 * Data model for a local project.
 */
export interface LocalProjectModel {
	mode: string;
	type: "blocks" | "text";
	blocks?: string;
	code?: string;
}