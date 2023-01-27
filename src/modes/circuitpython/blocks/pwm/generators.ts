export default function getGenerators(): void {
	Blockly.Python["pwm_pulse_in"] = function(block: Blockly.BlockSvg): string {
		const pwm: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pwm"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${pwm} = pulseio.PulseIn(${parameters})\n`;
		return code;
	};

	Blockly.Python["pwm_pulse_out"] = function(block: Blockly.BlockSvg): string {
		const pwm: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pwm"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${pwm} = pulseio.PulseOut(${parameters})\n`;
		return code;
	};

	Blockly.Python["pwm_pause"] = function(block: Blockly.BlockSvg): string {
		const pwm: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pwm"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${pwm}.pause()\n`;
		return code;
	};

	Blockly.Python["pwm_clear"] = function(block: Blockly.BlockSvg): string {
		const pwm: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pwm"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${pwm}.clear()\n`;
		return code;
	};

	Blockly.Python["pwm_resume"] = function(block: Blockly.BlockSvg): string {
		const pwm: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pwm"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${pwm}.resume(${parameters})\n`;
		return code;
	};

	Blockly.Python["pwm_send"] = function(block: Blockly.BlockSvg): string {
		const pwm: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pwm"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${pwm}.send(${parameters})\n`;
		return code;
	};
}