import { FetchUtilities } from "@/utilities/fetch-utilities";
import { FetchResponseModel } from "../models/fetch-response-model";
import { LearnGuideModel } from "../models/learn-guide-model";
import { StoryblokResponseModel } from "../models/storyblok-response-model";

// ----------------------------------------------------
// Provides data access functions for working with the learn section.
// ----------------------------------------------------

/**
 * Fetch all learn guides.
 */
export async function getLearnGuidesAsync(): Promise<FetchResponseModel<StoryblokResponseModel<LearnGuideModel>>> {
	return FetchUtilities.fetchData("GET", `https://api.storyblok.com/v2/cdn/stories?starts_with=guides&token=${import.meta.env.VITE_STORYBLOK_TOKEN}`);
}