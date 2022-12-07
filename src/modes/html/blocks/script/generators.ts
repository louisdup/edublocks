import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["external_script"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<script ${attributes}></script>\n`;
		return code;
	};

	htmlGenerator["script"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<script>${content}</script>`;
		return code;
	};

	htmlGenerator["multiline"] = function(block: Blockly.BlockSvg): string {
		const content: string = block.getFieldValue("content");
		const code: string = `${content}\n`;
		return code;
	};
}
