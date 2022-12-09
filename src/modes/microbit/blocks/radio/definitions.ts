const radioColor: string = "#84cc16";

export default function getDefinitions(): void {
	Blockly.Blocks["radio_on"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("radio.on()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(radioColor);
		},
	};

	Blockly.Blocks["radio_send"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("radio.send(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(radioColor);
		}
	};	  

	Blockly.Blocks["radio_config"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("radio.config(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(radioColor);
		}
	};	 
	
	Blockly.Blocks["radio_receive"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("radio.receive()");
		  this.setOutput(true, null);
		  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		  this.setColour(radioColor);
		},
	};
}