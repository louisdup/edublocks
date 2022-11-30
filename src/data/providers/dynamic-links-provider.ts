import { FetchUtilities } from "@/utilities/fetch-utilities";
import { DynamicLinkModel } from "../models/dynamic-link-model";
import { FetchResponseModel } from "../models/fetch-response-model";

// ----------------------------------------------------
// Provides data access functions for creating dynamic links.
// ----------------------------------------------------

/**
 * Create a dynamic link.
 */
export async function createDynamicLinkAsync(body: object): Promise<FetchResponseModel<DynamicLinkModel>> {
	return FetchUtilities.fetchData("POST", `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${import.meta.env.VITE_API_KEY}`, body);
}