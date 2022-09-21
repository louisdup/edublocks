import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { ref, Ref } from "vue";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the HTML platform.
 */
export class HTMLModel extends PlatformModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "html";
	}
		
	/**
	 * Returns config/information about the HTML platform.
	 */
	public config: PlatformConfigModel = {
		name: "HTML",
		key: "HTML",
		color: "orange",
		logo: "/images/platforms/html/logo.svg",
		image: "/images/platforms/html/thumbnail.svg"
	};

	/**
	 * Returns a blockly toolbox for the html platform.
	 */
	 public getToolbox(): Array<String> {
		return [];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Ref<Array<EditorButtonModel>> = ref([]);

	/**
	 * Returns a list of tabs that to display in the output panel for html.
	 */
	public outputPanelTabs: Ref<Array<EditorOutputTabModel>> = ref([]);

	/**
	 * Returns HTML code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		return "";
	}
}

// Export the platform model.
export const html: HTMLModel = new HTMLModel();