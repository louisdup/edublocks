const analogColor: string = "#FF8500";

export default function getDefinitions(): void {
	Blockly.Blocks["analog_in"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(" = AnalogIn(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(analogColor);
		}
	};

	Blockly.Blocks["analog_out"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(" = AnalogOut(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(analogColor);
		}
	};

	Blockly.Blocks["analog_pin_set_value"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(analogColor);
		}
	};	  

	Blockly.Blocks["analog_pin_get_value"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(analogColor);
		}
	};
}