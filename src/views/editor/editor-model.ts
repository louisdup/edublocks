import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { Component, markRaw, reactive, Ref } from "vue";
import { ViewModelBase } from "../base-classes/view-model-base";
import { EditorState } from "./editor-state";
import Blockly from "blockly";

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
	}

	/**
	 * Checks for any changes in the blockly workspace and updates the current project code.
	 */
	public checkForBlocklyChanges(): void {
		if (EditorUtilities.blocklyInstance ) {
			EditorUtilities.blocklyInstance.addChangeListener(() => {
				if (EditorUtilities.blocklyInstance && EditorUtilities.currentProject) {
					EditorUtilities.currentProject.blocks = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(EditorUtilities.blocklyInstance));
					if (!EditorUtilities.blocklyInstance.isDragging() && EditorUtilities.currentProject.code) {
						EditorUtilities.currentProject.code.value = EditorUtilities.currentProject.platform.getCodeFromBlocks() as string;
					}
				}
			});
		}
	}

	/**
	 * Returns a list of buttons to put in the header of the editor.
	 */
	public getHeaderButtonsForCurrentPlatform(): Array<EditorButtonModel> | undefined {
		if (EditorUtilities.currentProject) {
			EditorUtilities.currentProject.platform.headerButtons.value.forEach((tab: EditorButtonModel) => {
				tab.label = this.getText(tab.key);
			});
			return EditorUtilities.currentProject.platform.headerButtons.value;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns a list of tabs that could be displayed in the output panel.
	 */
	public getOutputTabsForCurrentPlatform(): Array<EditorOutputTabModel> | undefined {
		if (EditorUtilities.currentProject) {
			EditorUtilities.currentProject.platform.outputPanelTabs.value.forEach((tab: EditorOutputTabModel) => {
				tab.label = this.getText(tab.key);
			});
			return EditorUtilities.currentProject.platform.outputPanelTabs.value;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the currently active output panel tab.
	 */
	public getActiveOutputPanelTab(): EditorOutputTabModel | undefined {
		if (EditorUtilities.currentProject) {
			return EditorUtilities.currentProject.platform.outputPanelTabs.value.filter((tab: EditorOutputTabModel) => {
				return tab.active;
			})[0];
		}
		else {
			return undefined;
		}
	}

	/**
	 * Called when the user clicks on an output panel tab.
	 * Sets the tab to active and calls it's action function.
	 */
	public onOutputPanelTabClicked(clickedTab: EditorOutputTabModel): void {
		EditorUtilities.currentProject.platform.outputPanelTabs.value.forEach((tab: EditorOutputTabModel) => {
			if (clickedTab.key === tab.key) {
				tab.active = true;
			}
			else {
				tab.active = false;
			}
		});

		clickedTab.action();
	}

	/**
	 * Returns a component to display in the output panel based on the active tab.
	 */
	public getOutputPanelActiveComponent(): Component | undefined {
		const activeTab: EditorOutputTabModel | undefined = this.getActiveOutputPanelTab();

		if (activeTab) {
			return markRaw(activeTab.component);
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns a key for the active output panel tab.
	 */
	public getOutputPanelActiveTabKey(): string | undefined {
		const activeTab: EditorOutputTabModel | undefined = this.getActiveOutputPanelTab();

		if (activeTab) {
			return activeTab.key;
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
	 * Returns the initial size of the output panel.
	 */
	public getOutputPanelInitialSize(): string {
		return "32rem";
	}

	/**
	 * Fire a resize event to blockly.
	 */
	public resizeBlockly(): void {
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
}

// Export the view model.
export const view: EditorModel = new EditorModel();