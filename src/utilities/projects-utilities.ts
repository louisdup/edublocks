import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { FormatUtilities } from "./format-utilities";
import { LocalizationUtilities } from "./localization-utilities";
import { ModalUtilities } from "./modal-utilities";
import { ModeUtilities } from "./mode-utilities";

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
	 * Redirect to a project page.
	 */
	public static openProject(project: FirestoreProjectModel): void {
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
						this.openProject(project);
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

	/**
	 * Remaps a list of projects for displaying in a table.
	 */
	public static remapProjectsForTable(projects: Array<FirestoreProjectModel>): Array<EbTableItem> {
		const tableItems: Array<EbTableItem> = [];
	
		projects.forEach((project: FirestoreProjectModel) => {
			const projectMode: ModeModelBase = ModeUtilities.getModeFromKey(project.mode);

			tableItems.push({
				title: project.name,
				thumbnail: projectMode.config.logo,
				dropdownOptions: this.getProjectDropdownOptions(project),
				meta: [
					{
						key: "mode",
						label: projectMode.config.name
					},
					{
						key: "type",
						label: this.getText(project.type)
					},
					{
						key: "edited",
						label: this.getText("edited", [FormatUtilities.formatDate(project.updated)])
					}
				],
				action: (): void => {
					this.openProject(project);
				}
			});
		});
	
		return tableItems;
	}
}