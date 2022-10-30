/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { EditorUtilities } from "@/utilities/editor-utilities";
import { getExtraBlockState } from "@/views/editor/components/blockly/modifiers/serialization-helper";

export default function getDefinitions(): void {
	Blockly.Blocks["events_start_here"] = { 
		init: function(): void {
			this.appendDummyInput()
				.appendField("# Start code here"); 
			this.setNextStatement(true, null);
			this.setColour("#FFBF00");
		}
	};

	Blockly.Blocks["inline_text"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldTextInput(""), "value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
		}
	};

	Blockly.Blocks["inline_string"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldString(""), "value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
		}
	};

	Blockly.Blocks["inline_number"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldNumber("0"), "value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
		}
	};

	Blockly.Blocks["placeholder"] = {
		init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
		}
	};

	Blockly.Blocks["parameters"] = {
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
				this.addShadowBlock(this.topInput_);
		  }
			else {
				const input: Blockly.Input = this.appendValueInput(`input_${this.itemCount_ + 1}`)
					.appendField(", ");
				this.addShadowBlock(input);
		  }
		  this.itemCount_++;
		},

		addShadowBlock: function(input: Blockly.Input): void {
			const sourceBlock: Blockly.BlockSvg = input.getSourceBlock();
			if (EditorUtilities.blocklyInstance && !sourceBlock.isInFlyout) {
				let shadowBlockName: string = "";
				switch (this.inputType_) {
					case "string":
						shadowBlockName = "inline_string";
						break;
					case "text":
						shadowBlockName = "inline_text";
						break;
					case "number":
						shadowBlockName = "inline_number";
						break;
				}
				const shadowBlock: Blockly.BlockSvg = EditorUtilities.blocklyInstance.newBlock(shadowBlockName) as unknown as Blockly.BlockSvg;
				shadowBlock.setShadow(true);
				shadowBlock.initSvg();
				shadowBlock.render();
				input.connection.connect(shadowBlock.outputConnection);
			}
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
}