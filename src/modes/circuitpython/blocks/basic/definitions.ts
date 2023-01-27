const basicColor: string = "#E71D64";

export default function getDefinitions(): void {
	Blockly.Blocks["import_board"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import board");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_digitalio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from digitalio import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_analogio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from analogio import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_neopixel"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import neopixel");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_touchio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import touchio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_servo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from adafruit_motor import servo");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_audioio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import audioio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_pulseio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import pulseio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_adafruit_dotstar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import adafruit_dotstar");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_microcontroller"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import microcontroller");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_storage"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import storage");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_time"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import time");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_math"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import math");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_random"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import random");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["sleep"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("time.sleep(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};
}