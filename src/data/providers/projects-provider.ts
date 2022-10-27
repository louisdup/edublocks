import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import * as FirestoreFetch from "../firestore-fetch/firestore-fetch";
import * as StorageFetch from "../storage-fetch/storage-fetch";
import { FirestoreFetchRequest } from "../firestore-fetch/firestore-fetch-request";
import { FirestoreFetchResponse } from "../firestore-fetch/firestore-fetch-types";
import { FirestoreProjectModel } from "../models/firestore-project-model";
import firebase from "firebase/compat/app";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import { StorageFetchRequest } from "../storage-fetch/storage-fetch-request";
import { StorageFetchResponse } from "../storage-fetch/storage-fetch-types";

// ----------------------------------------------------
// Provides data access functions for projects.
// ----------------------------------------------------

/**
 * Get a paged list of projects.
 */
export async function getProjectsAsync(limit: number, searchTerm?: string, offset?: QueryDocumentSnapshot): Promise<FirestoreFetchResponse<Array<FirestoreProjectModel>>> {
	return FirestoreFetch.fetchCollectionAsync(new FirestoreFetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects`, undefined, "updated", limit, offset, searchTerm));
}

/**
 * Get a single project.
 */
export async function getProjectAsync(userId: string, projectId: string): Promise<FirestoreFetchResponse<FirestoreProjectModel>> {
	return FirestoreFetch.fetchDocumentAsync(new FirestoreFetchRequest(`users/${userId}/projects/${projectId}`));
}

/**
 * Get the code associated with a project.
 */
export async function getProjectCodeAsync(path: string): Promise<StorageFetchResponse> {
	return StorageFetch.fetchStorageFileAsync(new StorageFetchRequest(path));
}

/**
 * Update/save the code associated with a project.
 */
export async function updateProjectCodeAsync(path: string, content: string): Promise<StorageFetchResponse> {
	return StorageFetch.updateStorageFileAsync(new StorageFetchRequest(path, content));
}

/**
 * Delete a single project.
 */
export async function deleteProjectAsync(id: string): Promise<FirestoreFetchResponse<void>> {
	return FirestoreFetch.deleteDocumentAsync(new FirestoreFetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`));
}

/**
 * Create a project.
 */
export async function createProjectAsync(body: firebase.firestore.UpdateData): Promise<FirestoreFetchResponse<string>> {
	return FirestoreFetch.createDocumentAsync(new FirestoreFetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects`, body));
}

/**
 * Update a single project.
 */
export async function updateProjectAsync(id: string, body: firebase.firestore.UpdateData): Promise<FirestoreFetchResponse<void>> {
	return FirestoreFetch.updateDocumentAsync(new FirestoreFetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`, body));
}