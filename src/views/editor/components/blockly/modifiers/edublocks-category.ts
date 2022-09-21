import Blockly, { ICollapsibleToolboxItem, IToolbox } from "blockly";
import { CategoryInfo } from "blockly/core/utils/toolbox";

class EduBlocksCategory extends Blockly.ToolboxCategory {
	constructor(categoryDef: CategoryInfo, toolbox: IToolbox, opt_parent: ICollapsibleToolboxItem) {
		super(categoryDef, toolbox, opt_parent);
	}

	/** @override */
	addColourBorder_(colour: string): void {
		const category: HTMLDivElement | null = this.rowDiv_; 
		if (category) {
			const icon: HTMLSpanElement | null = category.getElementsByClassName("customIcon")[0] as HTMLSpanElement;
			if (icon) {
				icon.style.backgroundColor = colour;
			}
		}
	}
} 

Blockly.registry.register(
	Blockly.registry.Type.TOOLBOX_ITEM,
	Blockly.ToolboxCategory.registrationName,
	EduBlocksCategory, true
);