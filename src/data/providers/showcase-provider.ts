import * as FirestoreFetch from "../firestore-fetch/firestore-fetch";
import { FirestoreFetchRequest } from "../firestore-fetch/firestore-fetch-request";
import { FirestoreFetchResponse } from "../firestore-fetch/firestore-fetch-types";
import { ShowcaseProjectModel } from "../models/showcase-project-model";

// ----------------------------------------------------
// Provides data access functions for the showcase.
// ----------------------------------------------------

/**
 * Get a paged list of showcase projects.
 */
export async function getShowcaseProjectsAsync(limit: number): Promise<FirestoreFetchResponse<Array<ShowcaseProjectModel>>> {
	return FirestoreFetch.fetchCollectionAsync(new FirestoreFetchRequest("showcase", undefined, undefined, limit));
}

/**
 * Get a single project from the showcase.
 */
export async function getShowcaseProjectAsync(id: string): Promise<FirestoreFetchResponse<ShowcaseProjectModel>> {
	return FirestoreFetch.fetchDocumentAsync(new FirestoreFetchRequest(`showcase/${id}`));
}

/**
 * Delete a single project from the showcase.
 */
export async function deleteShowcaseProjectAsync(id: string): Promise<FirestoreFetchResponse<void>> {
	return FirestoreFetch.deleteDocumentAsync(new FirestoreFetchRequest(`showcase/${id}`));
}