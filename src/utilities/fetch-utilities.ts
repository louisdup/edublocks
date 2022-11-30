import { FetchResponseModel } from "@/data/models/fetch-response-model";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for API fetch requests.
 */
export class FetchUtilities {
	/**
	 * Setup and create a fetch response.
	 */
	private static createFetchResponse<T>(): FetchResponseModel<T> {
		return {
			data: undefined,
			hasError: false,
			wasSuccessful: false,
			error: undefined
		};
	}

	/**
	 * Fetches data from an API endpoint.
	 */
	public static async fetchData<T>(method: "GET" | "POST" | "PATCH" | "DELETE", url: string, body?: object, headers?: HeadersInit): Promise<FetchResponseModel<T>> {
		const response: FetchResponseModel<T> = this.createFetchResponse();

		try {
			const request: Response = await fetch(url, {
				method,
				body: JSON.stringify(body),
				headers: {
					"content-type": "application/json",
					...headers
				}
			});

			response.data = await request.json() as T;
			response.wasSuccessful = true;
		}
		catch (error) {
			response.error = error as Error;
			response.hasError = true;
			console.error(error);
			ModalUtilities.showModal({
				modal: "Error"
			});
		}

		return response;
	}
}