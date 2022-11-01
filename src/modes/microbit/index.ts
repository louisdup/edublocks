import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";

// Output Panel Components
import PythonCode from "../common/components/output-panel/python-code/python-code.vue";
import Simulator from "./components/output-panel/simulator/simulator.vue";

// Import Toolbox Categories
import basic from "./blocks/basic/toolbox.xml?raw";
import variables from "../common/blocks/python/variables/toolbox.xml?raw";
import display from "./blocks/display/toolbox.xml?raw";
import buttons from "./blocks/buttons/toolbox.xml?raw";

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
	 * Returns the start block that appears at the top of all micro:bit code.
	 */
	public startBlock: string = "events_start_here";

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
			(await import("../common/blocks/python/common/definitions")).default();
			(await import("../common/blocks/python/common/generators")).default();

			(await import("../common/blocks/python/basic/definitions")).default();
			(await import("../common/blocks/python/basic/generators")).default();

			(await import("./blocks/basic/definitions")).default();
			(await import("./blocks/basic/generators")).default();

			(await import("../common/blocks/python/variables/definitions")).default();
			(await import("../common/blocks/python/variables/generators")).default();

			(await import("./blocks/display/definitions")).default();
			(await import("./blocks/display/generators")).default();

			(await import("./blocks/buttons/definitions")).default();
			(await import("./blocks/buttons/generators")).default();

			resolve();
		});
	}

	/**
	 * Returns a blockly toolbox for the micro:bit mode.
	 */
	public getToolbox(): Array<String> {
		return [
			basic,
			variables,
			display,
			buttons
		];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [
		...this.commonHeaderButtons
	];

	/**
	 * Returns a list of tabs to display in the sidebar for micro:bit.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [
		...this.commonSidebarTabs
	];

	/**
	 * Returns a list of tabs that to display in the output panel for micro:bit.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [
		{
			key: "code",
			component: PythonCode,
			active: true
		},
		{
			key: "simulator",
			component: Simulator,
			active: true
		}
	];

	/**
	 * Returns python code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		if (EditorUtilities.currentProject) {
			return Blockly.Python.workspaceToCode(EditorUtilities.blocklyInstance);
		}
		else {
			return undefined;
		}
	}
}

// Export the mode model.
export const microbit: MicrobitModel = new MicrobitModel();