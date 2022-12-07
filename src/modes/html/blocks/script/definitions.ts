const scriptColor: string = "#FFAA00";

export default function getDefinitions(): void {
	Blockly.Blocks["external_script"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<script ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("></script>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(scriptColor);
			this.setTooltip("Add an external script");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["script"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<script>");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</script>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(scriptColor);
			this.setTooltip("Create a script tag");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["multiline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldMultilineInput(""), "content");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(scriptColor);
			this.setTooltip("Multiline input");
			this.setHelpUrl("");
		}
	};
}

