import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["form"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "class", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<form ${attributes}>
			${content}
		</form>
		`;
		return code;
	};

	htmlGenerator["input_element"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<input ${attributes}>`;
		return code;
	};

	htmlGenerator["button"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `<button ${attributes}>${content}</button>`;
		return code;
	};

	htmlGenerator["label_element"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `<label ${attributes}>${content}</label>`;
		return code;
	};

	htmlGenerator["input_types"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `"${options}"`;
		return [code, 0];
	};
}
