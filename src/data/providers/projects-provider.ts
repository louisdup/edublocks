import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import * as Fetch from "../fetch/fetch";
import { FetchRequest } from "../fetch/fetch-request";
import { FetchResponse } from "../fetch/types";
import { ProjectModel } from "../models/project-model";

// ----------------------------------------------------
// Provides data access functions for projects.
// ----------------------------------------------------

/**
 * Get a paged list of projects.
 */
export async function getProjectsAsync(limit: number): Promise<FetchResponse<Array<ProjectModel>>> {
	return Fetch.fetchCollectionAsync(new FetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects`, undefined, limit));
}

/**
 * Get a single project.
 */
export async function getProjectAsync(id: string): Promise<FetchResponse<ProjectModel>> {
	return Fetch.fetchDocumentAsync(new FetchRequest(`users/${AuthenticationUtilities.currentUser.value?.uid}/projects/${id}`));
}