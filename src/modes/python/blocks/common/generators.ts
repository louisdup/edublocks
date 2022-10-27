Blockly.Python["events_start_here"] = function(): string {
	const code: string = `#Start code here\n`;
	return code;
};

Blockly.Python["inline_text"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = block.getFieldValue("value");
	return [value, 0];
};

Blockly.Python["inline_string"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = block.getFieldValue("value");
	const code: string = `"${value}"`;
	return [code, 0];
};

Blockly.Python["inline_number"] = function(block: Blockly.BlockSvg): Array<number> {
	const value: number = block.getFieldValue("value");
	return [value, 0];
};

Blockly.Python["placeholder"] = function(block: Blockly.BlockSvg): string {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const code: string = `${value}\n`;
	return code;
};

Blockly.Python["parameters"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const inputValues: Array<string> = [];
	block.inputList.forEach((input: Blockly.Input) => {
		inputValues.push(Blockly.Python.valueToCode(block, input.name, 0));
	});
	const code: string = inputValues.join(", ");
	return [code, 0];
};