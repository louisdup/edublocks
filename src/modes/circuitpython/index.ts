import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { saveAs } from "file-saver";

// Output Panel Components
import PythonCode from "../common/components/output-panel/python-code/python-code.vue";

// Import Toolbox Categories
import basic from "./blocks/basic/toolbox.xml?raw";
import variables from "../common/blocks/python/variables/toolbox.xml?raw";
import digital from "./blocks/digital/toolbox.xml?raw";
import analog from "./blocks/analog/toolbox.xml?raw";
import neopixel from "./blocks/neopixel/toolbox.xml?raw";
import touch from "./blocks/touch/toolbox.xml?raw";
import servo from "./blocks/servo/toolbox.xml?raw";
import audio from "./blocks/audio/toolbox.xml?raw";
import pwm from "./blocks/pwm/toolbox.xml?raw";
import dotstar from "./blocks/dotstar/toolbox.xml?raw";
import advanced from "./blocks/advanced/toolbox.xml?raw";

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
		key: "circuitpython",
		color: "purple",
		logo: "/images/modes/circuitpython/logo.svg",
		image: "/images/modes/circuitpython/thumbnail.svg",
		fileExtension: "py"
	};

	/**
	 * Returns the start block that appears at the top of all micro:bit code.
	 */
	public startBlock: string = "events_start_here";

	/**
	 * Initalize the CircuitPython mode.
	 */
	public init(): void {
		//
	}

	/**
	 * Loads block definitions and generators for the CircuitPython mode.
	 */
	public loadBlocks(): Promise<void> {
		return new Promise(async (resolve: VoidFunction) => {
			const commonDefinitions: any = import("../common/blocks/python/common/definitions");
			const commonGenerators: any = import("../common/blocks/python/common/generators");

			const basicDefinitions: any = import("../common/blocks/python/basic/definitions");
			const basicGenerators: any = import("../common/blocks/python/basic/generators");

			const circuitpythonBasicDefinitions: any = import("./blocks/basic/definitions");
			const circuitpythonBasicGenerators: any = import("./blocks/basic/generators");

			const variablesDefinitions: any = import("../common/blocks/python/variables/definitions");
			const variablesGenerators: any = import("../common/blocks/python/variables/generators");

			const digitalDefinitions: any = import("./blocks/digital/definitions");
			const digitalGenerators: any = import("./blocks/digital/generators");

			const analogDefinitions: any = import("./blocks/analog/definitions");
			const analogGenerators: any = import("./blocks/analog/generators");

			const neopixelDefinitions: any = import("./blocks/neopixel/definitions");
			const neopixelGenerators: any = import("./blocks/neopixel/generators");

			const touchDefinitions: any = import("./blocks/touch/definitions");
			const touchGenerators: any = import("./blocks/touch/generators");

			const servoDefinitions: any = import("./blocks/servo/definitions");
			const servoGenerators: any = import("./blocks/servo/generators");

			const audioDefinitions: any = import("./blocks/audio/definitions");
			const audioGenerators: any = import("./blocks/audio/generators");

			const pwmDefinitions: any = import("./blocks/pwm/definitions");
			const pwmGenerators: any = import("./blocks/pwm/generators");

			const dotstarDefinitions: any = import("./blocks/dotstar/definitions");
			const dotstarGenerators: any = import("./blocks/dotstar/generators");

			const advancedDefinitions: any = import("./blocks/advanced/definitions");
			const advancedGenerators: any = import("./blocks/advanced/generators");

			(await commonDefinitions).default();
			(await commonGenerators).default();

			(await basicDefinitions).default();
			(await basicGenerators).default();

			(await circuitpythonBasicDefinitions).default();
			(await circuitpythonBasicGenerators).default();

			(await variablesDefinitions).default();
			(await variablesGenerators).default();

			(await digitalDefinitions).default();
			(await digitalGenerators).default();

			(await analogDefinitions).default();
			(await analogGenerators).default();

			(await neopixelDefinitions).default();
			(await neopixelGenerators).default();

			(await touchDefinitions).default();
			(await touchGenerators).default();

			(await servoDefinitions).default();
			(await servoGenerators).default();

			(await audioDefinitions).default();
			(await audioGenerators).default();

			(await pwmDefinitions).default();
			(await pwmGenerators).default();

			(await dotstarDefinitions).default();
			(await dotstarGenerators).default();

			(await advancedDefinitions).default();
			(await advancedGenerators).default();

			resolve();
		});
	}

	/**
	 * Returns a blockly toolbox for the CircuitPython mode.
	 */
	public getToolbox(): Array<String> {
		return [
			basic,
			variables,
			digital,
			analog,
			neopixel,
			touch,
			servo,
			audio,
			pwm,
			dotstar,
			advanced
		];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [
		...this.commonHeaderButtons,
		{
			key: "download",
			icon: ["far", "arrow-down-to-line"],
			color: "blue",
			action: (): void => {
				this.downloadPyFile();
			}
		}
	];

	/**
	 * Returns a list of tabs to display in the sidebar for CircuitPython.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [
		...this.commonSidebarTabs
	];

	/**
	 * Returns a list of tabs that to display in the output panel for CircuitPython.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [
		...this.commonOutputPanelTabs,
		{
			key: "code",
			component: PythonCode,
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

	/**
	 * Downloads a .py file for transferring onto a CircuitPython device.
	 */
	private downloadPyFile(): void {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.code) {
			saveAs(new Blob([EditorUtilities.currentProject.value.code]), "code.py");
		}
	}
}

// Export the mode model.
export const circuitpython: CircuitPythonModel = new CircuitPythonModel();