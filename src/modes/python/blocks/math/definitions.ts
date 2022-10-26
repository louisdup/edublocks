const mathColor: string = "#1B173D";

Blockly.Blocks["arithmetic"] = {
	init: function(): void {
		this.appendValueInput("value_1")
			.setCheck(null);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["/","/"], ["%","%"], ["*","*"], ["**","**"], ["//","//"]]), "operator");
		this.appendValueInput("value_2")
			.setCheck(null);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(mathColor);
	}
};
  
Blockly.Blocks["round"] = {
	init: function(): void {
	  this.appendDummyInput()
		  .appendField("round(");
	  this.appendValueInput("parameters")
		  .setCheck(null);
	  this.appendDummyInput()
		  .appendField(")");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setColour(mathColor);
	}
};

