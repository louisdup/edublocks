import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { getFirestore, Firestore, Query, getDocs, QuerySnapshot, QueryDocumentSnapshot, FirestoreError, getDoc, DocumentReference, DocumentSnapshot, doc, deleteDoc, QueryConstraint, where, query, startAfter, setDoc, addDoc, collection, updateDoc } from "firebase/firestore";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for firestore.
 */
export class FirestoreUtilities {
	/**
	 * Returns firebase firestore instance.
	 */
	public static getFirestore(): Firestore {
		return getFirestore();
	}

	/**
	 * Setup and create a firestore fetch response.
	 */
	private static createFirestoreFetchResponse<T>(): FirestoreFetchResponseModel<T> {
		return {
			data: undefined,
			hasError: false,
			wasSuccessful: false,
			error: undefined
		};
	}

	/**
	 * Adds a search term query constraint.
	 */
	public static search(searchTerm?: string): Array<QueryConstraint> {
		if (searchTerm && searchTerm.length > 2) {
			return [ where("name", ">=", searchTerm), where("name", "<=", `${searchTerm}\uf8ff"`) ];
		}	
		else {
			return [];
		}
	}

	/**
	 * Adds an offset query constraint.
	 */
	public static offset(offset?: QueryDocumentSnapshot): Array<QueryConstraint> {
		if (offset) {
			return [ startAfter(offset) ];
		}	
		else {
			return [];
		}
	}

	/**
	 * Fetches a collection from firestore and returns its documents.
	 */
	public static async fetchCollection<T>(query: Query): Promise<FirestoreFetchResponseModel<T>> {
		const response: FirestoreFetchResponseModel<T> = this.createFirestoreFetchResponse();

		try {
			const collection: QuerySnapshot = await getDocs(query);
			const data: Array<unknown> = [];
		
			collection.docs.forEach((doc: QueryDocumentSnapshot) => {
				data.push({
					id: doc.id,
					snapshot: doc,
					...doc.data()
				});
			});

			response.data = data as unknown as T;
			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as FirestoreError;
			response.hasError = true;
			ModalUtilities.showModal({
				modal: "Error"
			});
		}

		return response;
	}

	/**
	 * Fetches a document from firestore and returns it.
	 */
	public static async fetchDocument<T>(path: string): Promise<FirestoreFetchResponseModel<T>> {
		const response: FirestoreFetchResponseModel<T> = this.createFirestoreFetchResponse();

		try {
			const reference: DocumentReference = doc(this.getFirestore(), path);
			const document: DocumentSnapshot = await getDoc(reference);
		
			const data: unknown = {
				id: document.id,
				...document.data()
			};

			response.data = data as T;
			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as FirestoreError;
			response.hasError = true;
			ModalUtilities.showModal({
				modal: "Error"
			});
		}

		return response;
	}

	/**
	 * Creates a firestore document.
	 */
	public static async createDocument(path: string, body: object): Promise<FirestoreFetchResponseModel<string>> {
		const response: FirestoreFetchResponseModel<string> = this.createFirestoreFetchResponse();

		try {
			const document: DocumentReference = await addDoc(collection(this.getFirestore(), path), body);

			response.data = document.id;
			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as FirestoreError;
			response.hasError = true;
			ModalUtilities.showModal({
				modal: "Error"
			});
		}

		return response;
	}

	/**
	 * Updates a firestore document.
	 */
	public static async updateDocument(path: string, body: object): Promise<FirestoreFetchResponseModel<void>> {
		const response: FirestoreFetchResponseModel<void> = this.createFirestoreFetchResponse();

		try {
			const reference: DocumentReference = doc(this.getFirestore(), path);
			await updateDoc(reference, body);

			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as FirestoreError;
			response.hasError = true;
			ModalUtilities.showModal({
				modal: "Error"
			});
		}

		return response;
	}

	/**
	 * Deletes a firestore document.
	 */
	public static async deleteDocument(path: string): Promise<FirestoreFetchResponseModel<void>> {
		const response: FirestoreFetchResponseModel<void> = this.createFirestoreFetchResponse();

		try {
			const reference: DocumentReference = doc(this.getFirestore(), path);

			await deleteDoc(reference);

			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as FirestoreError;
			response.hasError = true;
			ModalUtilities.showModal({
				modal: "Error"
			});
		}

		return response;
	}
}