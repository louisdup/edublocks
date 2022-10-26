Blockly.Python["if"] = function(block: Blockly.BlockSvg): string {
	const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `if ${condition}:\n${value}`;
	return code;
};

Blockly.Python["elif"] = function(block: Blockly.BlockSvg): string {
	const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `elif ${condition}:\n${value}`;
	return code;
};

Blockly.Python["else"] = function(block: Blockly.BlockSvg): string {
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `else:\n${value}`;
	return code;
};

Blockly.Python["compare"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value1: string = Blockly.Python.valueToCode(block, "value_1", 0);
	const operator: string = block.getFieldValue("operator");
	const value2: string = Blockly.Python.valueToCode(block, "value_2", 0);
	const code: string = `${value1} ${operator} ${value2}`;
	return [code, 0];
};

Blockly.Python["and_or"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value1: string = Blockly.Python.valueToCode(block, "value_1", 0);
	const operator: string = block.getFieldValue("operator");
	const value2: string = Blockly.Python.valueToCode(block, "value_2", 0);
	const code: string = `${value1} ${operator} ${value2}`;
	return [code, 0];
};

Blockly.Python["not"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const code: string = `not ${value}`;
	return [code, 0];
};