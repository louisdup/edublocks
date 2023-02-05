export default function getDefinitions(): void {
	Blockly.Blocks["variables_get"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("var"), "VAR");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#0000CD");
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
			this.setColour("#0000CD");
		}
	};

	Blockly.Blocks["textinline"] = {
		init: function(): void {
			this.appendDummyInput().appendField(new Blockly.FieldTextInput(""), "text");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
			this.setTooltip("Text input for inline input");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["stringinline"] = {
		init: function(): void {
			this.appendDummyInput().appendField(new Blockly.FieldString(""), "text");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
			this.setTooltip("String input for inline input");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["sliderinline"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldSlider("0", "0", "1", "1", "1", "Value"), "slider");
		  this.setInputsInline(true);
		  this.setOutput(true, null);
		  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		  this.setColour("#FFFFFF");
		  this.setTooltip("Slider input for inline input");
		  this.setHelpUrl("");
		}
	  };
}