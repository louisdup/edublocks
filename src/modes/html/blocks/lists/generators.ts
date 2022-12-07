import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["li"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<li ${attributes}>
			${content}
		</li>
		`;
		return code;
	};

	htmlGenerator["ul"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<ul ${attributes}>
			${content}
		</ul>
		`;
		return code;
	};

	htmlGenerator["ol"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<ol ${attributes}>
			${content}
		</ol>
		`;
		return code;
	};

	htmlGenerator["select"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<select ${attributes}>
			${content}
		</select>
		`;
		return code;
	};

	htmlGenerator["option"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `<option ${attributes}>${content}</option>`;
		return code;
	};
}
