import { ProjectModel } from "@/data/models/project-model";
import { ref, Ref } from "vue";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { AuthenticationUtilities } from "./authentication-utilities";
import { StorageFetchResponse } from "@/data/storage-fetch/storage-fetch-types";
import { saveAs } from "file-saver";
import { FirestoreFetchResponse } from "@/data/firestore-fetch/firestore-fetch-types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import router from "@/router";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { View } from "@/views/constants";
import { LocalProjectModel } from "@/data/models/local-project-model";

/**
 * Utility functions for the editor.
 */
export class EditorUtilities {
	/**
	 * Returns the current project loaded in the editor.
	 */
	public static currentProject: Ref<ProjectModel | undefined> = ref(undefined);

	/**
	 * Returns the editor blockly instance.
	 */
	public static blocklyInstance: Blockly.WorkspaceSvg | undefined;

	/**
	 * True if the output panel is expanded.
	 */
	public static isOutputPanelExpanded: Ref<boolean> = ref(false);

	/**
	 * Sets the value of the current project.
	 */
	public static setCurrentProject(project: ProjectModel): void {
		this.currentProject.value = project;
	}

	/**
	 * Clears the value of the current project.
	 */
	public static clearCurrentProject(): void {
		this.currentProject.value = undefined;
	}

	/**
	 * True if current project is defined.
	 */
	public static isCurrentModeSet(): boolean {
		 return this.currentProject.value ? true : false;
	}

	/**
	 * Opens the editor with a blank project.
	 */
	public static openEditor(mode: ModeModelBase, type?: "blocks" | "text", name?: string, blocks?: string, code?: string): void {
		router.push({
			name: View.NewProject,
			query: {
				mode: mode.config.key,
				type,
				name,
				blocks,
				code
			}
		});
	}

	/**
	 * Updates the name of the current project locally and on firestore if a firestore project exists.
	 */
	public static async renameCurrentProject(newName: string): Promise<void> {
		if (this.currentProject.value) {
			this.currentProject.value.name = newName;

			if (this.currentProject.value.firestore_project) {
				const body: object = {
					name: newName,
					updated: new Date().toISOString()
				};
				await ProjectsProvider.updateProjectAsync(this.currentProject.value.firestore_project.id, body);
			}
		}
	}

	/**
	 * Saves the current project either locally or to firebase storage.
	 */
	public static async saveCurrentProject(): Promise<void> {
		if (this.currentProject.value) {
			let fileName: string = "";
			let fileContent: string = "";

			switch (this.currentProject.value.type) {
				case "blocks":
					fileName = `${this.currentProject.value.name}.xml`;
					fileContent = this.currentProject.value.blocks as string;
					break;
				case "text":
					fileName = `${this.currentProject.value.name}.${this.currentProject.value.mode.config.fileExtension}`;
					fileContent = this.currentProject.value.code as string;
					break;
			}
			
			// If there's a logged in user, work with firestore.
			if (AuthenticationUtilities.currentUser.value) {
				// If project is already saved in firestore, update the code & project.
				if (this.currentProject.value.firestore_project) {
					await ProjectsProvider.updateProjectCodeAsync(this.currentProject.value.firestore_project.path, fileContent).then(async (response: StorageFetchResponse) => {
						if (response.wasSuccessful && response.data && this.currentProject.value && this.currentProject.value.firestore_project) {
							const body: object = {
								updated: new Date().toISOString()
							};
							await ProjectsProvider.updateProjectAsync(this.currentProject.value.firestore_project.id, body);
						}
					});
				}

				// If project doesn't already exist in firestore, create a new firestore project.
				else {
					const path: string = `blocks/${AuthenticationUtilities.currentUser.value.uid}/${fileName}`;

					await ProjectsProvider.updateProjectCodeAsync(path, fileContent).then(async (response: StorageFetchResponse) => {
						if (response.wasSuccessful && response.data && this.currentProject.value && AuthenticationUtilities.currentUser.value) {
							const body: object = {
								name: this.currentProject.value.name,
								mode: this.currentProject.value.mode.config.key,
								type: this.currentProject.value.type,
								access: "private",
								uid: AuthenticationUtilities.currentUser.value.uid,
								path,
								size: response.data.metadata.size,
								extensions: null,
								created: new Date().toISOString(),
								updated: new Date().toISOString()
							};

							// Create the project in firestore.
							await ProjectsProvider.createProjectAsync(body).then(async (response: FirestoreFetchResponse<string>) => {
								if (response.wasSuccessful && response.data && AuthenticationUtilities.currentUser.value) {
									// Get the project from firestore.
									await ProjectsProvider.getProjectAsync(AuthenticationUtilities.currentUser.value.uid, response.data).then((response: FirestoreFetchResponse<FirestoreProjectModel>) => {
										if (response.wasSuccessful && response.data && AuthenticationUtilities.currentUser.value && this.currentProject.value) {
											// Set the current project's linked firestore project
											this.currentProject.value.firestore_project = response.data;
											
											// Change the URL to be the direct link of the project.
											router.push(`/project/${AuthenticationUtilities.currentUser.value.uid}/${response.data.id}`);

											// Enable the share button, as the project is stored in firestore and therefore shareable.
											this.currentProject.value.mode.setHeaderButtonVisible("share");
										}
									});
								}
							});
						}
					});
				}
			}
			// If current user is not logged in, save the file locally.
			else {
				this.saveCurrentProjectLocally();
			}
		}
	}

	/**
	 * Saves the current project locally.
	 */
	public static saveCurrentProjectLocally(): void {
		if (this.currentProject.value) {
			const project: LocalProjectModel = {
				mode: this.currentProject.value.mode.config.key,
				type: this.currentProject.value.type,
				blocks: this.currentProject.value.blocks,
				code: this.currentProject.value.code
			};

			const fileName: string = `${this.currentProject.value.name}.json`;

			saveAs(new Blob([JSON.stringify(project)]), fileName);
		}
	}

	/**
	 * Resizes the blockly editor.
	 */
	public static resizeBlockly(): void {
		setTimeout(() => {
			if (this.currentProject.value) {
				if (this.blocklyInstance && this.currentProject.value.type === "blocks") {
					Blockly.svgResize(this.blocklyInstance);
				}
			}
		}, 1);
	}
}