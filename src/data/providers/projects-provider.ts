import { CollectionReference, collection, limit, QueryConstraint, Query, query } from "@firebase/firestore";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { FirestoreProjectModel } from "../models/firestore-project-model";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import { FirestoreFetchResponseModel } from "../models/firestore-fetch-response-model";
import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { StorageUtilities } from "@/utilities/storage-utilities";
import { StorageFetchResponseModel } from "../models/storage-fetch-response-model";

// ----------------------------------------------------
// Provides data access functions for projects.
// ----------------------------------------------------

/**
 * Get a paged list of projects.
 */
export async function getProjectsAsync(projectsLimit: number, searchTerm?: string, offset?: QueryDocumentSnapshot): Promise<FirestoreFetchResponseModel<Array<FirestoreProjectModel>>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), `users/${AuthenticationUtilities.currentUser.value?.uid}/projects`);
	const constraints: Array<QueryConstraint> = [ limit(projectsLimit), ...FirestoreUtilities.search(searchTerm), ...FirestoreUtilities.offset(offset) ];
	const collectionQuery: Query = query(collectionReference, ...constraints);
	return FirestoreUtilities.fetchCollection(collectionQuery);
}

/**
 * Get a single project.
 */
export async function getProjectAsync(userId: string, projectId: string): Promise<FirestoreFetchResponseModel<FirestoreProjectModel>> {
	return FirestoreUtilities.fetchDocument(`users/${userId}/projects/${projectId}`);
}

/**
 * Get the code associated with a project.
 */
export async function getProjectCodeAsync(path: string): Promise<StorageFetchResponseModel> {
	return StorageUtilities.fetchFile(path);
}

/**
 * Update/save the code associated with a project.
 */
export async function updateProjectCodeAsync(path: string, content: string): Promise<StorageFetchResponseModel> {
	return StorageUtilities.updateFile(path, content);
}

/**
 * Delete a single project.
 */
export async function deleteProjectAsync(id: string): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.deleteDocument(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`);
}

/**
 * Create a project.
 */
export async function createProjectAsync(body: object): Promise<FirestoreFetchResponseModel<string>> {
	return FirestoreUtilities.createDocument(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects`, body);
}

/**
 * Update a single project.
 */
export async function updateProjectAsync(id: string, body: object): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.updateDocument(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`, body);
}