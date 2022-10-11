import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { Component, markRaw } from "vue";

/**
 * Component model for the sidebar component.
 */
class SidebarModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "sidebar";
	}

	/**
	 * Returns a list of tabs that could be displayed in the sidebar.
	 */
	public getSidebarTabsForCurrentMode(): Array<EditorSidebarTabModel> | undefined {
		if (EditorUtilities.currentProject.value) {
			return EditorUtilities.currentProject.value.mode.sidebarTabs;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the currently active sidebar tab.
	 */
	private getActiveSidebarTab(): EditorSidebarTabModel | undefined {
		if (EditorUtilities.currentProject.value) {
			return EditorUtilities.currentProject.value.mode.sidebarTabs.filter((tab: EditorSidebarTabModel) => {
				return tab.active;
			})[0];
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the key passed is the same key as the active sidebar tab.
	 */
	public isSidebarTabActive(tab: EditorSidebarTabModel): boolean | undefined {
		const activeTab: EditorSidebarTabModel | undefined = this.getActiveSidebarTab();

		if (activeTab) {
			if (activeTab.key === tab.key) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return undefined;
		}
	}

	/**
	 * Called when the user clicks on an sidebar tab.
	 * Sets the tab to active and calls it's action function.
	 * Resizes blockly when the sidebar expands if the current project is of type "blocks".
	 */
	public onSidebarTabClicked(clickedTab: EditorSidebarTabModel): void {
		if (EditorUtilities.currentProject.value) {
			EditorUtilities.currentProject.value.mode.sidebarTabs.forEach((tab: EditorSidebarTabModel) => {
				if (clickedTab.key === tab.key) {
					if (tab.active) {
						tab.active = false;
					}
					else {
						tab.active = true;
					}
				}
				else {
					tab.active = false;
				}
			});
		}

		if (clickedTab.action) {
			clickedTab.action();
		}

		setTimeout(() => {
			if (EditorUtilities.currentProject.value) {
				if (EditorUtilities.blocklyInstance && EditorUtilities.currentProject.value.type === "blocks") {
					Blockly.svgResize(EditorUtilities.blocklyInstance);
				}
			}
		}, 1);
	}

	/**
	 * Returns a component to display in the sidebar based on the active tab.
	 */
	public getSidebarActiveComponent(): Component | undefined {
		const activeTab: EditorSidebarTabModel | undefined = this.getActiveSidebarTab();

		if (activeTab) {
			return markRaw(activeTab.component);
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
}

// Export the component model
export const component: SidebarModel = new SidebarModel();