import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["table"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<table ${attributes}>
			${content}
		</table>
		`;
		return code;
	};

	htmlGenerator["table_header"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<th ${attributes}>
			${content}
		</th>
		`;
		return code;
	};

	htmlGenerator["table_row"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<tr ${attributes}>
			${content}
		</tr>
		`;
		return code;
	};

	htmlGenerator["table_data"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<td ${attributes}>
			${content}
		</td>
		`;
		return code;
	};
}
