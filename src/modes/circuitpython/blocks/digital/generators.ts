export default function getGenerators(): void {
	Blockly.Python["digital_in_out"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${pin} = DigitalInOut(${parameters})\n`;
		return code;
	};

	Blockly.Python["digital_pin_direction"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${pin}.direction = ${value}\n`;
		return code;
	};

	Blockly.Python["digital_direction"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const direction: string = block.getFieldValue("direction");
		const code: string = `Direction.${direction}`;
		return [code, 0];
	};

	Blockly.Python["digital_pull"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${pin}.pull = ${value}\n`;
		return code;
	};

	Blockly.Python["digital_pull_direction"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const direction: string = block.getFieldValue("direction");
		const code: string = `Pull.${direction}`;
		return [code, 0];
	};

	Blockly.Python["digital_pin_set_value"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${pin}.value = ${value}\n`;
		return code;
	};

	Blockly.Python["digital_pin_get_value"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const pin: string = Blockly.Python.nameDB_.getName(block.getFieldValue("pin"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${pin}.value`;
		return [code, 0];
	};
}