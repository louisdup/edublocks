import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { TextToBlocksUtilities } from "@/utilities/text-to-blocks-utilities";
import { TextToBlocksDefinitionModel } from "@/data/models/text-to-blocks-definition-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";

// Output Panel Components
import PythonCode from "../common/components/output-panel/python-code/python-code.vue";
import PythonOutput from "./components/output-panel/python-output/python-output.vue";

// Import Toolbox Categories
import imports from "./blocks/imports/toolbox.xml?raw";
import variables from "../common/blocks/python/variables/toolbox.xml?raw";
import statements from "./blocks/statements/toolbox.xml?raw";
import text from "./blocks/text/toolbox.xml?raw";
import math from "./blocks/math/toolbox.xml?raw";
import logic from "./blocks/logic/toolbox.xml?raw";
import lists from "./blocks/lists/toolbox.xml?raw";
import loops from "./blocks/loops/toolbox.xml?raw";
import definitions from "./blocks/definitions/toolbox.xml?raw";
import turtle from "./blocks/turtle/toolbox.xml?raw";
import graphs from "./blocks/graphs/toolbox.xml?raw";

/** 
 * Mode model for the python mode.
 */
export class PythonModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "python";
	}
		
	/**
	 * Returns config/information about the Python mode.
	 */
	public config: ModeConfigModel = {
		name: "Python 3",
		key: "python",
		color: "blue",
		logo: "/images/modes/python/logo.svg",
		image: "/images/modes/python/thumbnail.svg",
		fileExtension: "py"
	};

	/**
	 * Initalize the Python mode.
	 */
	public init(): void {
		TextToBlocksUtilities.configureSkulpt();
	}

	/**
	 * Returns the start block that appears at the top of all python code.
	 */
	public startBlock: string = "events_start_here";

	/**
	 * Loads block definitions and generators for the Python mode.
	 */
	public loadBlocks(): Promise<void> {
		return new Promise(async (resolve: VoidFunction) => {
			(await import("../common/blocks/python/common/definitions")).default();
			(await import("../common/blocks/python/common/generators")).default();
	
			(await import("./blocks/deprecated/definitions")).default();
			(await import("./blocks/deprecated/generators")).default();
	
			(await import("./blocks/imports/definitions")).default();
			(await import("./blocks/imports/generators")).default();
	
			(await import("../common/blocks/python/variables/definitions")).default();
			(await import("../common/blocks/python/variables/generators")).default();
	
			(await import("./blocks/statements/definitions")).default();
			(await import("./blocks/statements/generators")).default();
	
			(await import("./blocks/text/definitions")).default();
			(await import("./blocks/text/generators")).default();
	
			(await import("./blocks/math/definitions")).default();
			(await import("./blocks/math/generators")).default();
	
			(await import("./blocks/logic/definitions")).default();
			(await import("./blocks/logic/generators")).default();
	
			(await import("./blocks/lists/definitions")).default();
			(await import("./blocks/lists/generators")).default();
	
			(await import("./blocks/loops/definitions")).default();
			(await import("./blocks/loops/generators")).default();
	
			(await import("./blocks/definitions/definitions")).default();
			(await import("./blocks/definitions/generators")).default();
	
			(await import("./blocks/turtle/definitions")).default();
			(await import("./blocks/turtle/generators")).default();
	
			(await import("./blocks/graphs/definitions")).default();
			(await import("./blocks/graphs/generators")).default();

			resolve();
		});
	}

	/**
	 * Returns a blockly toolbox for the Python mode.
	 */
	public getToolbox(): Array<String> {
		return [
			imports,
			variables,
			statements,
			text,
			math,
			logic,
			lists,
			loops,
			definitions,
			turtle,
			graphs
		];
	}

	/**
	 * Returns a list of block definitions that can be used for translating text to blocks.
	 */
	public getTextToBlocksDefinitions(): Array<TextToBlocksDefinitionModel> {
		return [];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [
		...this.commonHeaderButtons,
		{
			key: "run",
			icon: ["fas", "play"],
			color: "blue",
			action: (): void => {
				this.runPythonCode();
			}
		},
		{
			key: "stop",
			icon: ["fas", "square"],
			color: "red",
			visible: false,
			action: (): void => {
				this.stopPythonCode();
			}
		},
	];

	/**
	 * Returns a list of tabs that to display in the output panel for python.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [
		{
			key: "code",
			component: PythonCode,
			active: true
		},
		{
			key: "output",
			component: PythonOutput,
			visible: false
		}
	];

	/**
	 * Returns a list of tabs to display in the sidebar for python.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [
		...this.commonSidebarTabs
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
	 * Called when the user clicks the run button and runs the python code.
	 */
	private runPythonCode(): void {
		// Expands the output panel on mobile.
		this.expandOutputPanel();

		// Hide the run button, as code is about to run.
		this.setHeaderButtonHidden("run");

		// Show the stop button, so the user can stop the code running.
		this.setHeaderButtonVisible("stop");

		// Make the output tab visible.
		this.setOutputPanelTabVisible("output");

		// Set the output tab to be active so the user can see the output of their code.
		this.setOutputPanelTabActive("output");
	}
		
	/**
	 * Called when the user clicks the stop button and stops any running python code.
	 */
	private stopPythonCode(): void {
		// Closes the output panel on mobile.
		this.closeOutputPanel();
		
		// Hide the stop button, as code is about to stop.
		this.setHeaderButtonHidden("stop");

		// Show the run button, so the user can run the code again if they wish.
		this.setHeaderButtonVisible("run");

		// Make the output tab visible.
		this.setOutputPanelTabHidden("output");

		// Set the output tab to be active so the user can see the output of their code.
		this.setOutputPanelTabActive("code");
	}
}

// Export the mode model.
export const python: PythonModel = new PythonModel();