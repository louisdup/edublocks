import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { TextToBlocksUtilities } from "@/utilities/text-to-blocks-utilities";
import { reactive, Ref } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { EditorState } from "./editor-state";

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
	public init(): void {
		this.checkForBlocklyChanges();
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.init();
		}
	}

	/**
	 * Checks for any changes in the blockly workspace and updates the current project code.
	 */
	private checkForBlocklyChanges(): void {
		if (EditorUtilities.blocklyInstance ) {
			EditorUtilities.blocklyInstance.addChangeListener(() => {
				if (EditorUtilities.blocklyInstance && EditorUtilities.currentProject.value) {
					EditorUtilities.currentProject.value.blocks = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(EditorUtilities.blocklyInstance));
					if (!TextToBlocksUtilities.isTextEditorFocused.value && !EditorUtilities.blocklyInstance.isDragging()) {
						EditorUtilities.currentProject.value.code = EditorUtilities.currentProject.value.mode.getCodeFromBlocks() as string;
					}
				}
			});
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
}

// Export the view model.
export const view: EditorModel = new EditorModel();