Blockly.Python["textinline"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const text: string = block.getFieldValue("text");
	return [text, 0];
};

Blockly.Python["stringinline"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const text: string = block.getFieldValue("text");
	const code: string = `"${text}"`;
	return [code, 0];
};

Blockly.Python["placeholder"] = function(block: Blockly.BlockSvg): string {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const code: string = `${value}\n`;
	return code;
};