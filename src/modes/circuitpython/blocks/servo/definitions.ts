const servoColor: string = "#AD40FF";

export default function getDefinitions(): void {
	Blockly.Blocks["servo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("servo"), "servo")
				.appendField(" = servo.Servo(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(servoColor);
		}
	};

	Blockly.Blocks["servo_angle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("servo"), "servo")
				.appendField(".angle = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(servoColor);
		}
	};	  

	Blockly.Blocks["servo_actuation_range"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("servo"), "servo")
				.appendField(".actuation_range = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(servoColor);
		}
	};	  
}