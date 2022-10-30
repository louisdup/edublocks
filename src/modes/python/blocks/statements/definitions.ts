const statementsColor: string = "#F89621";

export default function getDefinitions(): void {
	Blockly.Blocks["print"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("print(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(statementsColor);
		}
	};

	Blockly.Blocks["input"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("input(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(statementsColor);
		}
	};

	Blockly.Blocks["time_sleep"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("time.sleep(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(statementsColor);
		}
	};

	Blockly.Blocks["convert_to_string"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("str(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(statementsColor);
		}
	};

	Blockly.Blocks["convert_to_integer"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("int(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(statementsColor);
		}
	};

	Blockly.Blocks["convert_to_float"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("float(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(statementsColor);
		}
	};

	Blockly.Blocks["global"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("global ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(statementsColor);
		}
	};
}