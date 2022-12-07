const structureColor: string = "#FF8500";

export default function getDefinitions(): void {
	Blockly.Blocks["div_container"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<div");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</div>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(structureColor);
			this.setTooltip("Create a div");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["header"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<header");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</header>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(structureColor);
			this.setTooltip("Create a header");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["footer"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<footer");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</footer>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(structureColor);
			this.setTooltip("Create a footer");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["article"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<article");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</article>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(structureColor);
			this.setTooltip("Create an article");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["section"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<section");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</section>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(structureColor);
			this.setTooltip("Create a section");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["br"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<br>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(structureColor);
			this.setTooltip("Add a line break");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["hr"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<hr>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(structureColor);
			this.setTooltip("Add a separator");
			this.setHelpUrl("");
		}
	};
}

