const pageColor: string = "#FFC100";

export default function getDefinitions(): void {
	Blockly.Blocks["html"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("<html>");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</html>");
			this.setColour(pageColor);
			this.setTooltip("Wrapper for HTML page");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["head"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("<head>");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</head>");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pageColor);
			this.setTooltip("Wrapper for the page head");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["title"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("<title>");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</title>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pageColor);
			this.setTooltip("Add title to HTML page");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["body"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("<body>");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</body>");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pageColor);
			this.setTooltip("Wrapper for the page body");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["text_content"] = {
		init: function (): void {
			this.appendValueInput("content")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pageColor);
			this.setTooltip("Add text content");
			this.setHelpUrl("");
		},
	};
}
