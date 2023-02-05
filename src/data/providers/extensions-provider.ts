import { FetchUtilities } from "@/utilities/fetch-utilities";
import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { collection, CollectionReference, query, Query, QueryConstraint, where } from "firebase/firestore";
import { ApprovedExtensionModel } from "../models/approved-extension-model";
import { FetchResponseModel } from "../models/fetch-response-model";
import { FirestoreFetchResponseModel } from "../models/firestore-fetch-response-model";
import { GitHubFileModel } from "../models/github-file-model";

// ----------------------------------------------------
// Provides data access functions for extensions.
// ----------------------------------------------------

export async function getApprovedExtensionsAsync(mode: string): Promise<FirestoreFetchResponseModel<Array<ApprovedExtensionModel>>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), "extensions");
	const constraints: Array<QueryConstraint> = [ where("mode", "==", mode) ];
	const collectionQuery: Query = query(collectionReference, ...constraints);
	return FirestoreUtilities.fetchCollection(collectionQuery);
}

/**
 * Get a definitions file for an extension.
 */
export async function getDefinitionsAsync(githubAuthor: string, githubRepo: string): Promise<FetchResponseModel<GitHubFileModel>> {
	return FetchUtilities.fetchData("GET", `https://api.github.com/repos/${githubAuthor}/${githubRepo}/contents/definitions.ts`);
}

/**
 * Get a generators file for an extension.
 */
export async function getGeneratorsAsync(githubAuthor: string, githubRepo: string): Promise<FetchResponseModel<GitHubFileModel>> {
	return FetchUtilities.fetchData("GET", `https://api.github.com/repos/${githubAuthor}/${githubRepo}/contents/generators.ts`);
}

/**
 * Get a toolbox file for an extension.
 */
export async function getToolboxAsync(githubAuthor: string, githubRepo: string): Promise<FetchResponseModel<GitHubFileModel>> {
	return FetchUtilities.fetchData("GET", `https://api.github.com/repos/${githubAuthor}/${githubRepo}/contents/toolbox.xml`);
}

/**
 * Get a config file for an extension.
 */
export async function getConfigAsync(githubAuthor: string, githubRepo: string): Promise<FetchResponseModel<GitHubFileModel>> {
	return FetchUtilities.fetchData("GET", `https://api.github.com/repos/${githubAuthor}/${githubRepo}/contents/config.json`);
}

/**
 * Get the main code/library file for an extension.
 */
export async function getLibraryAsync(githubAuthor: string, githubRepo: string, filename: string): Promise<FetchResponseModel<GitHubFileModel>> {
	return FetchUtilities.fetchData("GET", `https://api.github.com/repos/${githubAuthor}/${githubRepo}/contents/${filename}`);
}