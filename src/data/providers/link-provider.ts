import { EditorUtilities } from "@/utilities/editor-utilities";
import { FetchUtilities } from "@/utilities/fetch-utilities";
import { LinkUtilities } from "@/utilities/link-utilities";

// ----------------------------------------------------
// Provides data access functions for working with EduBlocks Link (https://github.com/edublocks/edublocks-link).
// ----------------------------------------------------

/**
 * Sends and runs code on a connected EduBlocks Link device.
 */
export async function runCodeAsync(): Promise<void> {
	if (LinkUtilities.socket && LinkUtilities.ipAddress.value && EditorUtilities.currentProject.value) {
		const url: string = `http://${LinkUtilities.ipAddress.value}:${LinkUtilities.port}/runcode`;
		
		const body: object = {
			code: EditorUtilities.currentProject.value.code
		};

		await FetchUtilities.fetchData("POST", url, body);
	}
}