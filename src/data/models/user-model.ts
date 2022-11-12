/**
 * Data model for a user.
 */
export interface UserModel {
	id: string;
	name: string;
	email: string;
	uid: string;
	verified: boolean;
}