/**
 * Data model for a fetch response.
 */
export interface FetchResponseModel<T> {
	data: T | undefined;
	error: Error | undefined;
	hasError: boolean;
	wasSuccessful: boolean;
}