const formsColor: string = "#00C0EA";

export default function getDefinitions(): void {
	Blockly.Blocks["form"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<form");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</form>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(formsColor);
			this.setTooltip("Create a form");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["input_element"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<input ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(formsColor);
			this.setTooltip("Create an input element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["button"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<button ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</button>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(formsColor);
			this.setTooltip("Create a button element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["label_element"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<label ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</label>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(formsColor);
			this.setTooltip("Create a label element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["input_types"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("\"")
				.appendField(new Blockly.FieldDropdown([["text","text"], ["number","number"], ["date","date"], ["datetime-local","datetime-local"], ["email","email"], ["checkbox","checkbox"], ["color","color"], ["password","password"], ["radio","radio"], ["range","range"], ["search","search"], ["url","url"], ["tel","tel"]]), "options")
				.appendField("\"");
			this.setOutput(true, null);
			this.setColour(formsColor);
			this.setTooltip("List of input types");
			this.setHelpUrl("");
		}
	};
}

