import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { ref, Ref } from "vue";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the CircuitPython platform.
 */
export class CircuitPythonModel extends PlatformModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "circuitpython";
	}
		
	/**
	 * Returns config/information about the CircuitPython platform.
	 */
	public config: PlatformConfigModel = {
		name: "CircuitPython",
		key: "CircuitPython",
		color: "purple",
		logo: "/images/platforms/circuitpython/logo.svg",
		image: "/images/platforms/circuitpython/thumbnail.svg"
	};

	/**
	 * Returns a blockly toolbox for the CircuitPython platform.
	 */
	public getToolbox(): Array<String> {
		return [];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Ref<Array<EditorButtonModel>> = ref([]);

	/**
	 * Returns a list of tabs that to display in the output panel for circuitpython.
	 */
	public outputPanelTabs: Ref<Array<EditorOutputTabModel>> = ref([]);

	/**
	 * Returns python code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		return "";
	}
}

// Export the platform model.
export const circuitpython: CircuitPythonModel = new CircuitPythonModel();