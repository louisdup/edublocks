import Blockly from "blockly";

Blockly.Blocks["print"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("print(")
		  .appendField(new Blockly.FieldTextInput(""), "value")
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour("#F89621");
	}
};
