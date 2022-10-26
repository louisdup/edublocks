const logicColor: string = "#49B04D";

Blockly.Blocks["if"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("if ");
	  this.appendValueInput("condition")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(":");
	  this.appendStatementInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(logicColor);
	}
};

Blockly.Blocks["elif"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("elif ");
	  this.appendValueInput("condition")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(":");
	  this.appendStatementInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(logicColor);
	}
};

Blockly.Blocks["else"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("else:");
	  this.appendStatementInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(logicColor);
	}
};
  
Blockly.Blocks["compare"] = {
	init: function(): void {
	  this.appendValueInput("value_1")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([["==","=="], ["!=","!="], ["is", "is"], ["is not","is not"], ["<","<"], ["<=","<="], [">",">"], [">=",">="]]), "operator");
	  this.appendValueInput("value_2")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(logicColor);
	}
};

Blockly.Blocks["and_or"] = {
	init: function(): void {
	  this.appendValueInput("value_1")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "operator");
	  this.appendValueInput("value_2")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(logicColor);
	}
};

Blockly.Blocks["not"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("not ");
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(logicColor);
	}
};
  