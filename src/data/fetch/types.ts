import firebase from "firebase/compat/app";

/**
 * Data model for a firestore fetch response.
 */
export interface FetchResponse<T> {
	data: T | undefined;
	error: firebase.firestore.FirestoreError | undefined;
	hasError: boolean;
	wasSuccessful: boolean;
}