import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { ref, Ref } from "vue";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the micro:bit platform.
 */
export class MicrobitModel extends PlatformModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "microbit";
	}
		
	/**
	 * Returns config/information about the micro:bit platform.
	 */
	public config: PlatformConfigModel = {
		name: "micro:bit",
		key: "microbit",
		color: "green",
		logo: "/images/platforms/microbit/logo.svg",
		image: "/images/platforms/microbit/thumbnail.svg"
	};

	/**
	 * Returns a blockly toolbox for the micro:bit platform.
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

// Export the platform model.
export const microbit: MicrobitModel = new MicrobitModel();