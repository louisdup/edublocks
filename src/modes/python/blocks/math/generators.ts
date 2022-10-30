export default function getGenerators(): void {
	Blockly.Python["arithmetic"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value1: string = Blockly.Python.valueToCode(block, "value_1", 0);
		const operator: string = block.getFieldValue("operator");
		const value2: string = Blockly.Python.valueToCode(block, "value_2", 0);
		const code: string = `${value1} ${operator} ${value2}`;
		return [code, 0];
	};

	Blockly.Python["round"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `round(${parameters})`;
		return [code, 0];
	};
}