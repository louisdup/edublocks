const displayColor: string = "#CDDA36";

const expressions: Array<Array<string>> = [
	["HEART", "HEART"], 
	["HEART_SMALL", "HEART_SMALL"], 
	["HAPPY", "HAPPY"],
	["SMILE", "SMILE"], 
	["SAD", "SAD"], 
	["CONFUSED", "CONFUSED"],
	["ANGRY", "ANGRY"], 
	["ASLEEP", "ASLEEP"],
	["SURPRISED", "SURPRISED"], 
	["SILLY", "SILLY"], 
	["FABULOUS", "FABULOUS"],
	["MEH", "MEH"]
];
  
const clocks: Array<Array<string>> = [
	  ["CLOCK1", "CLOCK1"], 
	  ["CLOCK2", "CLOCK2"], 
	  ["CLOCK3", "CLOCK3"],
	  ["CLOCK4", "CLOCK4"], 
	  ["CLOCK5", "CLOCK5"], 
	  ["CLOCK6", "CLOCK6"],
	  ["CLOCK7", "CLOCK7"], 
	  ["CLOCK8", "CLOCK8"],
	  ["CLOCK9", "CLOCK9"], 
	  ["CLOCK10", "CLOCK10"], 
	  ["CLOCK11", "CLOCK11"],
	  ["CLOCK12", "CLOCK12"]
];
	
const shapes: Array<Array<string>> = [
	["TRIANGLE", "TRIANGLE"], 
	["TRIANGLE_LEFT", "TRIANGLE_LEFT"], 
	["CHESSBOARD", "CHESSBOARD"],
	["DIAMOND", "DIAMOND"], 
	["DIAMOND_SMALL", "DIAMOND_SMALL"], 
	["SQUARE", "SQUARE"],
	["SQUARE_SMALL", "SQUARE_SMALL"], 
	["PITCHFORK", "PITCHFORK"],
	["MUSIC_CROTCHET", "MUSIC_CROTCHET"], 
	["MUSIC_QUAVER", "MUSIC_QUAVER"], 
	["MUSIC_QUAVERS", "MUSIC_QUAVERS"],
	["PITCHFORK", "PITCHFORK"],
	["XMAS", "XMAS"],
	["PACMAN", "PACMAN"],
	["TARGET", "TARGET"],
	["TSHIRT", "TSHIRT"],
	["ROLLERSKATE", "ROLLERSKATE"],
	["HOUSE", "HOUSE"],
	["SWORD", "SWORD"],
	["UMBRELLA", "UMBRELLA"]
];
  
const animals: Array<Array<string>> = [
	["RABBIT", "RABBIT"], 
	["COW", "COW"], 
	["DUCK", "DUCK"],
	["TORTOISE", "TORTOISE"], 
	["BUTTERFLY", "BUTTERFLY"], 
	["STICKFIGURE", "STICKFIGURE"],
	["GHOST", "GHOST"], 
	["GIRAFFE", "GIRAFFE"],
	["SKULL", "SKULL"], 
	["SNAKE", "SNAKE"]
];

export default function getDefinitions(): void {
	Blockly.Blocks["display_scroll"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.scroll(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(displayColor);
		}
	};

	Blockly.Blocks["display_show"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.show(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(displayColor);
		}
	};

	Blockly.Blocks["images_expressions"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.show(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(displayColor);
		}
	};

	Blockly.Blocks["images_expressions"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("Image.")
			  .appendField(new Blockly.FieldDropdown(expressions), "value");
		  this.setOutput(true, null);
		  this.setColour(displayColor);
		}
	};

	Blockly.Blocks["images_clocks"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("Image.")
			  .appendField(new Blockly.FieldDropdown(clocks), "value");
		  this.setOutput(true, null);
		  this.setColour(displayColor);
		}
	};

	Blockly.Blocks["images_shapes"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("Image.")
			  .appendField(new Blockly.FieldDropdown(shapes), "value");
		  this.setOutput(true, null);
		  this.setColour(displayColor);
		}
	};

	Blockly.Blocks["images_animals"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("Image.")
			  .appendField(new Blockly.FieldDropdown(animals), "value");
		  this.setOutput(true, null);
		  this.setColour(displayColor);
		}
	};

	Blockly.Blocks["custom_image"] = {
		init: function(): void {
		    this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Image(\"")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_1")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_2")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_3")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_4")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_5")
				.appendField(":\"");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("\"")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_6")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_7")
				.appendField(new Blockly.FieldNumber(6, 0, 9, 1), "value_8")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_9")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_10")
				.appendField(":\"");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("\"")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_11")
				.appendField(new Blockly.FieldNumber(6, 0, 9, 1), "value_12")
				.appendField(new Blockly.FieldNumber(9, 0, 9, 1), "value_13")
				.appendField(new Blockly.FieldNumber(6, 0, 9, 1), "value_14")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_15")
				.appendField(":\"");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("\"")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_16")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_17")
				.appendField(new Blockly.FieldNumber(6, 0, 9, 1), "value_18")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_19")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_20")
				.appendField(":\"");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("\"")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_21")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_22")
				.appendField(new Blockly.FieldNumber(3, 0, 9, 1), "value_23")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_24")
				.appendField(new Blockly.FieldNumber(0, 0, 9, 1), "value_25")
				.appendField("\")");
		  this.setOutput(true, null);
		  this.setColour(displayColor);
		}
	};	  

	Blockly.Blocks["display_clear"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.clear()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(displayColor);
		}
	};

	Blockly.Blocks["display_on_off"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("display.")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "value")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(displayColor);
		}
	};	  

	Blockly.Blocks["display_get_pixel"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.get_pixel(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(displayColor);
		}
	};

	Blockly.Blocks["display_set_pixel"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.set_pixel(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(displayColor);
		}
	};

	Blockly.Blocks["display_read_light_level"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.read_light_level()");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(displayColor);
		}
	};
}