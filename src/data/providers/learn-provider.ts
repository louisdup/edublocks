import { FetchUtilities } from "@/utilities/fetch-utilities";
import { FetchResponseModel } from "../models/fetch-response-model";
import { LearnGuidesModel } from "../models/learn-guides-model";

// ----------------------------------------------------
// Provides data access functions for working with the learn section.
// ----------------------------------------------------

/**
 * Fetch all learn guides.
 */
export async function getLearnGuidesAsync(): Promise<FetchResponseModel<LearnGuidesModel>> {
	return FetchUtilities.fetchData("GET", "https://guidesengine.edublocks.org/api/codelabs.json");
}