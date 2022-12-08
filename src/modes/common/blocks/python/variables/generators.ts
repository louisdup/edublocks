export default function getGenerators(): void {
	Blockly.Python["variable_get"] = function(block: Blockly.BlockSvg): Array<string|number> {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = variableName;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["variable_set"] = function(block: Blockly.BlockSvg): string {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const operator: string = block.getFieldValue("operator");
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${variableName} ${operator} ${value}\n`;
		return code;
	};

	Blockly.Python["inline_variable_set"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const operator: string = block.getFieldValue("operator");
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${variableName} ${operator} ${value}`;
		return [code, 0];
	};
}