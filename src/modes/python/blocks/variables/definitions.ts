Blockly.Blocks["variables_get"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable("var"), "VAR");
		this.setOutput(true, null);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setColour("#2E8BFB");
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks["variables_set"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(""), "VAR")
			.appendField(new Blockly.FieldDropdown([["=", "="], ["+=", "+="], ["-=", "-="]]), "NAME");
		this.appendValueInput("varset")
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#2E8BFB");
		this.setTooltip("assign a value, increment, or decrement a variable");
		this.setHelpUrl("");
	}
};