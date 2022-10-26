import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";

/**
 * Mode model for the CircuitPython mode.
 */
export class CircuitPythonModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "circuitpython";
	}
		
	/**
	 * Returns config/information about the CircuitPython mode.
	 */
	public config: ModeConfigModel = {
		name: "CircuitPython",
		key: "CircuitPython",
		color: "purple",
		logo: "/images/modes/circuitpython/logo.svg",
		image: "/images/modes/circuitpython/thumbnail.svg",
		fileExtension: "py"
	};

	/**
	 * Initalize the CircuitPython mode.
	 */
	public init(): void {
		//
	}

	/**
	 * Returns a blockly toolbox for the CircuitPython mode.
	 */
	public getToolbox(): Array<String> {
		return [];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [];

	/**
	 * Returns a list of tabs to display in the sidebar for CircuitPython.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [];

	/**
	 * Returns a list of tabs that to display in the output panel for CircuitPython.
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
export const circuitpython: CircuitPythonModel = new CircuitPythonModel();