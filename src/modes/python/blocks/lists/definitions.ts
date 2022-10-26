const listsColor: string = "#15BAD4";

Blockly.Blocks["list"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("[");
	  this.appendValueInput("data")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField("]");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(listsColor);
	}
};

Blockly.Blocks["list_get_item_at_index"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
		  .appendField("[");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField("]");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(listsColor);
	}
};
  
Blockly.Blocks["list_reverse"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
		  .appendField(".reverse()");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(listsColor);
	}
};

Blockly.Blocks["list_find_index"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
		  .appendField(".index(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(listsColor);
	}
};

Blockly.Blocks["list_append"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
		  .appendField(".append(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(listsColor);
	}
};
  