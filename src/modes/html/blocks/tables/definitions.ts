const tablesColor: string = "#FF4A76";

export default function getDefinitions(): void {
	Blockly.Blocks["table"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<table");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</table>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(tablesColor);
			this.setTooltip("Create a table");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["table_row"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<tr");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</tr>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(tablesColor);
			this.setTooltip("Create a table row");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["table_header"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<th");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</th>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(tablesColor);
			this.setTooltip("Create a table header");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["table_data"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<td");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</td>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(tablesColor);
			this.setTooltip("Create a table data cell");
			this.setHelpUrl("");
		}
	};
}

