const digitalColor: string = "#448EFF";

export default function getDefinitions(): void {
	Blockly.Blocks["digital_in_out"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(" = DigitalInOut(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(digitalColor);
		}
	};

	Blockly.Blocks["digital_pin_direction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".direction = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(digitalColor);
		}
	};	  

	Blockly.Blocks["digital_direction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("Direction.")
				.appendField(new Blockly.FieldDropdown([["INPUT","INPUT"], ["OUTPUT","OUTPUT"]]), "direction");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(digitalColor);
		}
	};	
	
	Blockly.Blocks["digital_pull"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".pull = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(digitalColor);
		}
	};	  

	Blockly.Blocks["digital_pull_direction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("Pull.")
				.appendField(new Blockly.FieldDropdown([["UP","UP"], ["DOWN","DOWN"]]), "direction");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(digitalColor);
		}
	};	

	Blockly.Blocks["digital_pin_set_value"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(digitalColor);
		}
	};	  

	Blockly.Blocks["digital_pin_get_value"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(digitalColor);
		}
	};
}