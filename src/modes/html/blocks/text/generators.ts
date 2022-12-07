import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["heading_size_slider"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const slider: string = block.getFieldValue("slider");
		const code: string = slider;
		return [code, 0];
	};

	htmlGenerator["paragraph"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<p ${attributes}>${content}</p>\n`;
		return code;
	};

	htmlGenerator["heading"] = function(block: Blockly.BlockSvg): string {
		const type: string = htmlGenerator.valueToCode(block, "type", 0);
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<h${type} ${attributes}>${content}</h${type}>\n`;
		return code;
	};

	htmlGenerator["span"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<span ${attributes}>${content}</span>\n`;
		return code;
	};

	htmlGenerator["link_element"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<a target="_blank" ${attributes}>${content}</a>`;
		return code;
	};
}
