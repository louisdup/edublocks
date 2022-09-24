Blockly.Blocks["webprintnew"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField("print(\"");
		this.appendValueInput("text")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("\")");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#F89621");
	},
};

Blockly.Blocks["webvarprint"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField("print(");
		this.appendValueInput("var")
			.setCheck(null);
		this.appendDummyInput()
			.appendField(")");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#F89621");
	},
};