import firebase from "firebase/compat/app";

/**
 * Utility functions for firebase storage.
 */
export class StorageUtilities {
	/**
	 * Returns firebase storage instance.
	 */
	public static storage(): firebase.storage.Storage {
		return firebase.storage();
	}
}