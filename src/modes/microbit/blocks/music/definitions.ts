const musicColor: string = "#E5BC16";

export default function getDefinitions(): void {
	Blockly.Blocks["music_play"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.play(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(musicColor);
		}
	};	  

	const songs: Array<Array<string>> = [
		["music.DADADADUM", "music.DADADADUM"],
		["music.ENTERTAINER", "music.ENTERTAINER"],
		["music.PRELUDE", "music.PRELUDE"],
		["music.ODE", "music.ODE"],
		["music.NYAN", "music.NYAN"],
		["music.RINGTONE", "music.RINGTONE"],
		["music.FUNK", "music.FUNK"],
		["music.BLUES", "music.BLUES"],
		["music.BIRTHDAY", "music.BIRTHDAY"],
		["music.WEDDING", "music.WEDDING"],
		["music.FUNERAL", "music.FUNERAL"],
		["music.PUNCHLINE", "music.PUNCHLINE"],
		["music.PYTHON", "music.PYTHON"],
		["music.BADDY", "music.BADDY"],
		["music.CHASE", "music.CHASE"],
		["music.BA_DING", "music.BA_DING"],
		["music.WAWAWAWAA", "music.WAWAWAWAA"],
		["music.JUMP_UP", "music.JUMP_UP"],
		["music.JUMP_DOWN", "music.JUMP_DOWN"],
		["music.POWER_UP", "music.POWER_UP"],
		["music.POWER_DOWN", "music.POWER_DOWN"]
	  ];

	Blockly.Blocks["music_songs"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(songs), "value");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setInputsInline(true);
			this.setColour(musicColor);
		}
	};

	Blockly.Blocks["music_pitch"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.pitch(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(musicColor);
		}
	};	  

	Blockly.Blocks["music_set_tempo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.set_tempo(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(musicColor);
		}
	};	
	
	Blockly.Blocks["music_reset"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("music.reset()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(musicColor);
		},
	};

	Blockly.Blocks["music_stop"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.stop(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(musicColor);
		}
	};	

	Blockly.Blocks["music_get_tempo"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("music.get_tempo()");
		  this.setOutput(true, null);
		  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		  this.setColour(musicColor);
		},
	};

	Blockly.Blocks["audio_play"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("audio.play(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(musicColor);
		}
	};	

	Blockly.Blocks["audio_options"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["Sound.HAPPY","Sound.HAPPY"], ["Sound.GIGGLE","Sound.GIGGLE"], ["Sound.HELLO","Sound.HELLO"], ["Sound.MYSTERIOUS","Sound.MYSTERIOUS"], ["Sound.SAD","Sound.SAD"], ["Sound.SLIDE","Sound.SLIDE"], ["Sound.SOARING","Sound.SOARING"], ["Sound.SPRING","Sound.SPRING"], ["Sound.TWINKLE","Sound.TWINKLE"], ["Sound.YAWN","Sound.YAWN"]]), "options");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(musicColor);
		}
	};

	Blockly.Blocks["audio_set_volume"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("set_volume(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(musicColor);
		}
	};
}