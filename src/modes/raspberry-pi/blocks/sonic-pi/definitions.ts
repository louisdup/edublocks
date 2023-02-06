const sonicPiColor: string = "#15BAD4";

export default function getDefinitions(): void {
	Blockly.Blocks["sonic_pi_play"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("play(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(sonicPiColor);
		}
	};

	Blockly.Blocks["sonic_pi_sample"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sample(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(sonicPiColor);
		}
	};

	Blockly.Blocks["sonic_pi_sleep"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sleep(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(sonicPiColor);
		}
	};

	Blockly.Blocks["sonic_pi_use_synth"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("use_synth(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(sonicPiColor);
		}
	};
}