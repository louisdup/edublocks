const dotstarColor: string = "#CDDA36";

export default function getDefinitions(): void {
	Blockly.Blocks["dotstar_setup"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(" = adafruit_dotstar.DotStar(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(dotstarColor);
		}
	};	  

	Blockly.Blocks["dotstar_set"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField("[");
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("] = (");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(dotstarColor);
		}
	};	

	Blockly.Blocks["dotstar_show"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(".show()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(dotstarColor);
		}
	};

	Blockly.Blocks["dotstar_fill"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(".fill(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(dotstarColor);
		}
	};	  

	Blockly.Blocks["dotstar_brightness"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(".brightness = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(dotstarColor);
		}
	};	  
}