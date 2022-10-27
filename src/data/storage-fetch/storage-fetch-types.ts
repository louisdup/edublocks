import firebase from "firebase/compat/app";

/**
 * Data model for a storage fetch response.
 */
export interface StorageFetchResponse {
	data: StorageFetchResponseData | undefined;
	error: Error | undefined;
	hasError: boolean;
	wasSuccessful: boolean;
}

/**
 * Data model for data from a storage fetch response.
 */
export interface StorageFetchResponseData {
	content: string;
	metadata: firebase.storage.FullMetadata;
}