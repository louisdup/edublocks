import { StorageUtilities } from "@/utilities/storage-utilities";
import { StorageFetchResponse } from "./storage-fetch-types";
import { StorageFetchRequest } from "./storage-fetch-request";
import { ModalUtilities } from "@/utilities/modal-utilities";
import firebase from "firebase/compat/app";

/**
 * Setup and create a storage fetch response.
 */
function createStorageFetchResponse(): StorageFetchResponse {
	return {
		data: undefined,
		hasError: false,
		wasSuccessful: false,
		error: undefined
	};
}

/**
 * Helper function for getting a storage file.
 */
export async function fetchStorageFileAsync(request: StorageFetchRequest): Promise<StorageFetchResponse> {
	const result: StorageFetchResponse = createStorageFetchResponse();

	try {
		const fileRef: firebase.storage.Reference = StorageUtilities.storage().ref(request.url);
		const downloadURL: string = await fileRef.getDownloadURL();
		const response: Response = await fetch(downloadURL);

		result.data = {
			content: await response.text(),
			metadata: await fileRef.getMetadata()
		};
		result.wasSuccessful = true;
	}
	catch (e) {
		const error: Error = e as Error;
		result.error = error;
		result.hasError = true;
		ModalUtilities.showModal({
			modal: "Error"
		});
	}

	return result;
}

/**
 * Helper function for updating/saving a storage file.
 */
export async function updateStorageFileAsync(request: StorageFetchRequest): Promise<StorageFetchResponse> {
	const result: StorageFetchResponse = createStorageFetchResponse();

	try {
		if (request.content) {
			const fileRef: firebase.storage.Reference = StorageUtilities.storage().ref(request.url);
			await fileRef.putString(request.content);

			result.data = {
				content: request.content,
				metadata: await fileRef.getMetadata()
			};			
			result.wasSuccessful = true;
		}
	}
	catch (e) {
		const error: Error = e as Error;
		result.error = error;
		result.hasError = true;
		ModalUtilities.showModal({
			modal: "Error"
		});
	}

	return result;
}