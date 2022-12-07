const textColor: string = "#448EFF";

export default function getDefinitions(): void {
	Blockly.Blocks["heading_size_slider"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldSlider("1", "1", "6", "1", "1", "Heading Size"), "slider");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
			this.setTooltip("Heading Size Slider");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["paragraph"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<p ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</p>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(textColor);
			this.setTooltip("Paragraph");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["heading"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<h");
			this.appendValueInput("type")
				.setCheck(null);
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</h>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(textColor);
			this.setTooltip("Text heading");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["span"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<span ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</span>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(textColor);
			this.setTooltip("Span");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["link_element"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<a ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</a>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(textColor);
			this.setTooltip("Add a link to an element");
			this.setHelpUrl("");
		}
	};
}

