import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import * as Fetch from "../fetch/fetch";
import { FetchRequest } from "../fetch/fetch-request";
import { FetchResponse } from "../fetch/types";
import { FirestoreProjectModel } from "../models/firestore-project-model";
import firebase from "firebase/compat/app";
import { QueryDocumentSnapshot } from "@firebase/firestore";

// ----------------------------------------------------
// Provides data access functions for projects.
// ----------------------------------------------------

/**
 * Get a paged list of projects.
 */
export async function getProjectsAsync(limit: number, searchTerm?: string, offset?: QueryDocumentSnapshot): Promise<FetchResponse<Array<FirestoreProjectModel>>> {
	return Fetch.fetchCollectionAsync(new FetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects`, undefined, "updated", limit, offset, searchTerm));
}

/**
 * Get a single project.
 */
export async function getProjectAsync(id: string): Promise<FetchResponse<FirestoreProjectModel>> {
	return Fetch.fetchDocumentAsync(new FetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`));
}

/**
 * Delete a single project.
 */
export async function deleteProjectAsync(id: string): Promise<FetchResponse<void>> {
	return Fetch.deleteDocumentAsync(new FetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`));
}

/**
 * Update a single project.
 */
export async function updateProjectAsync(id: string, body: firebase.firestore.UpdateData): Promise<FetchResponse<void>> {
	return Fetch.updateDocumentAsync(new FetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`, body));
}