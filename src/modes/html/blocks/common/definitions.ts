export default function getDefinitions(): void {
	Blockly.Blocks["inline_text"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldTextInput(""), "value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
		}
	};

	Blockly.Blocks["inline_string"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldString(""), "value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
		}
	};
}

