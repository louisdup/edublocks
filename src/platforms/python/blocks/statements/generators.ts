import { BlockSvg } from "blockly";
import BlocklyPython from "blockly/python";

BlocklyPython.pythonGenerator["print"] = function(block: BlockSvg): string {
	const value: string = block.getFieldValue("value");
	const code: string = `print(${value})\n`;
	return code;
};