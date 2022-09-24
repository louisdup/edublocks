Blockly.Python["webprintnew"] = function(block: Blockly.BlockSvg): string {
	const value: string = Blockly.Python.valueToCode(block, "text", 0);
	const code: string = `print("${value}")\n`;
	return code;
};

Blockly.Python["webvarprint"] = function(block: Blockly.BlockSvg): string {
	const value: string = Blockly.Python.valueToCode(block, "var", 0);
	const code: string = `print(${value})\n`;
	return code;
};