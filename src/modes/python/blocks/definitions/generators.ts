Blockly.Python["define_function"] = function(block: Blockly.BlockSvg): string {
	const functionName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("function_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `def ${functionName}(${parameters}):\n${value}`;
	return code;
};

Blockly.Python["define_class"] = function(block: Blockly.BlockSvg): string {
	const className: string = Blockly.Python.nameDB_.getName(block.getFieldValue("class_name"), Blockly.VARIABLE_CATEGORY_NAME);
	let value: string = Blockly.Python.statementToCode(block, "value");
	value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
	const code: string = `class ${className}:\n${value}`;
	return code;
};

Blockly.Python["return_function"] = function(block: Blockly.BlockSvg): string {
	const functionName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("function_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const code: string = `return ${functionName}\n`;
	return code;
};

Blockly.Python["call_function"] = function(block: Blockly.BlockSvg): string {
	const functionName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("function_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${functionName}(${parameters})\n`;
	return code;
};

Blockly.Python["class_self"] = function(block: Blockly.BlockSvg): string {
	const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const operator: string = block.getFieldValue("operator");
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const code: string = `self.${variableName} ${operator} ${value}\n`;
	return code;
};
