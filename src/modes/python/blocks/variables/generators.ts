Blockly.Python["variables_get"] = function(block: Blockly.BlockSvg): Array<string|number> {
	const variable: string = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), 0);
	const code: string = variable;
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["variables_set"] = function(block: Blockly.BlockSvg): string {
	const name: string = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), 0);
	const operator: string = block.getFieldValue("NAME");
	const value: string = Blockly.Python.valueToCode(block, "varset", 0);
	const code: string = `${name} ${operator} ${value}\n`;
	return code;
};