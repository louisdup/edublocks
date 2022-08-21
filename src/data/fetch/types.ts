import firebase from "firebase/compat/app";

export interface FetchResponse<T> {
	data: T | undefined;
	error: firebase.firestore.FirestoreError | undefined;
	hasError: boolean;
	wasSuccessful: boolean;
}