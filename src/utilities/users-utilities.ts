import { md5 } from "md5js";

/**
 * Utility functions for working with users.
 */
export class UsersUtilities {
	/**
	 * Returns a profile picture for a given email from gravatar.
	 */
	public static getProfilePictureForEmail(email: string): string {
		return `https://secure.gravatar.com/avatar/${md5(email, 32)}?d=mp`;
	}
}