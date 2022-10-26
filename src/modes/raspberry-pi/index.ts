import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";

/**
 * Mode model for the Raspberry Pi mode.
 */
export class RaspberryPiModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "raspberry-pi";
	}
		
	/**
	 * Returns config/information about the Raspberry Pi mode.
	 */
	public config: ModeConfigModel = {
		name: "Raspberry Pi",
		key: "RPi",
		color: "pink",
		logo: "/images/modes/raspberry-pi/logo.svg",
		image: "/images/modes/raspberry-pi/thumbnail.svg",
		fileExtension: "py"
	};

	/**
	 * Initalize the Raspberry Pi mode.
	 */
	public init(): void {
		//
	}

	/**
	 * Returns a blockly toolbox for the Raspberry Pi mode.
	 */
	public getToolbox(): Array<String> {
		return [];
	}
	
	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [];

	/**
	 * Returns a list of tabs to display in the sidebar for Raspberry Pi.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [];
	
	/**
	 * Returns a list of tabs that to display in the output panel for Raspberry Pi.
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
export const raspberryPi: RaspberryPiModel = new RaspberryPiModel();