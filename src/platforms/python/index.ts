import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { ref, Ref } from "vue";
import BlocklyPython from "blockly/python";
import { PlatformModelBase } from "../base-classes/platform-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { view as editor } from "@/views/editor/editor-model";

// Output Panel Components
import PythonCode from "./components/python-code/python-code.vue";
import PythonOutput from "./components/python-output/python-output.vue";

// Import Blocks
import "./blocks/statements/definitions";
import "./blocks/statements/generators";
import Statements from "./blocks/statements/toolbox.xml?raw";

/** 
 * Platform model for the python platform.
 */
export class PythonModel extends PlatformModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "python";
	}
		
	/**
	 * Returns config/information about the Python platform.
	 */
	public config: PlatformConfigModel = {
		name: "Python 3",
		key: "Python",
		color: "blue",
		logo: "/images/platforms/python/logo.svg",
		image: "/images/platforms/python/thumbnail.svg"
	};

	/**
	 * Returns a blockly toolbox for the Python platform.
	 */
	public getToolbox(): Array<String> {
		return [
			Statements
		];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Ref<Array<EditorButtonModel>> = ref([
		{
			key: "share",
			icon: ["far", "share"],
			color: "semiTransparent",
			action: (): void => {
				//
			}
		},
		{
			key: "save",
			icon: ["far", "save"],
			color: "semiTransparent",
			action: (): void => {
				//
			}
		},
		{
			key: "run",
			icon: ["fas", "play"],
			color: "green",
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
			active: true,
			visible: true,
			action: (): void => {
				//
			}
		},
		{
			key: "output",
			component: PythonOutput,
			active: false,
			visible: false,
			action: (): void => {
				//
			}
		}
	]);

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
	
	/**
	 * Returns python code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		if (EditorUtilities.currentProject) {
			return BlocklyPython.pythonGenerator.workspaceToCode(EditorUtilities.blocklyInstance);
		}
		else {
			return undefined;
		}
	}
}

// Export the platform model.
export const python: PythonModel = new PythonModel();