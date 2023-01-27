export default function getGenerators(): void {
	Blockly.Python["touch_in"] = function(block: Blockly.BlockSvg): string {
		const touch: string = Blockly.Python.nameDB_.getName(block.getFieldValue("touch"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${touch} = touchio.TouchIn(${parameters})\n`;
		return code;
	};

	Blockly.Python["touch_get_value"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const touch: string = Blockly.Python.nameDB_.getName(block.getFieldValue("touch"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${touch}.value`;
		return [code, 0];
	};
}