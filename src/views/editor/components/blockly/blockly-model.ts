import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";

// Blockly modifiers
import "./modifiers/edublocks-category";

/**
 * Component model for the python code component.
 */
export class BlocklyModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "blockly";
	}

	/**
	 * Initialise the component model.
	 */
	public init(): void {
		this.setBlocklyInstance();
	} 

	/**
	 * Injects blockly into the block div and sets the blockly instance in state.
	 */
	public setBlocklyInstance(): void {
		EditorUtilities.blocklyInstance = Blockly.inject("#blocklyDiv", this.getBlocklyOptions());
	}

	/**
	 * Returns an XML toolbox for the current mode.
	 */
	private getToolboxXML(): string {
		let toolboxXML: string = "<xml>";

		if (EditorUtilities.currentProject.value) {
			toolboxXML += EditorUtilities.currentProject.value.mode.getToolbox().join("\n");
		}

		toolboxXML += "</xml>";

		return toolboxXML;
	}

	/**
	 * Return options to configure the blockly workspace.
	 */
	private getBlocklyOptions(): Blockly.BlocklyOptions {
		return {
			renderer: "pxt",
			media: "blockly/media/",
			zoom: {
				controls: true,
				wheel: true,
				pinch: true,
				startScale: 1.0,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2,
		  	},
			trashcan: false,
			toolbox: this.getToolboxXML()
		};
	}
}

// Export the component model.
export const component: BlocklyModel = new BlocklyModel();