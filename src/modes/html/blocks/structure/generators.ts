import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["div_container"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<div ${attributes}>${content}</div>`;
		return code;
	};

	htmlGenerator["header"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<header ${attributes}>${content}</header>`;
		return code;
	};

	htmlGenerator["footer"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<footer ${attributes}>${content}</footer>`;
		return code;
	};

	htmlGenerator["article"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<article ${attributes}>${content}</article>`;
		return code;
	};

	htmlGenerator["section"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<section ${attributes}>${content}</section>`;
		return code;
	};

	htmlGenerator["br"] = function(): string {
		const code: string = "<br>";
		return code;
	};

	htmlGenerator["hr"] = function(): string {
		const code: string = "<hr>";
		return code;
	};
}
