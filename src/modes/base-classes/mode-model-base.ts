import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { TextToBlocksDefinitionModel } from "@/data/models/text-to-blocks-definition-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { LocalizationUtilities } from "@/utilities/localization-utilities";

// Sidebar tab components.
import ProjectSettings from "@/modes/common/components/sidebar/project-settings/project-settings.vue";
import { ModalUtilities } from "@/utilities/modal-utilities";

/**
 * Base class exposing common functionality to all mode models.
 */
export abstract class ModeModelBase {
	/**
	 * Return the string that is used for the localization namespace when getting localized text for the component.
	 * This is an abstract property that needs to be defined in the component model that extends this base class.
	 */
	protected abstract getLocalizationNamespace(): string;

	/**
	 * Uses the specified key (and value of the 'localizationNamespace' property) to lookup localized text for displaying in the component.
	 */
	public getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText(this.getLocalizationNamespace(), key, placeholderValues);
	}
		 
	/**
	 * Stores config/information about a mode.
	 */
	public abstract config: ModeConfigModel;

	/**
	 * Initalize the mode.
	 */
	public abstract init(): void;
		 
	/**
	 * Loads block definitions and generators for the current mode.
	 */
	public abstract loadBlocks(): Promise<void>;
		 
	/**
	 * Returns a blockly toolbox for the current mode.
	 */
	public abstract getToolbox(): Array<String>;

	/**
	 * Returns a start block that appears when the block editor is initalised.
	 */
	public startBlock: string | undefined;
		 
	/**
	 * Returns a list of block definitions that can be used for translating text to blocks.
	 */
	public getTextToBlocksDefinitions(): Array<TextToBlocksDefinitionModel> {
		return [];
	}

	/**
	 * Returns a list of buttons to display in the header of the editor.
	 */
	public abstract headerButtons: Array<EditorButtonModel>;

	/**
	 * Get common header buttons that are used by most modes.
	 */
	public commonHeaderButtons: Array<EditorButtonModel> = [
		{
			key: "share",
			icon: ["far", "share"],
			color: "gray",
			visible: false,
			action: (): void => {
				ModalUtilities.showModal({
					modal: "ShareProject"
				});
			}
		},
		{
			key: "save",
			icon: ["far", "save"],
			color: "gray",
			action: (): void => {
				EditorUtilities.saveCurrentProject();
			}
		}
	];

	/**
	 * Returns a list of tabs that could be displayed in the sidebar.
	 */
	public abstract sidebarTabs: Array<EditorSidebarTabModel>;

	/**
	 * Get common sidebar tabs that are used by most modes.
	 */
	public commonsidebarTabs: Array<EditorSidebarTabModel> = [
		{
			key: "project-settings",
			icon: ["far", "file"],
			component: ProjectSettings
		}
	];

	/**
	 * Returns a list of tabs that could be displayed in the output panel.
	 */
	public abstract outputPanelTabs: Array<EditorOutputTabModel>;

	/**
	 * Sets the specified header button to visible.
	 */
	public setHeaderButtonVisible(buttonToBeVisible: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.headerButtons.forEach((button: EditorButtonModel) => {
				if (buttonToBeVisible === button.key) {
					button.visible = true;
				}
			});
		}
	}

	/**
	 * Sets the specified header button to hidden.
	 */
	public setHeaderButtonHidden(buttonToBeHidden: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.headerButtons.forEach((button: EditorButtonModel) => {
				if (buttonToBeHidden === button.key) {
					button.visible = false;
				}
			});
		}
	}

	/**
	 * Sets the specified output panel tab to visible.
	 */
	public setOutputPanelTabVisible(tabToBeVisible: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.outputPanelTabs.forEach((tab: EditorOutputTabModel) => {
				if (tabToBeVisible === tab.key) {
					tab.visible = true;
				}
			});
		}
	}

	/**
	 * Sets the specified output panel tab to hidden.
	 */
	public setOutputPanelTabHidden(tabToBeVisible: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.outputPanelTabs.forEach((tab: EditorOutputTabModel) => {
				if (tabToBeVisible === tab.key) {
					tab.visible = false;
				}
			});
		}
	}

	/**
	 * Sets the specified output panel tab to be active.
	 */
	public setOutputPanelTabActive(tabToBeActive: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.outputPanelTabs.forEach((tab: EditorOutputTabModel) => {
				if (tabToBeActive === tab.key) {
					tab.active = true;
				}
				else {
					tab.active = false;
				}
			});
		}
	}

	/**
	 * Sets the specified sidebar tab to visible.
	 */
	public setSidebarTabVisible(tabToBeVisible: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.sidebarTabs.forEach((tab: EditorSidebarTabModel) => {
				if (tabToBeVisible === tab.key) {
					tab.visible = true;
				}
			});
		}
	}
	
	/**
	 * Sets the specified sidebar tab to hidden.
	 */
	public setSidebarTabHidden(tabToBeVisible: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.sidebarTabs.forEach((tab: EditorSidebarTabModel) => {
				if (tabToBeVisible === tab.key) {
					tab.visible = false;
				}
			});
		}
	}
	
	/**
	 * Sets the specified sidebar tab to be active.
	 */
	public setSidebarTabActive(tabToBeActive: string): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.sidebarTabs.forEach((tab: EditorSidebarTabModel) => {
				if (tabToBeActive === tab.key) {
					tab.active = true;
				}
				else {
					tab.active = false;
				}
			});
		}
	}

	/**
	 * Expands the output panel.
	 */
	public expandOutputPanel(): void {
		EditorUtilities.isOutputPanelExpanded.value = true;
	}

	/**
	 * Closes the output panel.
	 */
	public closeOutputPanel(): void {
		EditorUtilities.isOutputPanelExpanded.value = false;

	}

	/**
	 * Get text code from the blockly workspace.
	 */
	public abstract getCodeFromBlocks(): string | undefined;
}