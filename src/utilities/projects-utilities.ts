import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { EbTableHeader } from "@/components/eb-table/eb-table-types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { LocalizationUtilities } from "./localization-utilities";
import { ModalUtilities } from "./modal-utilities";

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

	/**
	 * Redirect to a project page.
	 */
	public static openProject(id: string): void {
		// TODO: fetch project and open in editor
	}

	/**
	 * Returns a list of options for project dropdowns.
	 */
	public static getProjectDropdownOptions(project: FirestoreProjectModel): Array<Array<EbDropdownOption>> {
		return [
			[
				{
					title: this.getText("open-project"),
					icon: ["far", "file"],
					action: (): void => {
						this.openProject(project.id);
					}
				}
			],
			[
				{
					title: this.getText("share-project"),
					icon: ["far", "share"],
					action: (): void => {
						//
					}
				}
			],
			[
				{
					title: this.getText("rename-project"),
					icon: ["far", "pencil"],
					action: (): void => {
						ModalUtilities.showModal({
							modal: "RenameProject",
							options: {
								project
							}
						});
					}
				},
				{
					title: this.getText("delete-project"),
					icon: ["far", "trash"],
					action: (): void => {
						ModalUtilities.showModal({
							modal: "DeleteProject",
							options: {
								project
							}
						});
					}
				}
			]
		];
	}
}