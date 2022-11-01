const basicColor: string = "#E71D64";

export default function getDefinitions(): void {
	Blockly.Blocks["import_microbit"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from microbit import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_music"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import music");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		},
	};

	Blockly.Blocks["import_speech"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import speech");
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
				.appendField("sleep(");
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