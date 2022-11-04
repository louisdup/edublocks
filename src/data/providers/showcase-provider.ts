import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { collection, CollectionReference, limit, orderBy, query, Query, QueryConstraint } from "firebase/firestore";
import { FirestoreFetchResponseModel } from "../models/firestore-fetch-response-model";
import { ShowcaseProjectModel } from "../models/showcase-project-model";

// ----------------------------------------------------
// Provides data access functions for the showcase.
// ----------------------------------------------------

/**
 * Get a paged list of showcase projects.
 */
export async function getShowcaseProjectsAsync(projectsLimit: number): Promise<FirestoreFetchResponseModel<Array<ShowcaseProjectModel>>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), "showcase");
	const constraints: Array<QueryConstraint> = [ orderBy("created", "desc"), limit(projectsLimit) ];
	const collectionQuery: Query = query(collectionReference, ...constraints);
	return FirestoreUtilities.fetchCollection(collectionQuery);
}

/**
 * Get a single project from the showcase.
 */
export async function getShowcaseProjectAsync(id: string): Promise<FirestoreFetchResponseModel<ShowcaseProjectModel>> {
	return FirestoreUtilities.fetchDocument(`showcase/${id}`);
}

/**
 * Delete a single project from the showcase.
 */
export async function deleteShowcaseProjectAsync(id: string): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.deleteDocument(`showcase/${id}`);
}