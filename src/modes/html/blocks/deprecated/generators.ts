/* eslint-disable */
import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["textinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("text");
		const code = text_text;
		return [code, 0];
	};
	
	htmlGenerator["sliderinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("slider");
		const code = text_text;
		return [code, 0];
	};

	htmlGenerator["attributes"] = function(block: Blockly.BlockSvg) {
		const value_1 = htmlGenerator.valueToCode(block, "in1", 0);
		const value_2 = htmlGenerator.valueToCode(block, "in2", 0);
		const value_3 = htmlGenerator.valueToCode(block, "in3", 0);
		const value_4 = htmlGenerator.valueToCode(block, "in4", 0);
		const value_5 = htmlGenerator.valueToCode(block, "in5", 0);
		const code = `${value_1} ${value_2} ${value_3} ${value_4} ${value_5}`;
		return [code, 0];
	};

	htmlGenerator["iframe"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<iframe src="${content}" ${attributes}></iframe>\n`;
		return code;
	};

	htmlGenerator["video"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<video src="${content}" ${attributes}></video>\n`;
		return code;
	};

	htmlGenerator["audio"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<audio src="${content}" ${attributes}></audio>\n`;
		return code;
	};

	htmlGenerator["image"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<img src="${content}" ${attributes}>\n`;
		return code;
	};

	htmlGenerator["id"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `id="${content}"`;
		return [code, 0];
	};

	htmlGenerator["class"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `class="${content}"`;
		return [code, 0];
	};

	htmlGenerator["style"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `style="${content}"`;
		return [code, 0];
	};

	htmlGenerator["height"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `height="${content}"`;
		return [code, 0];
	};

	htmlGenerator["width"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `width="${content}"`;
		return [code, 0];
	};

	htmlGenerator["value"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `value="${content}"`;
		return [code, 0];
	};

	htmlGenerator["src"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `src="${content}"`;
		return [code, 0];
	};

	htmlGenerator["for"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `for="${content}"`;
		return [code, 0];
	};

	htmlGenerator["placeholder"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `placeholder="${content}"`;
		return [code, 0];
	};

	htmlGenerator["type"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `type="${content}"`;
		return [code, 0];
	};

	htmlGenerator["onclick"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `onclick="${content}"`;
		return [code, 0];
	};

	htmlGenerator["input"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<input type="${options}" ${attributes}>`;
		return code;
	};

	htmlGenerator["label"] = function(block: Blockly.BlockSvg): string {
		const forLink: string = htmlGenerator.valueToCode(block, "for", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `<label for="${forLink}" ${attributes}>${content}</label>`;
		return code;
	};

	htmlGenerator["link"] = function(block: Blockly.BlockSvg): string {
		const url: string = htmlGenerator.valueToCode(block, "url", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `<a target="_blank" href="${url}">${content}</a>\n`;
		return code;
	};

	htmlGenerator["stylesheet_link"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `<link rel="stylesheet" href="${content}">\n`;
		return code;
	};

	htmlGenerator["script_link"] = function(block: Blockly.BlockSvg): string {
		const link: string = htmlGenerator.valueToCode(block, "link", 0);
		const code: string = `<script src="${link}"></script>`;
		return code;
	};
}
