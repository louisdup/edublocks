const functionsColor: string = "#CDDA36";

export default function getDefinitions(): void {
	Blockly.Blocks["define_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("def ")
				.appendField(new Blockly.FieldVariable("function_name"), "function_name")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("):");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(functionsColor);
		}
	};

	Blockly.Blocks["define_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("def ")
				.appendField(new Blockly.FieldVariable("function_name"), "function_name")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("):");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(functionsColor);
		}
	};

	Blockly.Blocks["define_class"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("class ")
				.appendField(new Blockly.FieldVariable("class_name"), "class_name")
				.appendField(":");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(functionsColor);
		}
	};

	Blockly.Blocks["return_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("return ")
				.appendField(new Blockly.FieldVariable("function_name"), "function_name");
			this.setPreviousStatement(true, null);
			this.setColour(functionsColor);
		}
	};

	Blockly.Blocks["call_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("function_name"), "function_name")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(functionsColor);
		}
	};
	
	Blockly.Blocks["class_self"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("self.")
				.appendField(new Blockly.FieldVariable("i"), "variable_name")
				.appendField(new Blockly.FieldDropdown([["=","="], ["+=","+="], ["-=","-="]]), "operator");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(functionsColor);
		}
	};	
}