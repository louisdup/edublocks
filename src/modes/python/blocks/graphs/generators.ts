Blockly.Python["graph_create"] = function(block: Blockly.BlockSvg): string {
	const graphName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("graph_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const graphType: string = block.getFieldValue("graph_type");
	const code: string = `${graphName} = pygal.${graphType}()\n`;
	return code;
};

Blockly.Python["graph_title"] = function(block: Blockly.BlockSvg): string {
	const graphName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("graph_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const code: string = `${graphName}.title = ${value}\n`;
	return code;
};

Blockly.Python["graph_add"] = function(block: Blockly.BlockSvg): string {
	const graphName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("graph_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const data: string = Blockly.Python.valueToCode(block, "data", 0);
	const code: string = `${graphName}.add(${value}, ${data})\n`;
	return code;
};

Blockly.Python["graph_xlabels"] = function(block: Blockly.BlockSvg): string {
	const graphName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("graph_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const value: string = Blockly.Python.valueToCode(block, "value", 0);
	const code: string = `${graphName}.x_labels = ${value}\n`;
	return code;
};

Blockly.Python["graph_render"] = function(block: Blockly.BlockSvg): string {
	const graphName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("graph_name"), Blockly.VARIABLE_CATEGORY_NAME);
	const code: string = `${graphName}.render()\n`;
	return code;
};
