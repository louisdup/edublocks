import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["iframe_element"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<iframe ${attributes}></iframe>\n`;
		return code;
	};

	htmlGenerator["video_player"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<video ${attributes}></video>\n`;
		return code;
	};

	htmlGenerator["audio_player"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<audio ${attributes}></audio>\n`;
		return code;
	};

	htmlGenerator["image_element"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<img ${attributes}>\n`;
		return code;
	};

	htmlGenerator["media_controls"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const controls: string = block.getFieldValue("controls");
		const code: string = controls;
		return [code, 0];
	};
}
