const advancedColor: string = "#06b6d4";

export default function getDefinitions(): void {
	Blockly.Blocks["advanced_cpu_temperature"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microcontroller.cpu.temperature");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(advancedColor);
		}
	};

	Blockly.Blocks["storage_mount"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("storage.mount(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(advancedColor);
		}
	};

	Blockly.Blocks["storage_open"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("open(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(advancedColor);
		}
	};
}