import { StorageFetchResponseDataModel } from "./storage-fetch-response-data-model";

/**
 * Data model for a storage fetch response.
 */
export interface StorageFetchResponseModel {
	data: StorageFetchResponseDataModel | undefined;
	error: Error | undefined;
	hasError: boolean;
	wasSuccessful: boolean;
}