export default function getGenerators(): void {
	Blockly.Python["list"] = function(block: Blockly.BlockSvg): Array<string> {
		const data: string = Blockly.Python.valueToCode(block, "data", 0);
		const code: string = `[${data}]`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["list_get_item_at_index"] = function(block: Blockly.BlockSvg): Array<string> {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${variableName}[${parameters}]`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["list_reverse"] = function(block: Blockly.BlockSvg): string {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${variableName}.reverse()\n`;
		return code;
	};

	Blockly.Python["list_find_index"] = function(block: Blockly.BlockSvg): Array<string> {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${variableName}.index(${parameters})`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["list_append"] = function(block: Blockly.BlockSvg): string {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${variableName}.append(${parameters})\n`;
		return code;
	};
}