const mediaColor: string = "#ED2CD5";

export default function getDefinitions(): void {
	Blockly.Blocks["iframe_element"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<iframe ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("></iframe>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(mediaColor);
			this.setTooltip("Embed a webpage or video");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["video_player"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<video ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("></video>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(mediaColor);
			this.setTooltip("Embed a video");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_player"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<audio ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("></audio>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(mediaColor);
			this.setTooltip("Embed an audio file");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["image_element"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<img ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(mediaColor);
			this.setTooltip("Display an image");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["media_controls"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["autoplay","autoplay"], ["controls","controls"], ["loop","loop"], ["muted","muted"]]), "controls");
			this.setOutput(true, null);
			this.setColour(mediaColor);
			this.setTooltip("Media Controls");
			this.setHelpUrl("");
		}
	};
}

