import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { LocalProjectModel } from "@/data/models/local-project-model";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import router from "@/router";
import { AuthenticationUtilities } from "./authentication-utilities";
import { EditorUtilities } from "./editor-utilities";
import { FormatUtilities } from "./format-utilities";
import { LocalizationUtilities } from "./localization-utilities";
import { ModalUtilities } from "./modal-utilities";
import { ModeUtilities } from "./mode-utilities";

/**
 * Utility functions for working with projects.
 */
export class ProjectsUtilities {
	/**
	 * Lookup localized text and get a localized value.
	 */
	public static getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText("projects", key, placeholderValues);
	}

	/**
	 * Gets the XML for a specified firestore project and opens it in the editor.
	 */
	public static openProject(project: FirestoreProjectModel): void {
		if (AuthenticationUtilities.currentUser.value) {
			EditorUtilities.setCurrentProject({
				name: project.name,
				mode: ModeUtilities.getModeFromKey(project.mode),
				type: project.type,
				firestore_project: project
			});
		
			router.push(`/project/${AuthenticationUtilities.currentUser.value.uid}/${project.id}`);
		}
	}

	/**
	 * Imports & opens a local project.
	 */
	public static openLocalProject(): void {
		// Create file input in order to open file chooser.
		const fileInput: HTMLInputElement = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = ".json";
		
		// Runs when the user chooses a file.
		fileInput.addEventListener("change", (event: Event) => {
			const target: HTMLInputElement = event.target as HTMLInputElement;
			const reader: FileReader = new FileReader();

			reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
				try {
					// Parse JSON file and then open the editor with its contents.
					if (event.target && target.files) {
						const fileName: string = target.files[0].name.split(".")[0];
						const project: LocalProjectModel = JSON.parse(event.target.result as string);
						const mode: ModeModelBase = ModeUtilities.getModeFromKey(project.mode);

						EditorUtilities.openEditor(mode, project.type, fileName, project.blocks, project.code);
					}
				}
				catch (error) {
					// If JSON file cannot be opened in the editor, show an error modal.
					ModalUtilities.showModal({
						modal: "Error"
					});
				}
			});

			// Trigger reading the uploaded file.
			if (target.files) {
				reader.readAsText(target.files[0]);
			}
		});

		// Click on the file input to open a file chooser.
		fileInput.click();
	}

	/**
	 * True if project access status is public read.
	 */
	public static shouldProjectBeReadOnly(userId: string, project: FirestoreProjectModel): boolean {
		if (userId === AuthenticationUtilities.currentUser.value?.uid) {
			return false;
		}
		else if (project.access === "public-read") {
			return true;
		}
		else {
			return false;
		}
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
						ModalUtilities.showModal({
							modal: "ShareProject",
							options: {
								project
							}
						});
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