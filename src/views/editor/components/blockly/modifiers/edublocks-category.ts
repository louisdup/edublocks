
class EduBlocksCategory extends Blockly.ToolboxCategory {
	constructor(categoryDef: Blockly.utils.toolbox.CategoryInfo, toolbox: Blockly.IToolbox, opt_parent: Blockly.ICollapsibleToolboxItem) {
		super(categoryDef, toolbox, opt_parent);
	}

	/** @override */
	addColourBorder_(colour: string): void {
		const category: Element | null = this.rowDiv_; 
		if (category) {
			const icon: HTMLSpanElement | null = category.getElementsByClassName("customIcon")[0] as HTMLSpanElement;
			const iconParentNode: ParentNode = icon.parentNode as ParentNode;
			const wrapper: HTMLDivElement = document.createElement("div");

			if (icon) {
				wrapper.classList.add("customIconWrapper");
				wrapper.style.backgroundColor = colour;
				iconParentNode.replaceChild(wrapper, icon);
				wrapper.appendChild(icon);
			}
		}
	}
} 

Blockly.registry.register(
	Blockly.registry.Type.TOOLBOX_ITEM,
	Blockly.ToolboxCategory.registrationName,
	EduBlocksCategory, true
);