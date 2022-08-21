import firebase from "firebase/compat/app";

/**
 * Utility functions for firestore.
 */
export class FirestoreUtilities {
	/**
	 * Returns firebase firestore instance.
	 */
	public static firestore(): firebase.firestore.Firestore {
		return firebase.firestore();
	}
}