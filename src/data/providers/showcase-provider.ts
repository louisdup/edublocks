import { fetchCollectionAsync } from "../fetch/fetch";
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
	return fetchCollectionAsync(new FetchRequest("showcase", undefined, limit));
}