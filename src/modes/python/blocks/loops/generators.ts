Blockly.Python["while"] = function(block: Blockly.BlockSvg): string {
	const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `while ${condition}:\n${value}`;
	return code;
};

Blockly.Python["for_range"] = function(block: Blockly.BlockSvg): string {
	const variable: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `for ${variable} in range(${parameters}):\n${value}`;
	return code;
};

Blockly.Python["for"] = function(block: Blockly.BlockSvg): string {
	const variable: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable"), Blockly.VARIABLE_CATEGORY_NAME);
	const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `for ${variable} in ${condition}:\n${value}`;
	return code;
};
  
Blockly.Python["break"] = function(): string {
	const code: string = "break\n";
	return code;
};