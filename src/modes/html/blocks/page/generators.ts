import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["html"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<html>\n${content}</html>`;
		return code;
	};

	htmlGenerator["head"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<head>\n${content}</head>`;
		return code;
	};

	htmlGenerator["title"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `<title>${content}</title>\n`;
		return code;
	};

	htmlGenerator["body"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<body>\n${content}</body>`;
		return code;
	};

	htmlGenerator["text_content"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `${content}\n`;
		return code;
	};
}
