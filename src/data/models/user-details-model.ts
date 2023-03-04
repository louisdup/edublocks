/**
 * Data model for user details.
 */
export interface UserDetailsModel {
	id: string;
	name: string;
	email: string;
	uid: string;
	verified: boolean;
	version: number;
}