const loopsColor: string = "#644A9E";

Blockly.Blocks["while"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("while ");
	  this.appendValueInput("condition")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(":");
	  this.appendStatementInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(loopsColor);
	}
};

Blockly.Blocks["for_range"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("for ")
		  .appendField(new Blockly.FieldVariable("i"), "variable")
		  .appendField(" in range(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField("):");
	  this.appendStatementInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(loopsColor);
	}
};

Blockly.Blocks["for"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("for ")
		  .appendField(new Blockly.FieldVariable("i"), "variable")
		  .appendField(" in ");
	  this.appendValueInput("condition")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(":");
	  this.appendStatementInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(loopsColor);
	}
};
  
Blockly.Blocks["break"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("break");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setColour(loopsColor);
	}
};