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

/**
 * Create a classroom record against a user.
 */
export async function createUserClassroomAsync(userId: string, classroomId: string, body: object): Promise<FirestoreFetchResponseModel<string>> {
	return FirestoreUtilities.createDocument(`users/${userId}/classrooms`, body, classroomId);
}

/**
 * Delete a classroom user.
 */
export async function deleteUserClassroomAsync(userId: string, classroomId: string): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.deleteDocument(`users/${userId}/classrooms/${classroomId}`);
}