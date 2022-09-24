Blockly.Python["webwhileout"] = function(block: Blockly.BlockSvg): string {
	const value: string = Blockly.Python.valueToCode(block, "cond", 0);
	let branch: string = Blockly.Python.statementToCode(block, "DO");
	branch = Blockly.Python.addLoopTrap(branch, block) || "  pass\n";
	const code: string = `while ${value}:\n ${branch}`;
	return code;
};

Blockly.Python["webfor"] = function(block: Blockly.BlockSvg): string {
	const value1: string = Blockly.Python.valueToCode(block, "letter", 0);
	const value2: string = Blockly.Python.valueToCode(block, "no", 0);
	let branch: string = Blockly.Python.statementToCode(block, "DO");
	branch = Blockly.Python.addLoopTrap(branch, block) || "  pass\n";
	const code: string = `for ${value1} in range(${value2}):\n ${branch}`;
	return code;
};

Blockly.Python["webadvancedforloops"] = function(block: Blockly.BlockSvg): string {
	const value1: string = Blockly.Python.valueToCode(block, "x", 0);
	const value2: string = Blockly.Python.valueToCode(block, "y", 0);
	let branch: string = Blockly.Python.statementToCode(block, "DO");
	branch = Blockly.Python.addLoopTrap(branch, block) || "  pass\n";
	const code: string = `for ${value1} in ${value2}:\n ${branch}`;
	return code;
};