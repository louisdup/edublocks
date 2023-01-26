import { FirestoreFetchResponseModel } from "../models/firestore-fetch-response-model";
import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { OtherUserModel } from "../models/other-user-model";
import { CloudFunctionsUtilities } from "@/utilities/cloud-functions-utilities";
import { CloudFunctionsResponseModel } from "../models/cloud-functions-fetch-response-model";

// ----------------------------------------------------
// Provides data access functions for users.
// ----------------------------------------------------

/**
 * Get a single user.
 */
export async function getUserAsync(id: string): Promise<CloudFunctionsResponseModel<OtherUserModel>> {
	return CloudFunctionsUtilities.callFunction("getUser", { userId: id });
}

/**
 * Create a new user record.
 */
export async function createUserAsync(userId: string, body: object): Promise<FirestoreFetchResponseModel<string>> {
	return FirestoreUtilities.createDocument(`users`, body, userId);
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