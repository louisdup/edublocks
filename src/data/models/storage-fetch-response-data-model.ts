import { FullMetadata } from "firebase/storage";

/**
 * Data model for data from a storage fetch response.
 */
export interface StorageFetchResponseDataModel {
	content: string;
	metadata: FullMetadata;
}