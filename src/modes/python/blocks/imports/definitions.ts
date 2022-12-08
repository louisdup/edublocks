const importsColor: string = "#E71D64";

export default function getDefinitions(): void {
	Blockly.Blocks["import_time"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import time");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};

	Blockly.Blocks["import_math"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import math");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};

	Blockly.Blocks["import_random"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import random");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};

	Blockly.Blocks["import_pygal"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import pygal");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};

	Blockly.Blocks["import_turtle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from turtle import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};

	Blockly.Blocks["import_processing"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from processing import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};

	Blockly.Blocks["import_requests"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import requests");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};

	Blockly.Blocks["import_json"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import json");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(importsColor);
		},
	};
}