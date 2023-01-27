const audioColor: string = "#00CA4D";

export default function getDefinitions(): void {
	Blockly.Blocks["audio_out"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "audio")
				.appendField(" = audioio.AudioOut(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(audioColor);
		}
	};

	Blockly.Blocks["audio_switch_to_output"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "audio")
				.appendField(".switch_to_output(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(audioColor);
		}
	};

	Blockly.Blocks["audio_wave_file"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "audio")
				.appendField(" = audiocore.WaveFile(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(audioColor);
		}
	};

	Blockly.Blocks["audio_play"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "audio")
				.appendField(".play(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(audioColor);
		}
	};

	Blockly.Blocks["audio_stop"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "audio")
				.appendField(".stop()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(audioColor);
		}
	};

	Blockly.Blocks["audio_raw_sample"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("sample"), "sample")
				.appendField(" = audiocore.RawSample(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(audioColor);
		}
	};

	Blockly.Blocks["audio_playing"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "audio")
				.appendField(".playing");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(audioColor);
		}
	};
}