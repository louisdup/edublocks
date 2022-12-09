const pinsColor: string = "#E51616";

export default function getDefinitions(): void {
	Blockly.Blocks["pin"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("pin")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(pinsColor);
		}
	};

	Blockly.Blocks["pin_is_touched"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("pin")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".is_touched()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(pinsColor);
		}
	};

	Blockly.Blocks["pin_read_analog"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("pin")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".read_analog()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(pinsColor);
		}
	};
	
	Blockly.Blocks["logo_is_touched"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin_logo.is_touched()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(pinsColor);
		}
	};

	Blockly.Blocks["pin_speaker"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin_speaker");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(pinsColor);
		}
	};

	Blockly.Blocks["pin_read_digital"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("pin")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".read_digital()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(pinsColor);
		}
	};

	Blockly.Blocks["pin_write_analog"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("pin") 
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".write_analog(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pinsColor);
		}
	};

	Blockly.Blocks["pin_write_digital"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("pin")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".write_digital(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pinsColor);
		}
	};
	
	Blockly.Blocks["pin_set_pull"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("pin")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".set_pull(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pinsColor);
		}
	};

	Blockly.Blocks["pin_on_off"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldSlider("0", "0", "1", "1", "1", "Value"), "value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
		}
	};
}