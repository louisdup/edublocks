export default function getDefinitions(): void {
	Blockly.Blocks["variable_get"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable_name"), "variable_name");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#364FD7");
		}
	};

	Blockly.Blocks["variable_set"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
				.appendField(new Blockly.FieldDropdown([["=", "="], ["+=", "+="], ["-=", "-="]]), "operator");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#364FD7");
		}
	};

	Blockly.Blocks["inline_variable_set"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
				.appendField(new Blockly.FieldDropdown([["=", "="], ["+=", "+="], ["-=", "-="]]), "operator");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true);
			this.setColour("#364FD7");
		}
	};
}