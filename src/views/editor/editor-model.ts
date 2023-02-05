import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import router from "@/router";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { reactive, Ref, watchEffect } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { View } from "../constants";
import { EditorState } from "./editor-state";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { StorageFetchResponseModel } from "@/data/models/storage-fetch-response-model";
import { ModeUtilities } from "@/utilities/mode-utilities";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { FilenameUtilities } from "@/utilities/filename-utilities";
import { ProjectsUtilities } from "@/utilities/projects-utilities";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";
import { ExtensionsUtilities } from "@/utilities/extensions-utilities";

/**
 * View model for the editor view.
 */
class EditorModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "editor";
	}
		
	/**
	 * Reactive instance of the view state.
	 */
	public state: EditorState = reactive(new EditorState());

	/**
	 * Initialise the view model.
	 */
	public async init(): Promise<void> {
		// Load project into the editor.
		await this.loadProject();

		// Update the page title based on the current project name.
		this.updatePageTitleBasedOnCurrentProject();

		// Initalize the current mode.
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.init();
		}

		// If the current project is related to a classroom, configure the editor accordingly.
		ClassroomUtilities.initalizeEditorForClassroomProject();		
	}

	/**
	 * Called when the view is unmounted.
	 */
	public onUnmount(): void {
		EditorUtilities.clearCurrentProject();
	}

	/**
	 * True if current project is set.
	 */
	public isEditorVisible(): boolean {
		return EditorUtilities.currentProject.value ? true : false;
	}

	/**
	 * Loads block definitions and generators for the current mode and sends the current project XML to blockly.
	 */
	private async loadBlocks(): Promise<void> {
		if (EditorUtilities.currentProject.value) {
			await EditorUtilities.currentProject.value.mode.loadBlocks();
			this.loadCurrentProjectBlocks();
		}
	}

	/**
	 * Checks if the user is trying to load a project from firestore and loads it into the editor.
	 */
	private async loadProject(): Promise<void> {
		this.state.isProjectLoading = true;
		
		// Check if there's already a firestore project set (i.e opened from the projects page).
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject) {
			await this.fetchAndSetCurrentProjectCode();

			// Enable the share button, as the project is stored in firestore and therefore shareable.
			EditorUtilities.currentProject.value.mode.setHeaderButtonVisible("share");
		}

		// Check if the user is trying to access a firestore project. If so, load it.
		else if (router.currentRoute.value.name === View.Project) {
			await this.loadFirestoreProject();
		}

		// If user is trying to access the editor with no project set, see if they've specified a mode and create a new blank project.
		else if (router.currentRoute.value.name === View.NewProject) {
			await this.loadBlankProject();
		}

		// Load required extensions for the current project.
		await ExtensionsUtilities.loadExtensionsForCurrentProject();

		// Load blocks for the current mode and set blockly XML to that of the current project.
		await this.loadBlocks();

		this.state.isProjectLoading = false;
	}

	/**
	 * Fetches the current project code from firebase storage and sets the current project code value.
	 */
	private async fetchAndSetCurrentProjectCode(): Promise<void> {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject) {
			await ProjectsProvider.getProjectCodeAsync(EditorUtilities.currentProject.value.firestoreProject.path).then((response: StorageFetchResponseModel) => {
				if (EditorUtilities.currentProject.value && response.wasSuccessful && response.data) {
					switch (EditorUtilities.currentProject.value.type) {
						case "blocks":
							EditorUtilities.currentProject.value.blocks = response.data.content;
							break;
						case "text":
							EditorUtilities.currentProject.value.code = response.data.content;
							break;
					}
				}
			});
		}
	}

	/**
	 * Loads a project from firestore in the editor.
	 */
	private async loadFirestoreProject(): Promise<void> {
		const userId: string = router.currentRoute.value.params.userId as string;
		const projectId: string = router.currentRoute.value.params.projectId as string;
		await ProjectsProvider.getProjectAsync(userId, projectId).then(async (response: FirestoreFetchResponseModel<FirestoreProjectModel>) => {
			if (response.wasSuccessful && response.data) {
				EditorUtilities.clearCurrentProject();

				const isReadOnly: boolean = await ProjectsUtilities.shouldProjectBeReadOnly(userId, response.data);
				
				EditorUtilities.setCurrentProject({
					name: response.data.name,
					mode: ModeUtilities.getModeFromKey(response.data.mode),
					type: response.data.type,
					readOnly: isReadOnly,
					firestoreProject: response.data
				});
				
				await this.fetchAndSetCurrentProjectCode();

				if (EditorUtilities.currentProject.value) {
					// If the current project is read only, hide the save button.
					if (EditorUtilities.currentProject.value.readOnly) {
						EditorUtilities.currentProject.value.mode.setHeaderButtonHidden("save");
					}
					else {
						EditorUtilities.currentProject.value.mode.setHeaderButtonVisible("save");
					}

					// Enable the share button, as the project is stored in firestore and therefore shareable.
					EditorUtilities.currentProject.value.mode.setHeaderButtonVisible("share");
				}
			}
			else {
				// Set no access to true to trigger the empty state telling the user.
				this.state.noAccess = true;
			}
		});
	}

	/**
	 * Loads a blank project in the editor.
	 */
	private async loadBlankProject(): Promise<void> {
		if (!EditorUtilities.currentProject.value) {
			const modeQueryParam: string | undefined = router.currentRoute.value.query.mode as string;
			const mode: ModeModelBase = ModeUtilities.getModeFromKey(router.currentRoute.value.query.mode as string);
			
			const typeQueryParam: string | undefined = router.currentRoute.value.query.type as string;
			let type: "blocks" | "text" = "blocks";
			
			const nameQueryParam: string | undefined = router.currentRoute.value.query.name as string;
			let name: string = "";

			const blocksQueryParam: string | undefined = router.currentRoute.value.query.blocks as string;
			const codeQueryParam: string | undefined = router.currentRoute.value.query.code as string;

			const extensionsQueryParam: string | undefined = router.currentRoute.value.query.extensions as string;
		
			// If mode is valid, create a new project.
			if (mode) {
				switch (typeQueryParam) {
					case "blocks":
						type = "blocks";
						break;
					case "text":
						type = "text";
						break;
				}

				if (nameQueryParam) {
					name = nameQueryParam;

					// Clear name from query parameter list so that on refresh the same project isn't created again.
					router.replace({
						name: View.NewProject,
						query: {
							mode: modeQueryParam,
							type
						}
					});
				}
				else {
					name = FilenameUtilities.generateRandomFilename();
				}

				await EditorUtilities.setCurrentProject({
					name,
					mode,
					type,
					blocks: blocksQueryParam,
					code: codeQueryParam,
				});

				// Load any extensions
				if (extensionsQueryParam) {
					const extensions: Array<string> = extensionsQueryParam.split(",");
					for await (const extension of extensions) {
						await ExtensionsUtilities.loadExtensionFromUrl(extension);
					}
				}
			}
			// If mode is invalid, redirect the user to the homepage and ask them to create a project manually.
			else {
				router.push("/");
				ModalUtilities.showModal({
					modal: "CreateProject"
				});
			}
		}
	}

	/**
	 * Loads blocks into the blocks editor.
	 */
	private loadCurrentProjectBlocks(): void {
		if (EditorUtilities.blocklyInstance && EditorUtilities.currentProject.value) {
			const currentProjectBlocks: string = EditorUtilities.currentProject.value.blocks || "";
			
			// Check if current project mode supports start blocks.
			if (EditorUtilities.currentProject.value.mode.startBlock) {
				// Disable blocks that aren't connected to a start block.
				EditorUtilities.blocklyInstance.addChangeListener(Blockly.Events.disableOrphans);
				
				const startBlock: number = currentProjectBlocks.search(EditorUtilities.currentProject.value.mode.startBlock);
				const startBlockXml: string = `<block type="${EditorUtilities.currentProject.value.mode.startBlock}" id="${EditorUtilities.currentProject.value.mode.startBlock}" x="25" y="25" deletable="false" movable="false"></block>`;
				let xml: string = `<xml xmlns="https://developers.google.com/blockly/xml">${startBlockXml}</xml>`;
				
				// If current project code doesn't contain a start block, add one.
				if (startBlock < 0) {
					const firstBlockPosition: number = currentProjectBlocks.search("<block");
					if (firstBlockPosition > 0) {
						const positionFromEndOfString: number = -1 * "</xml>".length;
						xml = `${currentProjectBlocks.slice(0, firstBlockPosition)}${startBlockXml}<next>${currentProjectBlocks.slice(firstBlockPosition, positionFromEndOfString)}</next>${currentProjectBlocks.slice(positionFromEndOfString)}`;
					}
					Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), EditorUtilities.blocklyInstance);
				}

				// If current project code does contain a start block, load the XML code.
				else {
					Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(currentProjectBlocks), EditorUtilities.blocklyInstance);
				}
			}
			// If current project mode doesn't support start blocks, just load the XML code.
			else {
				if (currentProjectBlocks) {
					Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(currentProjectBlocks), EditorUtilities.blocklyInstance);
				}
			}
		}		
	}

	/**
	 * Watches for changes on the current project filename and updates the page title dynamically.
	 */
	private updatePageTitleBasedOnCurrentProject(): void {
		watchEffect(() => {
			if (EditorUtilities.currentProject.value) {
				document.title = `${EditorUtilities.currentProject.value.name} - EduBlocks`;
			}
		});
	}

	/**
	 * Called when the header project button is clicked, opens the project settings sidebar tab.
	 */
	public onProjectButtonClicked(): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.setSidebarTabActive("project-settings");
		}
	}

	/**
	 * Returns a list of buttons to put in the header of the editor.
	 */
	public getHeaderButtonsForCurrentMode(): Array<EditorButtonModel> | undefined {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.headerButtons.forEach((tab: EditorButtonModel) => {
				tab.label = this.getText(tab.key);
			});
			return EditorUtilities.currentProject.value.mode.headerButtons;
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the editor is not in embed mode.
	 */
	public isSidebarVisible(): boolean {
		return router.currentRoute.value.query.embed ? false : true;
	}

	/**
	 * True if the sidebar is expanded.
	 */
	public isSidebarExpanded(): boolean | undefined {
		if (EditorUtilities.currentProject.value) {
			const activeTabs: Array<EditorSidebarTabModel> = EditorUtilities.currentProject.value.mode.sidebarTabs.filter((tab: EditorSidebarTabModel) => {
				return tab.active;
			});

			return activeTabs.length === 1;
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the output panel is expanded.
	 */
	public isOutputPanelExpanded(): Ref<boolean> {
		return EditorUtilities.isOutputPanelExpanded;
	}

	/**
	 * Called when the output panel expand button is clicked.
	 * Either open/closes the output panel.
	 */
	public onOutputPanelExpanded(): void {
		EditorUtilities.isOutputPanelExpanded.value = !EditorUtilities.isOutputPanelExpanded.value;
	}

	/**
	 * Fire a resize event to blockly.
	 */
	private resizeBlockly(): void {
		setTimeout(() => {
			if (EditorUtilities.blocklyInstance) {
				Blockly.svgResize(EditorUtilities.blocklyInstance);
			}
		}, 1);
	}

	/**
	 * Called when the split view is ready.
	 */
	public onSplitViewReady(): void {
		this.resizeBlockly();
	}

	/**
	 * Called when the split view is being resized.
	 */
	public onSplitViewResize(): void {
		this.state.isSplitViewBeingResized = true;
	}

	/**
	 * Called when the split view is done being resized.
	 */
	public onSplitViewResized(): void {
		this.state.isSplitViewBeingResized = false;
		this.resizeBlockly();
	}

	/**
	 * True if project type is "blocks".
	 */
	public isBlocksEditorVisible(): boolean | undefined {
		if (EditorUtilities.currentProject.value) {
			return EditorUtilities.currentProject.value.type === "blocks";
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the editor is loading a project.
	 */
	public isLoadingProject(): boolean {
		return this.state.isProjectLoading;
	}

	/**
	 * True if no access is true.
	 */
	public isNoAccessEmptyStateVisible(): boolean {
		return this.state.noAccess;
	}
}

// Export the view model.
export const view: EditorModel = new EditorModel();