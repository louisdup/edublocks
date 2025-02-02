import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { ScreenUtilities } from "@/utilities/screen-utilities";
import { Component, markRaw } from "vue";

/**
 * Component model for the output panel component.
 */
class OutputPanelModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "output-panel";
	}

	/**
	 * Returns a marging value for the output panel based on whether the user is on desktop or mobile.
	 */
	public getOutputPanelMargin(): string {
		return ScreenUtilities.isMobile() ? "-4" : "0"; 
	}

	/**
	 * Returns a list of tabs that could be displayed in the output panel.
	 */
	public getOutputTabsForCurrentMode(): Array<EditorOutputTabModel> | undefined {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.outputPanelTabs.forEach((tab: EditorOutputTabModel) => {
				tab.label = this.getText(tab.key);
			});
			return EditorUtilities.currentProject.value.mode.outputPanelTabs;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the currently active output panel tab.
	 */
	private getActiveOutputPanelTab(): EditorOutputTabModel | undefined {
		if (EditorUtilities.currentProject.value) {
			return EditorUtilities.currentProject.value.mode.outputPanelTabs.filter((tab: EditorOutputTabModel) => {
				return tab.active;
			})[0];
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
	 * Called when the user clicks on an output panel tab.
	 * Sets the tab to active and calls it's action function.
	 */
	public onOutputPanelTabClicked(clickedTab: EditorOutputTabModel): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.outputPanelTabs.forEach((tab: EditorOutputTabModel) => {
				if (clickedTab.key === tab.key) {
					tab.active = true;
				}
				else {
					tab.active = false;
				}
			});
		}

		if (clickedTab.action) {
			clickedTab.action();
		}
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
}

// Export the component model
export const component: OutputPanelModel = new OutputPanelModel();