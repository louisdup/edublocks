const buttonsColor: string = "#167EE5";

export default function getDefinitions(): void {
	Blockly.Blocks["button_is_pressed"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("button_")
				.appendField(new Blockly.FieldDropdown([["a", "a"], ["b", "b"]]), "value")
				.appendField(".is_pressed()");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setColour(buttonsColor);
		},
	};

	Blockly.Blocks["button_was_pressed"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("button_")
				.appendField(new Blockly.FieldDropdown([["a", "a"], ["b", "b"]]), "value")
				.appendField(".was_pressed()");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setColour(buttonsColor);
		},
	};

	Blockly.Blocks["button_get_presses"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("button_")
				.appendField(new Blockly.FieldDropdown([["a", "a"], ["b", "b"]]), "value")
				.appendField(".get_presses()");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setColour(buttonsColor);
		},
	};
}