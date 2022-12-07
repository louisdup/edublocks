import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["inline_text"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		return [value, 0];
	};

	htmlGenerator["inline_string"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `"${value}"`;
		return [code, 0];
	};
}
