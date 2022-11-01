import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";

/**
 * Mode model for the micro:bit mode.
 */
export class MicrobitModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "microbit";
	}
		
	/**
	 * Returns config/information about the micro:bit mode.
	 */
	public config: ModeConfigModel = {
		name: "micro:bit",
		key: "microbit",
		color: "green",
		logo: "/images/modes/microbit/logo.svg",
		image: "/images/modes/microbit/thumbnail.svg",
		fileExtension: "py"
	};

	/**
	 * Initalize the microbit mode.
	 */
	public init(): void {
		//
	}

	/**
	 * Loads block definitions and generators for the micro:bit mode.
	 */
	public loadBlocks(): Promise<void> {
		return new Promise(async (resolve: VoidFunction) => {
			//
		});
	}

	/**
	 * Returns a blockly toolbox for the micro:bit mode.
	 */
	public getToolbox(): Array<String> {
		return [];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [];

	/**
	 * Returns a list of tabs to display in the sidebar for micro:bit.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [];

	/**
	 * Returns a list of tabs that to display in the output panel for micro:bit.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [];

	/**
	 * Returns python code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		return "";
	}
}

// Export the mode model.
export const microbit: MicrobitModel = new MicrobitModel();