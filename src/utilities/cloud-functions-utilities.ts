import { CloudFunctionsResponseModel } from "@/data/models/cloud-functions-fetch-response-model";
import { Functions, FunctionsError, getFunctions, httpsCallable, HttpsCallable, HttpsCallableResult } from "firebase/functions";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for working with firebase cloud functions.
 */
export class CloudFunctionsUtilities {
	/**
	 * Returns firebase cloud functions instance.
	 */
	public static getFunctions(): Functions {
		return getFunctions();
	}

	/**
	 * Setup and create a cloud function fetch response.
	 */
	private static createCloudFunctionsFetchResponse<T>(): CloudFunctionsResponseModel<T> {
		return {
			data: undefined,
			hasError: false,
			wasSuccessful: false,
			error: undefined
		};
	}

	/**
	 * Calls a firebase cloud function and returns its response.
	 */
	public static async callFunction<T>(name: string, body?: object): Promise<CloudFunctionsResponseModel<T>> {
		const response: CloudFunctionsResponseModel<T> = this.createCloudFunctionsFetchResponse();

		try {
			const cloudFunction: HttpsCallable = httpsCallable(this.getFunctions(), name);
			const result: HttpsCallableResult = await cloudFunction(body);

			if (result.data) {
				response.data = result.data as T;
				response.wasSuccessful = true;
			}
		}
		catch (error) {
			response.error = error as FunctionsError;
			response.hasError = true;
			console.error(error, name);
			ModalUtilities.showModal({
				modal: "Error"
			});
		}

		return response;
	}
}