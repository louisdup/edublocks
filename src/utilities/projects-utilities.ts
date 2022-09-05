import { EbTableHeader } from "@/components/eb-table/eb-table-types";
import { LocalizationUtilities } from "./localization-utilities";

/**
 * Utility functions for projects.
 */
export class ProjectsUtilities {
	/**
	 * Lookup localized text and get a localized value.
	 */
	public static getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText("projects", key, placeholderValues);
	}

	/**
	 * Returns a list of headers for a table containing projects.
	 */
	public static getProjectsTableHeaders(): Array<EbTableHeader> {
		return [
			{
				label: this.getText("project")
			},
			{
				label: this.getText("type")
			},
			{
				label: this.getText("updated")
			},
			{
				label: this.getText("size")
			},
			{
				label: this.getText("actions"),
				hidden: true
			}
		];
	}
}