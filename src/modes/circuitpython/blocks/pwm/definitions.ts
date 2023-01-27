const pwmColor: string = "#ef4444";

export default function getDefinitions(): void {
	Blockly.Blocks["pwm_pulse_in"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(" = pulseio.PulseIn(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pwmColor);
		}
	};

	Blockly.Blocks["pwm_pulse_out"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(" = pulseio.PulseOut(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pwmColor);
		}
	};

	Blockly.Blocks["pwm_pause"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(".pause()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pwmColor);
		}
	};

	Blockly.Blocks["pwm_clear"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(".clear()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pwmColor);
		}
	};

	Blockly.Blocks["pwm_resume"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(".resume(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pwmColor);
		}
	};

	Blockly.Blocks["pwm_send"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(".send(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pwmColor);
		}
	};
}