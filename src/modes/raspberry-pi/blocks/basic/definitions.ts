const basicColor: string = "#E71D64";

export default function getDefinitions(): void {
	Blockly.Blocks["import_time"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import time");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_minecraft"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from mcpi.minecraft import Minecraft");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_minecraft_block"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from mcpi import block");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_minecraft_block_as_block"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import mcpi.block as block");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_requests"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import requests");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_sonic_pi"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from psonic import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_json"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import json");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_turtle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from turtle import *");
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