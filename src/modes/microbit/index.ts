import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ref, Ref } from "vue";
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
		image: "/images/modes/microbit/thumbnail.svg"
	};

	/**
	 * Returns a blockly toolbox for the micro:bit mode.
	 */
	public getToolbox(): Array<String> {
		return [];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Ref<Array<EditorButtonModel>> = ref([]);

	/**
	 * Returns a list of tabs that to display in the output panel for micro:bit.
	 */
	public outputPanelTabs: Ref<Array<EditorOutputTabModel>> = ref([]);

	/**
	 * Returns python code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		return "";
	}
}

// Export the mode model.
export const microbit: MicrobitModel = new MicrobitModel();