export default function getGenerators(): void {
	Blockly.Python["print"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `print(${parameters})\n`;
		return code;
	};

	Blockly.Python["input"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `input(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["time_sleep"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `time.sleep(${parameters})\n`;
		return code;
	};

	Blockly.Python["convert_to_string"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `str(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["convert_to_integer"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `int(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["convert_to_float"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `float(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["global"] = function(block: Blockly.BlockSvg): string {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `global ${value}\n`;
		return code;
	};
}