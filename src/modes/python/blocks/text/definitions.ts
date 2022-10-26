const textColor: string = "#a855f7";

Blockly.Blocks["length"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("len(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};

Blockly.Blocks["case"] = {
	init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(".")
		  .appendField(new Blockly.FieldDropdown([["upper","upper"], ["lower","lower"], ["title","title"]]), "case")
		  .appendField("()");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};

Blockly.Blocks["reverse"] = {
	init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField("[::-1]");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};

Blockly.Blocks["replace"] = {
	init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(".replace(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};

Blockly.Blocks["count"] = {
	init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(".count(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};

Blockly.Blocks["strip"] = {
	init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(".")
		  .appendField(new Blockly.FieldDropdown([["strip","strip"], ["lstrip","lstrip"], ["rstrip","rsrtip"]]), "strip_type")
		  .appendField("()");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};

Blockly.Blocks["find"] = {
	init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(".")
		  .appendField(new Blockly.FieldDropdown([["find","find"], ["rfind","rfind"]]), "find_type")
		  .appendField("(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};
  
Blockly.Blocks["text_at_index"] = {
	init: function(): void {
	  this.appendValueInput("value")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField("[");
	  this.appendValueInput("index")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField("]");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(textColor);
	}
};
  