import { FunctionsError } from "firebase/functions";

/**
 * Data model for a cloud functions fetch response.
 */
export interface CloudFunctionsResponseModel<T> {
	data: T | undefined;
	error: FunctionsError | undefined;
	hasError: boolean;
	wasSuccessful: boolean;
}