import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["attributes_join"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const inputValues: Array<string> = [];
		block.inputList.forEach((input: Blockly.Input) => {
			inputValues.push(htmlGenerator.valueToCode(block, input.name, 0));
		});
		const code: string = inputValues.join(" ");
		return [code, 0];
	};

	htmlGenerator["id_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `id=${content}`;
		return [code, 0];
	};

	htmlGenerator["class_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `class=${content}`;
		return [code, 0];
	};

	htmlGenerator["style_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `style=${content}`;
		return [code, 0];
	};

	htmlGenerator["height_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `height=${content}`;
		return [code, 0];
	};

	htmlGenerator["width_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `width=${content}`;
		return [code, 0];
	};

	htmlGenerator["value_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `value=${content}`;
		return [code, 0];
	};

	htmlGenerator["src_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `src=${content}`;
		return [code, 0];
	};

	htmlGenerator["href_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `href=${content}`;
		return [code, 0];
	};

	htmlGenerator["for_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `for=${content}`;
		return [code, 0];
	};

	htmlGenerator["rel_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `rel=${content}`;
		return [code, 0];
	};

	htmlGenerator["placeholder_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `placeholder=${content}`;
		return [code, 0];
	};

	htmlGenerator["type_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `type=${content}`;
		return [code, 0];
	};

	htmlGenerator["onclick_attribute"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `onclick=${content}`;
		return [code, 0];
	};
}
