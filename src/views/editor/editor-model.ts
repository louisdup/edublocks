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
import { StorageFetchResponse } from "@/data/storage-fetch/storage-fetch-types";
import { FirestoreFetchResponse } from "@/data/firestore-fetch/firestore-fetch-types";
import { ModeUtilities } from "@/utilities/mode-utilities";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { FilenameUtilities } from "@/utilities/filename-utilities";
import { ProjectsUtilities } from "@/utilities/projects-utilities";

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
		await this.loadProject();
		this.updatePageTitleBasedOnCurrentProject();
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.init();
		}
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
	 * Checks if the user is trying to load a project from firestore and loads it into the editor .
	 */
	private async loadProject(): Promise<void> {
		this.state.isProjectLoading = true;

		// Check if there's already a firestore project set (i.e opened from the projects page).
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestore_project) {
			await this.fetchAndSetCurrentProjectCode();
		}

		// Check if the user is trying to access a firestore project. If so, load it.
		else if (router.currentRoute.value.name === View.Project) {
			await this.loadFirestoreProject();
		}

		// If user is trying to access the editor with no project set, see if they've specified a mode and create a new blank project.
		else if (router.currentRoute.value.name === View.NewProject) {
			await this.loadBlankProject();
		}

		this.state.isProjectLoading = false;
	}

	/**
	 * Fetches the current project code from firebase storage and sets the current project code value.
	 */
	private async fetchAndSetCurrentProjectCode(): Promise<void> {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestore_project) {
			await ProjectsProvider.getProjectCodeAsync(EditorUtilities.currentProject.value.firestore_project.path).then((response: StorageFetchResponse) => {
				if (EditorUtilities.currentProject.value && response.wasSuccessful && response.data) {
					switch (EditorUtilities.currentProject.value.type) {
						case "blocks":
							EditorUtilities.currentProject.value.blocks = response.data.content;
							break;
						case "text":
							EditorUtilities.currentProject.value.code = response.data.content;
							break;
					}
					this.state.isProjectLoading = false;
					this.loadCurrentProjectBlocks();
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
		await ProjectsProvider.getProjectAsync(userId, projectId).then(async (response: FirestoreFetchResponse<FirestoreProjectModel>) => {
			if (response.wasSuccessful && response.data) {
				EditorUtilities.clearCurrentProject();
				
				await EditorUtilities.setCurrentProject({
					name: response.data.name,
					mode: ModeUtilities.getModeFromKey(response.data.mode),
					type: response.data.type,
					readOnly: ProjectsUtilities.shouldProjectBeReadOnly(userId, response.data),
					firestore_project: response.data
				});

				if (EditorUtilities.currentProject.value) {
					// If the current project is read only, hide the save button.
					if (EditorUtilities.currentProject.value.readOnly) {
						EditorUtilities.currentProject.value.mode.setHeaderButtonHidden("save");
					}

					// Enable the share button, as the project is stored in firestore and therefore shareable.
					EditorUtilities.currentProject.value.mode.setHeaderButtonVisible("share");
				}
				
				await this.fetchAndSetCurrentProjectCode();
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
			const mode: ModeModelBase = ModeUtilities.getModeFromKey(router.currentRoute.value.query.mode as string);
			const typeQueryParam: string | undefined = router.currentRoute.value.query.type as string;
			let type: "blocks" | "text" = "blocks";
		
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

				await EditorUtilities.setCurrentProject({
					name: FilenameUtilities.generateRandomFilename(),
					mode,
					type
				});
			}
			// If mode is invalid, redirect the user to the homepage and ask them to create a project manually.
			else {
				router.push("/");
				ModalUtilities.showModal({
					modal: "CreateProject"
				});
			}
		}
		this.loadCurrentProjectBlocks();
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
	 * Returns the size of the sidebar.
	 */
	public getSidebarSize(): string {
		return this.isSidebarExpanded() ? "28rem" : "4.20rem";
	}

	/**
	 * Returns the minimum size of the sidebar.
	 */
	public getSidebarMinimumSize(): string {
		return "4.20rem";
	}

	/**
	 * Returns the maximum size of the sidebar.
	 */
	public getSidebarMaximumSize(): string {
		return this.isSidebarExpanded() ? "100%" : "4.20rem";
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
	 * Returns the initial size of the output panel.
	 */
	public getOutputPanelInitialSize(): string {
		return "32rem";
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