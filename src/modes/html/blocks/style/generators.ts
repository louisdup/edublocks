import { htmlGenerator } from "@/modes/html/generator";

export default function getGenerators(): void {
	htmlGenerator["style_block"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		<style>
			${content}
		</style>`;
		return code;
	};

	htmlGenerator["stylesheet"] = function(block: Blockly.BlockSvg): string {
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const code: string = `<link ${attributes}>\n`;
		return code;
	};

	htmlGenerator["pseudo"] = function(block: Blockly.BlockSvg): Array< string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `:${options}`;
		return [code, 0];
	};

	htmlGenerator["element_style"] = function(block: Blockly.BlockSvg): string {
		const element: string = htmlGenerator.valueToCode(block, "element", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		${element} {
			${content}
		}`;
		return code;
	};

	htmlGenerator["element_style"] = function(block: Blockly.BlockSvg): string {
		const element: string = htmlGenerator.valueToCode(block, "element", 0);
		const attributes: string = htmlGenerator.valueToCode(block, "attributes", 0);
		const content: string = htmlGenerator.statementToCode(block, "content");
		const code: string = `
		${element}${attributes} {
			${content}
		}`;
		return code;
	};

	htmlGenerator["text_color"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `color: ${content};`;
		return code;
	};

	htmlGenerator["font_family"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `font-family: ${content};`;
		return code;
	};

	htmlGenerator["font_size_value"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const type: string = block.getFieldValue("type");
		const code: string = `font-size: ${content}${type};\n`;
		return code;
	};

	htmlGenerator["font_size_text"] = function(block: Blockly.BlockSvg): string {
		const size: string = block.getFieldValue("size");
		const code: string = `font-size: ${size};\n`;
		return code;
	};

	htmlGenerator["color_picker"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const color: string = block.getFieldValue("color");
		const code: string = color;
		return [code, 0];
	};

	htmlGenerator["text_align"] = function(block: Blockly.BlockSvg): string {
		const align: string = block.getFieldValue("align");
		const code: string = `text-align: ${align};`;
		return code;
	};

	htmlGenerator["text_transform"] = function(block: Blockly.BlockSvg): string {
		const transform: string = block.getFieldValue("transform");
		const code: string = `text-transform: ${transform};`;
		return code;
	};

	htmlGenerator["text_decoration"] = function(block: Blockly.BlockSvg): string {
		const line: string = block.getFieldValue("line");
		const style: string = block.getFieldValue("style");
		const code: string = `text-transform: ${line} ${style};`;
		return code;
	};

	htmlGenerator["text_shadow"] = function(block: Blockly.BlockSvg): string {
		const shadowH: string = htmlGenerator.valueToCode(block, "h", 0);
		const shadowV: string = htmlGenerator.valueToCode(block, "v", 0);
		const shadowBlur: string = htmlGenerator.valueToCode(block, "blur", 0);
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `text-shadow: ${shadowH} ${shadowV} ${shadowBlur} ${color}`;
		return code;
	};

	htmlGenerator["display"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const code: string = `display: ${options};`;
		return code;
	};

	htmlGenerator["margin_direction"] = function(block: Blockly.BlockSvg): string {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `margin-${direction}: ${content}${unit};`;
		return code;
	};

	htmlGenerator["margin"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `margin: ${content}${unit};`;
		return code;
	};

	htmlGenerator["padding_direction"] = function(block: Blockly.BlockSvg): string {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `padding-${direction}: ${content}${unit};`;
		return code;
	};

	htmlGenerator["padding"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `padding: ${content}${unit};`;
		return code;
	};

	htmlGenerator["overflow"] = function(block: Blockly.BlockSvg): string {
		const direction: string = block.getFieldValue("direction");
		const options: string = block.getFieldValue("options");
		const code: string = `overflow-${direction}: ${options};`;
		return code;
	};

	htmlGenerator["float"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const code: string = `float: ${options};`;
		return code;
	};

	htmlGenerator["element_width"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `width: ${content}${unit};`;
		return code;
	};

	htmlGenerator["element_height"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `height: ${content}${unit};`;
		return code;
	};

	htmlGenerator["background_color"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `background-color: ${content};`;
		return code;
	};

	htmlGenerator["background_image"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `background-image: url("${content}");`;
		return code;
	};

	htmlGenerator["background_repeat"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const code: string = `background-repeat: ${options};`;
		return code;
	};

	htmlGenerator["background_position"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const code: string = `background-position: ${options};`;
		return code;
	};

	htmlGenerator["background_size"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const code: string = `background-size: ${options};`;
		return code;
	};

	htmlGenerator["background_clip"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const code: string = `background-clip: ${options};`;
		return code;
	};

	htmlGenerator["rgba"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const red: string = htmlGenerator.valueToCode(block, "r", 0);
		const green: string = htmlGenerator.valueToCode(block, "g", 0);
		const blue: string = htmlGenerator.valueToCode(block, "b", 0);
		const alpha: string = htmlGenerator.valueToCode(block, "a", 0);
		const code: string = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
		return [code, 0];
	};

	htmlGenerator["border_set"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const type: string = block.getFieldValue("type");
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `border: ${content}${size} ${type} ${color};`;
		return code;
	};

	htmlGenerator["border_direction_set"] = function(block: Blockly.BlockSvg): string {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const type: string = block.getFieldValue("type");
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `border-${direction}: ${content}${size} ${type} ${color};`;
		return code;
	};

	htmlGenerator["border_radius_direction"] = function(block: Blockly.BlockSvg): string {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const code: string = `border-${direction}-radius: ${content}${size};`;
		return code;
	};

	htmlGenerator["border_radius"] = function(block: Blockly.BlockSvg): string {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const code: string = `border-radius: ${content}${size};`;
		return code;
	};

	htmlGenerator["cursor"] = function(block: Blockly.BlockSvg): string {
		const options: string = block.getFieldValue("options");
		const code: string = `cursor: ${options};`;
		return code;
	};

	// Inline

	htmlGenerator["box_shadow_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const shadowH: string = htmlGenerator.valueToCode(block, "h", 0);
		const shadowV: string = htmlGenerator.valueToCode(block, "v", 0);
		const shadowBlur: string = htmlGenerator.valueToCode(block, "blur", 0);
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `box-shadow: ${shadowH} ${shadowV} ${shadowBlur} ${color}`;
		return [code, 0];
	};

	htmlGenerator["text_color_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `color: ${content};`;
		return [code, 0];
	};

	htmlGenerator["font_family_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `font-family: ${content};`;
		return [code, 0];
	};

	htmlGenerator["font_size_value_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const type: string = block.getFieldValue("type");
		const code: string = `font-size: ${content}${type};`;
		return [code, 0];
	};

	htmlGenerator["font_size_text_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const size: string = block.getFieldValue("size");
		const code: string = `font-size: ${size};`;
		return [code, 0];
	};

	htmlGenerator["color_picker_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const color: string = block.getFieldValue("color");
		const code: string = color;
		return [code, 0];
	};

	htmlGenerator["text_align_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const align: string = block.getFieldValue("align");
		const code: string = `text-align: ${align};`;
		return [code, 0];
	};

	htmlGenerator["text_transform_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const transform: string = block.getFieldValue("transform");
		const code: string = `text-transform: ${transform};`;
		return [code, 0];
	};

	htmlGenerator["text_decoration_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const line: string = block.getFieldValue("line");
		const style: string = block.getFieldValue("style");
		const code: string = `text-transform: ${line} ${style};`;
		return [code, 0];
	};

	htmlGenerator["text_shadow_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const shadowH: string = htmlGenerator.valueToCode(block, "h", 0);
		const shadowV: string = htmlGenerator.valueToCode(block, "v", 0);
		const shadowBlur: string = htmlGenerator.valueToCode(block, "blur", 0);
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `text-shadow: ${shadowH} ${shadowV} ${shadowBlur} ${color}`;
		return [code, 0];
	};

	htmlGenerator["display_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `display: ${options};`;
		return [code, 0];
	};

	htmlGenerator["margin_direction_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `margin-${direction}: ${content}${unit};`;
		return [code, 0];
	};

	htmlGenerator["margin_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `margin: ${content}${unit};`;
		return [code, 0];
	};

	htmlGenerator["padding_direction_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `padding-${direction}: ${content}${unit};`;
		return [code, 0];
	};

	htmlGenerator["padding_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `padding: ${content}${unit};`;
		return [code, 0];
	};

	htmlGenerator["overflow_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const direction: string = block.getFieldValue("direction");
		const options: string = block.getFieldValue("options");
		const code: string = `overflow-${direction}: ${options};`;
		return [code, 0];
	};

	htmlGenerator["float_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `float: ${options};`;
		return [code, 0];
	};

	htmlGenerator["element_width_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `width: ${content}${unit};`;
		return [code, 0];
	};

	htmlGenerator["element_height_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const unit: string = block.getFieldValue("unit");
		const code: string = `height: ${content}${unit};`;
		return [code, 0];
	};

	htmlGenerator["background_color_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `background-color: ${content};`;
		return [code, 0];
	};

	htmlGenerator["background_image_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const code: string = `background-image: url("${content}");`;
		return [code, 0];
	};

	htmlGenerator["background_repeat_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `background-repeat: ${options};`;
		return [code, 0];
	};

	htmlGenerator["background_position_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `background-position: ${options};`;
		return [code, 0];
	};

	htmlGenerator["background_size_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `background-size: ${options};`;
		return [code, 0];
	};

	htmlGenerator["background_clip_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `background-clip: ${options};`;
		return [code, 0];
	};

	htmlGenerator["rgba_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const red: string = htmlGenerator.valueToCode(block, "r", 0);
		const green: string = htmlGenerator.valueToCode(block, "g", 0);
		const blue: string = htmlGenerator.valueToCode(block, "b", 0);
		const alpha: string = htmlGenerator.valueToCode(block, "a", 0);
		const code: string = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
		return [code, 0];
	};

	htmlGenerator["border_set_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const type: string = block.getFieldValue("type");
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `border: ${content}${size} ${type} ${color};`;
		return [code, 0];
	};

	htmlGenerator["border_direction_set_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const type: string = block.getFieldValue("type");
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `border-${direction}: ${content}${size} ${type} ${color};`;
		return [code, 0];
	};

	htmlGenerator["border_radius_direction_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const direction: string = block.getFieldValue("direction");
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const code: string = `border-${direction}-radius: ${content}${size};`;
		return [code, 0];
	};

	htmlGenerator["border_radius_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const content: string = htmlGenerator.valueToCode(block, "content", 0);
		const size: string = block.getFieldValue("size");
		const code: string = `border-radius: ${content}${size};`;
		return [code, 0];
	};

	htmlGenerator["cursor_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = `cursor: ${options};`;
		return [code, 0];
	};

	htmlGenerator["box_shadow_inline"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const shadowH: string = htmlGenerator.valueToCode(block, "h", 0);
		const shadowV: string = htmlGenerator.valueToCode(block, "v", 0);
		const shadowBlur: string = htmlGenerator.valueToCode(block, "blur", 0);
		const color: string = htmlGenerator.valueToCode(block, "color", 0);
		const code: string = `box-shadow: ${shadowH} ${shadowV} ${shadowBlur} ${color}`;
		return [code, 0];
	};
}
