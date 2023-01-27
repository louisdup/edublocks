const touchColor: string = "#FF4A76";

export default function getDefinitions(): void {
	Blockly.Blocks["touch_in"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("touch"), "touch")
				.appendField(" = touchio.TouchIn(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(touchColor);
		}
	};

	Blockly.Blocks["touch_get_value"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("touch"), "touch")
				.appendField(".value");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(touchColor);
		}
	};
}