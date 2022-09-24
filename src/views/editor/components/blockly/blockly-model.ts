import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { cva } from "class-variance-authority";

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
	 * Returns list of classes for the container component.
	 */
	public variants: Function = cva(["h-full", "w-full", "border", "border-gray-300"], {
		variants: {
			isRounded: {
				true: "rounded-md"
			}
		}
	});

	/**
	 * Returns an XML toolbox for the current platform.
	 */
	private getToolboxXML(): string {
		let toolboxXML: string = "<xml>";

		if (EditorUtilities.currentProject) {
			toolboxXML += EditorUtilities.currentProject.platform.getToolbox().join("\n");
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
			grid: {
				spacing: 30,
				length: 3,
				colour: "#e5e7eb",
				snap: true
			},
			zoom: {
				controls: false,
				wheel: true,
				pinch: true,
				startScale: 1.0,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2,
		  	},
			toolbox: this.getToolboxXML()
		};
	}
}

// Export the component model.
export const component: BlocklyModel = new BlocklyModel();