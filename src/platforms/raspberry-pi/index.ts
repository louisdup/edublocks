import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { ref, Ref } from "vue";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the Raspberry Pi platform.
 */
export class RaspberryPiModel extends PlatformModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "raspberry-pi";
	}
		
	/**
	 * Returns config/information about the Raspberry Pi platform.
	 */
	public config: PlatformConfigModel = {
		name: "Raspberry Pi",
		key: "RPi",
		color: "pink",
		logo: "/images/platforms/raspberry-pi/logo.svg",
		image: "/images/platforms/raspberry-pi/thumbnail.svg"
	};

	/**
	 * Returns a blockly toolbox for the raspberry pi platform.
	 */
	public getToolbox(): Array<String> {
		return [];
	}
	
	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Ref<Array<EditorButtonModel>> = ref([]);
	
	/**
	 * Returns a list of tabs that to display in the output panel for raspberry pi.
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
export const raspberryPi: RaspberryPiModel = new RaspberryPiModel();