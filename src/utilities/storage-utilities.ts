import { StorageFetchResponseModel } from "@/data/models/storage-fetch-response-model";
import { deleteObject, FirebaseStorage, getDownloadURL, getMetadata, getStorage, ref, StorageError, StorageReference, uploadString } from "firebase/storage";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for firebase storage.
 */
export class StorageUtilities {
	/**
	 * Returns firebase storage instance.
	 */
	public static getStorage(): FirebaseStorage {
		return getStorage();
	}

	/**
	 * Setup and create a storage fetch response.
	 */
	private static createStorageFetchResponse(): StorageFetchResponseModel {
		return {
			data: undefined,
			hasError: false,
			wasSuccessful: false,
			error: undefined
		};
	}

	/**
	 * Fetches a file from storage and returns it.
	 */
	public static async fetchFile(path: string): Promise<StorageFetchResponseModel> {
		const response: StorageFetchResponseModel = this.createStorageFetchResponse();
	
		try {
			const reference: StorageReference = ref(this.getStorage(), path);
			const downloadURL: string = await getDownloadURL(reference);
			const file: Response = await fetch(downloadURL);
			
			response.data = {
				content: await file.text(),
				metadata: await getMetadata(reference)
			};
			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as StorageError;
			response.hasError = true;
			console.log(error);
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
	
		return response;
	}

	/**
	 * Updates/saves a storage file.
	 */
	public static async updateFile(path: string, content: string): Promise<StorageFetchResponseModel> {
		const response: StorageFetchResponseModel = this.createStorageFetchResponse();
	
		try {
			const reference: StorageReference = ref(this.getStorage(), path);
			await uploadString(reference, content);
			
			response.data = {
				content,
				metadata: await getMetadata(reference)
			};
			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as StorageError;
			response.hasError = true;
			console.log(error);
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
	
		return response;
	}

	/**
	 * Deletes a storage file.
	 */
	public static async deleteFile(path: string): Promise<StorageFetchResponseModel> {
		const response: StorageFetchResponseModel = this.createStorageFetchResponse();
	
		try {
			const reference: StorageReference = ref(this.getStorage(), path);
			await deleteObject(reference);
			
			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as StorageError;
			response.hasError = true;
			console.log(error);
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
	
		return response;
	}
}