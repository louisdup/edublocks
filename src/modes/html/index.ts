import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";

/**
 * Mode model for the HTML mode.
 */
export class HTMLModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "html";
	}
		
	/**
	 * Returns config/information about the HTML mode.
	 */
	public config: ModeConfigModel = {
		name: "HTML",
		key: "HTML",
		color: "orange",
		logo: "/images/modes/html/logo.svg",
		image: "/images/modes/html/thumbnail.svg"
	};

	/**
	 * Initalize the HTML mode.
	 */
	public init(): void {
		//
	}

	/**
	 * Returns a blockly toolbox for the html mode.
	 */
	 public getToolbox(): Array<String> {
		return [];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [];

	/**
	 * Returns a list of tabs to display in the sidebar for HTML.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [];

	/**
	 * Returns a list of tabs that to display in the output panel for html.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [];

	/**
	 * Returns HTML code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		return "";
	}
}

// Export the mode model.
export const html: HTMLModel = new HTMLModel();