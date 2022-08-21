import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { FetchResponse } from "./types";
import { FetchRequest } from "./fetch-request";
import firebase from "firebase/compat/app";

/**
 * Setup and create a firestore fetch response.
 */
function createFetchResponse<T>(): FetchResponse<T> {
	return {
		data: undefined,
		hasError: false,
		wasSuccessful: false,
		error: undefined
	};
}

/**
 * Helper function for getting data from a firestore collection.
 */
export async function fetchCollectionAsync<T>(request: FetchRequest): Promise<FetchResponse<T>> {
	const result: FetchResponse<T> = createFetchResponse();
	const data: Array<unknown> = [];

	try {
		let response: firebase.firestore.QuerySnapshot;

		// Decide whether to include startAt() based on whether an offset is passed.
		if (request.offset !== undefined) {
			response = await FirestoreUtilities
				.firestore()
				.collection(request.url)
				.orderBy("created", "desc")
				.limit(request.limit ? request.limit : 50)
				.startAt(request.offset)
				.get();
		}
		else {
			response = await FirestoreUtilities
				.firestore()
				.collection(request.url)
				.orderBy("created", "desc")
				.limit(request.limit ? request.limit : 50)
				.get();
		}
		
		// Create custom object for each document and push to data array.
		response.docs.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
			data.push({
				id: doc.id,
				...doc.data()
			});
		});

		result.data = data as unknown as T;
		result.wasSuccessful = true;
	}
	catch (e) {
		const error: firebase.firestore.FirestoreError = e as firebase.firestore.FirestoreError;
		result.error = error;
		result.hasError = true;
	}

	return result;
}