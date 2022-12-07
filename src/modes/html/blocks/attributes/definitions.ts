/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { getExtraBlockState } from "@/views/editor/components/blockly/modifiers/serialization-helper";

const attributesColor: string = "#00CA4D";

export default function getDefinitions(): void {
	Blockly.Blocks["attributes_join"] = {
		color_: "",
		itemCount_: 0,
		minimum_: 1,
		limit_: 5,
		inputType_: undefined,
		init: function(): void {
			this.appendDummyInput("empty");
			this.setOutput(true, "value");
			this.setInputsInline(true);
	  },
	  
		mutationToDom: function(): Element {
			const container: Element = Blockly.utils.xml.createElement("mutation");
			container.setAttribute("color", this.color_);
			container.setAttribute("items", this.itemCount_);
			container.setAttribute("minimum", this.minimum_);
			container.setAttribute("limit", this.limit_);
			container.setAttribute("inputType", this.inputType_);
			return container;
		},
	 
		domToMutation: function(xmlElement: HTMLElement): void {
			const targetCount: number = parseInt(xmlElement.getAttribute("items") as string, 10);
			this.color_ = xmlElement.getAttribute("color");
			this.minimum_ = parseInt(xmlElement.getAttribute("minimum") as string, 10) || 1; 
			this.limit_ = parseInt(xmlElement.getAttribute("limit") as string, 10);
			this.inputType_ = xmlElement.getAttribute("inputType");
			this.setColour(this.color_);
			this.updateShape_(targetCount);
		},

		saveExtraState: function(): object {
			return {
				"itemCount": this.itemCount_
			};
		},

		loadExtraState: function(state: any): void {
			this.updateShape_(state["itemCount"]);
		},
	  
		updateShape_: function(targetCount: number): void {
			while (this.itemCount_ < targetCount) {
				this.addPart_();
			}
			while (this.itemCount_ > targetCount) {
				this.removePart_();
			}
			this.updateMinus_();
			this.updatePlus_();
		},
	 
		plus: function(): void {
			this.addPart_();
			this.updateMinus_();
			this.updatePlus_();
		},
	  
		minus: function(): void {
			if (this.itemCount_ === 0) {
				return;
			}
			this.removePart_();
			this.updateMinus_();
			this.updatePlus_();
		},

		createPlusField: function(args: any = undefined): Blockly.Field {
			const plus: Blockly.FieldImage = new Blockly.FieldImage("/images/icons/plus.svg", 20, 20, undefined, this.onPlusFieldClicked);
			plus.args_ = args;
			return plus;
		},

		onPlusFieldClicked: function(plusField: Blockly.FieldImage): void {
			const block: Blockly.BlockSvg = plusField.getSourceBlock();
	
			if (!block.isInFlyout) {
				Blockly.Events.setGroup(true);
				const oldExtraState: string | undefined = getExtraBlockState(block);
				block.plus(plusField.args_);
				const newExtraState: string | undefined = getExtraBlockState(block);
				if (oldExtraState !== newExtraState) {
					Blockly.Events.fire(new Blockly.Events.BlockChange(block, "mutation", undefined, oldExtraState, newExtraState));
				}
				Blockly.Events.setGroup(false);
			}
		},

		createMinusField: function(args: any = undefined): Blockly.Field {
			const minus: Blockly.FieldImage = new Blockly.FieldImage("/images/icons/minus.svg", 20, 20, undefined, this.onMinusFieldClicked);
			minus.args_ = args;
			return minus;
		},

		onMinusFieldClicked: function(minusField: Blockly.FieldImage): void {
			const block: Blockly.BlockSvg = minusField.getSourceBlock();
	
			if (!block.isInFlyout) {
				Blockly.Events.setGroup(true);
				const oldExtraState: string | undefined = getExtraBlockState(block);
				block.minus(minusField.args_);
				const newExtraState: string | undefined = getExtraBlockState(block);
				if (oldExtraState !== newExtraState) {
					Blockly.Events.fire(new Blockly.Events.BlockChange(block, "mutation", undefined, oldExtraState, newExtraState));
				}
				Blockly.Events.setGroup(false);
			}
		},

		addPart_: function(): void {
			if (this.itemCount_ === 0) {
				this.removeInput("empty");
				if (this.minimum_ !== this.limit_) {
					this.topInput_ = this.appendValueInput(`input_${this.itemCount_ + 1}`)
						.appendField(this.createPlusField(), "plus_icon");
				}
				else {
					this.topInput_ = this.appendValueInput(`input_${this.itemCount_ + 1}`);
				}
		  }
			else {
				this.appendValueInput(`input_${this.itemCount_ + 1}`);
		  }
		  this.itemCount_++;
		},

		removePart_: function(): void {
			this.itemCount_--;
			this.removeInput(`input_${this.itemCount_ + 1}`);
			if (this.itemCount_ === 0 && (this.minimum_ !== this.limit_)) {
				this.topInput_ = this.appendDummyInput("empty")
					.appendField(this.createPlusField(), "plus_icon");
			}
		},

		updatePlus_: function(): void {
			const plusField: Blockly.Field = this.getField("plus_icon");
			if (!plusField && this.itemCount_ > 0 && (this.minimum_ !== this.limit_)) {
		  		this.topInput_.insertFieldAt(0, this.createPlusField(), "plus_icon");
			}
			else if (plusField && this.itemCount_ === this.limit_) {
		  		this.topInput_.removeField("plus_icon");
			}
		},

		updateMinus_: function(): void {
			const minusField: Blockly.Field = this.getField("minus_icon");
			if (!minusField && this.itemCount_ > 0) {
				if (this.minimum_ !== this.limit_ && this.itemCount_ !== this.minimum_) {
					this.topInput_.insertFieldAt(1, this.createMinusField(), "minus_icon");
				}
			}
			else if (minusField && this.itemCount_ < 2) {
		  		this.topInput_.removeField("minus_icon");
			}
		}
	};

	Blockly.Blocks["id_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("id=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["class_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("class=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["style_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("style=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["height_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("height=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["width_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("width=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["value_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("value=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Set Value");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["src_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("src=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Set Src of a media element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["href_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("href=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Set href of a element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["for_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("for=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Link labels and inputs together");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["rel_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("rel=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Specify the relationship between this document and another");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["placeholder_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("placeholder=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Set Placeholder");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["type_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("type=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Set Type");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["onclick_attribute"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("onclick=");
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(attributesColor);
			this.setTooltip("Run function on click");
			this.setHelpUrl("");
		}
	};
}

