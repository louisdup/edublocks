const listsColor: string = "#29C598";

export default function getDefinitions(): void {
	Blockly.Blocks["li"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<li");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</li>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(listsColor);
			this.setTooltip("Create a list item");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["ul"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<ul");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</ul>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(listsColor);
			this.setTooltip("Create an unordered list");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["ol"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<ol");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</ol>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(listsColor);
			this.setTooltip("Create an ordered list");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["select"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<select");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</select>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(listsColor);
			this.setTooltip("Create a select box");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["option"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<option ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</option>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(listsColor);
			this.setTooltip("Select option");
			this.setHelpUrl("");
		}
	};
}

