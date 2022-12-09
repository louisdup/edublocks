const microphoneColor: string = "#008080";

export default function getDefinitions(): void {
	Blockly.Blocks["microphone_current"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.current_sound()");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour(microphoneColor);
		},
	};

	Blockly.Blocks["microphone_level"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.")
				.appendField(new Blockly.FieldDropdown([["LOUD","LOUD"], ["QUIET","QUIET"]]), "level");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(microphoneColor);
		}
	};

	Blockly.Blocks["microphone_sound"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.sound_level()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(microphoneColor);
		}
	};

	Blockly.Blocks["microphone_wassound"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.was_sound(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour(microphoneColor);
		}
	};

	Blockly.Blocks["set_threshold"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.set_threshold(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(microphoneColor);
		}
	};

	Blockly.Blocks["microphone_getsounds"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.get_sounds()");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour(microphoneColor);
		},
	};

	Blockly.Blocks["sound_event"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("SoundEvent.")
				.appendField(new Blockly.FieldDropdown([["LOUD","LOUD"], ["QUIET","QUIET"]]), "value");
			this.setOutput(true, null);
			this.setColour(microphoneColor);
		}
	};	  
}