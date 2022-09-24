Blockly.Blocks["webwhileout"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField("while");
		this.appendValueInput("cond")
			.setCheck("Boolean");
		this.appendDummyInput()
			.appendField(":");
		this.appendStatementInput("DO")
			.appendField("");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#644A9E");
	},
};

Blockly.Blocks["webfor"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField("for");
		this.appendValueInput("letter")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("in range(");
		this.appendValueInput("no")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("):");
		this.appendStatementInput("DO")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#644A9E");
	},
};

Blockly.Blocks["webadvancedforloops"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField("for");
		this.appendValueInput("x")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("in");
		this.appendValueInput("y")
			.setCheck(null);
		this.appendDummyInput()
			.appendField(":");
		this.appendStatementInput("DO")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#644A9E");
	},
};