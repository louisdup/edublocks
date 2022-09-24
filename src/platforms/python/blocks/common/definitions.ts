Blockly.Blocks["textinline"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput(""), "text");
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		this.setColour("#FFFFFF");
	}
};

Blockly.Blocks["stringinline"] = {
	init: function(): void {
		this.appendDummyInput()
			.appendField(new Blockly.FieldString(""), "text");
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