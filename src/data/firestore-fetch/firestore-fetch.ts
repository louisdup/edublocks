import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { FirestoreFetchResponse } from "./firestore-fetch-types";
import { FirestoreFetchRequest } from "./firestore-fetch-request";
import firebase from "firebase/compat/app";
import { ModalUtilities } from "@/utilities/modal-utilities";

/**
 * Setup and create a firestore fetch response.
 */
function createFirestoreFetchResponse<T>(): FirestoreFetchResponse<T> {
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
export async function fetchCollectionAsync<T>(request: FirestoreFetchRequest): Promise<FirestoreFetchResponse<T>> {
	const result: FirestoreFetchResponse<T> = createFirestoreFetchResponse();
	const data: Array<unknown> = [];

	try {
		let response: firebase.firestore.QuerySnapshot;

		// Decide whether to include startAfter() based on whether an offset is passed.
		if (request.offset !== undefined && request.orderBy) {
			response = await FirestoreUtilities
				.firestore()
				.collection(request.url)
				.orderBy(request.orderBy ? request.orderBy : "created", "desc")
				.limit(request.limit ? request.limit : 50)
				.startAfter(request.offset)
				.get();
		}
		else if (request.offset !== undefined && request.searchTerm !== undefined && request.searchTerm.length > 2) {
			response = await FirestoreUtilities
				.firestore()
				.collection(request.url)
				.where("name", ">=", request.searchTerm)
				.where("name", "<=", `${request.searchTerm}\uf8ff"`)
				.limit(request.limit ? request.limit : 50)
				.startAfter(request.offset)
				.get();
		}
		else if (request.offset === undefined && request.searchTerm !== undefined && request.searchTerm.length > 2) {
			response = await FirestoreUtilities
				.firestore()
				.collection(request.url)
				.where("name", ">=", request.searchTerm)
				.where("name", "<=", `${request.searchTerm}\uf8ff"`)
				.limit(request.limit ? request.limit : 50)
				.get();
		}
		else {
			response = await FirestoreUtilities
				.firestore()
				.collection(request.url)
				.orderBy(request.orderBy ? request.orderBy : "created", "desc")
				.limit(request.limit ? request.limit : 50)
				.get();
		}
		
		// Create custom object for each document and push to data array.
		response.docs.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
			data.push({
				id: doc.id,
				snapshot: doc,
				...doc.data()
			});
		});

		result.data = data as unknown as T;
		result.wasSuccessful = true;
	}
	catch (e) {
		const error: firebase.firestore.FirestoreError = e as firebase.firestore.FirestoreError;
		console.log(error);
		result.error = error;
		result.hasError = true;
		ModalUtilities.showModal({
			modal: "Error"
		});
	}

	return result;
}

/**
 * Helper function for getting a document from a firestore collection.
 */
export async function fetchDocumentAsync<T>(request: FirestoreFetchRequest): Promise<FirestoreFetchResponse<T>> {
	const result: FirestoreFetchResponse<T> = createFirestoreFetchResponse();

	try {
		const response: firebase.firestore.DocumentSnapshot = await FirestoreUtilities
			.firestore()
			.doc(request.url)
			.get();

		const data: unknown = {
			id: response.id,
			...response.data()
		};

		result.data = data as T;
		result.wasSuccessful = true;
	}
	catch (e) {
		const error: firebase.firestore.FirestoreError = e as firebase.firestore.FirestoreError;
		result.error = error;
		result.hasError = true;
		ModalUtilities.showModal({
			modal: "Error"
		});
	}

	return result;
}

/**
 * Helper function for creating document in a firestore collection.
 */
export async function createDocumentAsync(request: FirestoreFetchRequest): Promise<FirestoreFetchResponse<string>> {
	const result: FirestoreFetchResponse<string> = createFirestoreFetchResponse();

	if (request.body) {
		try {
			const response: firebase.firestore.DocumentReference = await FirestoreUtilities
				.firestore()
				.collection(request.url)
				.add(request.body);
			
			result.data = response.id;
			result.wasSuccessful = true;
		}
		catch (e) {
			const error: firebase.firestore.FirestoreError = e as firebase.firestore.FirestoreError;
			result.error = error;
			result.hasError = true;
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
	}

	return result;
}

/**
 * Helper function for updating document in a firestore collection.
 */
export async function updateDocumentAsync<T>(request: FirestoreFetchRequest): Promise<FirestoreFetchResponse<T>> {
	const result: FirestoreFetchResponse<T> = createFirestoreFetchResponse();

	if (request.body) {
		try {
			await FirestoreUtilities
				.firestore()
				.doc(request.url)
				.update(request.body);

			result.wasSuccessful = true;
		}
		catch (e) {
			const error: firebase.firestore.FirestoreError = e as firebase.firestore.FirestoreError;
			result.error = error;
			result.hasError = true;
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
	}

	return result;
}

/**
 * Helper function for deleting a document from a firestore collection.
 */
export async function deleteDocumentAsync<T>(request: FirestoreFetchRequest): Promise<FirestoreFetchResponse<T>> {
	const result: FirestoreFetchResponse<T> = createFirestoreFetchResponse();

	try {
		await FirestoreUtilities
			.firestore()
			.doc(request.url)
			.delete();

		result.wasSuccessful = true;
	}
	catch (e) {
		const error: firebase.firestore.FirestoreError = e as firebase.firestore.FirestoreError;
		result.error = error;
		result.hasError = true;
		ModalUtilities.showModal({
			modal: "Error"
		});
	}

	return result;
}