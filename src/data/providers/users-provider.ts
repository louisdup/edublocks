import { FirestoreFetchResponseModel } from "../models/firestore-fetch-response-model";
import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { UserModel } from "../models/user-model";

// ----------------------------------------------------
// Provides data access functions for users.
// ----------------------------------------------------

/**
 * Get a single user.
 */
export async function getUserAsync(id: string): Promise<FirestoreFetchResponseModel<UserModel>> {
	return FirestoreUtilities.fetchDocument(`users/${id}`);
}