export default function getGenerators(): void {
	Blockly.Python["servo"] = function(block: Blockly.BlockSvg): string {
		const servo: string = Blockly.Python.nameDB_.getName(block.getFieldValue("servo"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${servo} = servo.Servo(${parameters})\n`;
		return code;
	};

	Blockly.Python["servo_angle"] = function(block: Blockly.BlockSvg): string {
		const servo: string = Blockly.Python.nameDB_.getName(block.getFieldValue("servo"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${servo}.angle = ${value}\n`;
		return code;
	};

	Blockly.Python["servo_actuation_range"] = function(block: Blockly.BlockSvg): string {
		const servo: string = Blockly.Python.nameDB_.getName(block.getFieldValue("servo"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${servo}.actuation_range = ${value}\n`;
		return code;
	};
}