Blockly.Blocks["variable_get"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("variable_name"), "variable_name");
		this.setOutput(true, null);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setColour("#364FD7");
		this.setTooltip("");
		this.setHelpUrl("");
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
		this.setTooltip("assign a value, increment, or decrement a variable");
		this.setHelpUrl("");
	}
};