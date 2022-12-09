const speechColor: string = "#06b6d4";

export default function getDefinitions(): void {
	Blockly.Blocks["speech_say"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("speech.say(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(speechColor);
		}
	};	  

	Blockly.Blocks["speech_pronounce"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("speech.pronounce(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(speechColor);
		}
	};	  

	Blockly.Blocks["speech_sing"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("speech.sing(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(speechColor);
		}
	};	  
}