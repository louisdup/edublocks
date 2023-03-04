import { User } from "firebase/auth";
import { UserDetailsModel } from "./user-details-model";

/**
 * Data model for the current user.
 */
export interface CurrentUserModel extends User {
	details: UserDetailsModel;
}