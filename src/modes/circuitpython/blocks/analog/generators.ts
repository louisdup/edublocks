export default function getGenerators(): void {
	Blockly.Python["analog_in"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${pin} = AnalogIn(${parameters})\n`;
		return code;
	};

	Blockly.Python["analog_out"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${pin} = AnalogOut(${parameters})\n`;
		return code;
	};

	Blockly.Python["analog_pin_set_value"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${pin}.value = ${value}\n`;
		return code;
	};

	Blockly.Python["analog_pin_get_value"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${pin}.value`;
		return [code, 0];
	};
}