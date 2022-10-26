Blockly.Python["length"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `len(${parameters})`;
	return [code, 0];
};

Blockly.Python["case"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const textCase: string = block.getFieldValue("case");
	const code: string = `${value}.${textCase}()`;
	return [code, 0];
};

Blockly.Python["reverse"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const code: string = `${value}[::-1]`;
	return [code, 0];
};

Blockly.Python["replace"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${value}.replace(${parameters})`;
	return [code, 0];
};

Blockly.Python["count"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const parameters: string = Blockly.Python.valueToCode(block, "suparametersbstring", 0);
	const code: string = `${value}.count(${parameters})`;
	return [code, 0];
};

Blockly.Python["strip"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const stripType: string = block.getFieldValue("strip_type");
	const code: string = `${value}.${stripType}()`;
	return [code, 0];
};

Blockly.Python["find"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const findType: string = block.getFieldValue("find_type");
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${value}.${findType}(${parameters})`;
	return [code, 0];
};

Blockly.Python["text_at_index"] = function(block: Blockly.BlockSvg): Array<string | number> {
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const index: string = Blockly.Python.valueToCode(block, "index", 0);
	const code: string = `${value}[${index}]`;
	return [code, 0];
};