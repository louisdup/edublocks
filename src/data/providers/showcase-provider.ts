import * as Fetch from "../fetch/fetch";
import { FetchRequest } from "../fetch/fetch-request";
import { FetchResponse } from "../fetch/types";
import { ShowcaseProjectModel } from "../models/showcase-project-model";

// ----------------------------------------------------
// Provides data access functions for the showcase.
// ----------------------------------------------------

/**
 * Get a paged list of showcase projects.
 */
export async function getShowcaseProjectsAsync(limit: number): Promise<FetchResponse<Array<ShowcaseProjectModel>>> {
	return Fetch.fetchCollectionAsync(new FetchRequest("showcase", undefined, undefined, limit));
}

/**
 * Get a single project from the showcase.
 */
export async function getShowcaseProjectAsync(id: string): Promise<FetchResponse<ShowcaseProjectModel>> {
	return Fetch.fetchDocumentAsync(new FetchRequest(`showcase/${id}`));
}

/**
 * Delete a single project from the showcase.
 */
export async function deleteShowcaseProjectAsync(id: string): Promise<FetchResponse<void>> {
	return Fetch.deleteDocumentAsync(new FetchRequest(`showcase/${id}`));
}