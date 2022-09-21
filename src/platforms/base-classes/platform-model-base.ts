import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { LocalizationUtilities } from "@/utilities/localization-utilities";
import { Ref } from "vue";

/**
 * Base class exposing common functionality to all platform models.
 */
export abstract class PlatformModelBase {
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
	 * Stores config/information about a platform.
	 */
	public abstract config: PlatformConfigModel;
		 
	/**
	 * Returns a blockly toolbox for the current platform.
	 */
	public abstract getToolbox(): Array<String>;

	/**
	 * Returns a list of buttons to display in the header of the editor.
	 */
	public abstract headerButtons: Ref<Array<EditorButtonModel>>;

	/**
	 * Returns a list of tabs that could be displayed in the output panel.
	 */
	public abstract outputPanelTabs: Ref<Array<EditorOutputTabModel>>;

	/**
	 * Sets the specified header button to visible.
	 */
	public setHeaderButtonVisible(buttonToBeVisible: string): void {
		this.headerButtons.value.forEach((button: EditorButtonModel) => {
			if (buttonToBeVisible === button.key) {
				button.visible = true;
			}
		});
	}

	/**
	 * Sets the specified header button to hidden.
	 */
	public setHeaderButtonHidden(buttonToBeVisible: string): void {
		this.headerButtons.value.forEach((button: EditorButtonModel) => {
			if (buttonToBeVisible === button.key) {
				button.visible = false;
			}
		});
	}

	/**
	 * Sets the specified output panel tab to visible.
	 */
	public setOutputPanelTabVisible(tabToBeVisible: string): void {
		this.outputPanelTabs.value.forEach((tab: EditorOutputTabModel) => {
			if (tabToBeVisible === tab.key) {
				tab.visible = true;
			}
		});
	}

	/**
	 * Sets the specified output panel tab to hidden.
	 */
	public setOutputPanelTabHidden(tabToBeVisible: string): void {
		this.outputPanelTabs.value.forEach((tab: EditorOutputTabModel) => {
			if (tabToBeVisible === tab.key) {
				tab.visible = false;
			}
		});
	}

	/**
	 * Sets the specified output panel tab to be active.
	 */
	public setOutputPanelTabActive(tabToBeActive: string): void {
		this.outputPanelTabs.value.forEach((tab: EditorOutputTabModel) => {
			if (tabToBeActive === tab.key) {
				tab.active = true;
			}
			else {
				tab.active = false;
			}
		});
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