import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ref, Ref } from "vue";
import { ModeModelBase } from "../base-classes/mode-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { TextToBlocksUtilities } from "@/utilities/text-to-blocks-utilities";
import { TextToBlocksDefinitionModel } from "@/data/models/text-to-blocks-definition-model";

// Sidebar Components
import ProjectSettings from "@/modes/common/components/sidebar/project-settings/project-settings.vue";

// Output Panel Components
import PythonCode from "./components/output-panel/python-code/python-code.vue";
import PythonOutput from "./components/output-panel/python-output/python-output.vue";

// Import Blocks
import "./blocks/common/definitions";
import "./blocks/common/generators";

import "./blocks/imports/definitions";
import "./blocks/imports/generators";
import imports from "./blocks/imports/toolbox.xml?raw";
import importsDefinitions from "./blocks/imports/text-to-blocks";

import "./blocks/variables/definitions";
import "./blocks/variables/generators";
import variables from "./blocks/variables/toolbox.xml?raw";

import "./blocks/statements/definitions";
import "./blocks/statements/generators";
import statements from "./blocks/statements/toolbox.xml?raw";
import statementsDefinitions from "./blocks/statements/text-to-blocks";

import "./blocks/loops/definitions";
import "./blocks/loops/generators";
import loops from "./blocks/loops/toolbox.xml?raw";
import loopsDefinitions from "./blocks/loops/text-to-blocks";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";

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
		key: "Python",
		color: "blue",
		logo: "/images/modes/python/logo.svg",
		image: "/images/modes/python/thumbnail.svg"
	};

	/**
	 * Initalize the Python mode.
	 */
	public init(): void {
		TextToBlocksUtilities.configureSkulpt();
	}

	/**
	 * Returns a blockly toolbox for the Python mode.
	 */
	public getToolbox(): Array<String> {
		return [
			imports,
			variables,
			statements,
			loops
		];
	}

	/**
	 * Returns a list of block definitions that can be used for translating text to blocks.
	 */
	public getTextToBlocksDefinitions(): Array<TextToBlocksDefinitionModel> {
		return [
			...importsDefinitions,
			...statementsDefinitions,
			...loopsDefinitions
		];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Ref<Array<EditorButtonModel>> = ref([
		{
			key: "share",
			icon: ["far", "share"],
			color: "gray",
			action: (): void => {
				//
			}
		},
		{
			key: "save",
			icon: ["far", "save"],
			color: "gray",
			action: (): void => {
				//
			}
		},
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
	]);

	/**
	 * Returns a list of tabs that to display in the output panel for python.
	 */
	public outputPanelTabs: Ref<Array<EditorOutputTabModel>> = ref([
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
	]);

	/**
	 * Returns a list of tabs to display in the sidebar for python.
	 */
	public sidebarTabs: Ref<Array<EditorSidebarTabModel>> = ref([
		{
			key: "project-settings",
			icon: ["far", "file"],
			component: ProjectSettings
		}
	]);

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