/**
 * Data model for a classroom.
 */
export interface ClassroomModel {
	id: string;
	name: string;
	created: string;
	uids: Array<string>;
}