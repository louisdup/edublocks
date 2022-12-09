const neopixelColor: string = "#10b981";

export default function getDefinitions(): void {
	Blockly.Blocks["neopixel_setup"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "neopixel")
				.appendField(" = neopixel.Neopixel(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(neopixelColor);
		}
	};	  

	Blockly.Blocks["neopixel_set"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "neopixel")
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
			this.setColour(neopixelColor);
		}
	};	
	
	Blockly.Blocks["neopixel_show"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("np"), "neopixel")
			  .appendField(".show()");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(neopixelColor);
		}
	};
	
	Blockly.Blocks["neopixel_clear"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("np"), "neopixel")
			  .appendField(".clear()");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(neopixelColor);
		}
	};
}