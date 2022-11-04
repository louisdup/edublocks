import { FirestoreError } from "firebase/firestore";

/**
 * Data model for a firestore fetch response.
 */
export interface FirestoreFetchResponseModel<T> {
	data: T | undefined;
	error: FirestoreError | undefined;
	hasError: boolean;
	wasSuccessful: boolean;
}