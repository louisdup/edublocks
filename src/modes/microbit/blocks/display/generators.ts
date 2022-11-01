export default function getGenerators(): void {
	Blockly.Python["display_scroll"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `display.scroll(${parameters})\n`;
		return code;
	};

	Blockly.Python["display_show"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `display.show(${parameters})\n`;
		return code;
	};

	Blockly.Python["images_expressions"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `Image.${value}`;
		return [code, 0];
	};

	Blockly.Python["images_clocks"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `Image.${value}`;
		return [code, 0];
	};

	Blockly.Python["images_shapes"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `Image.${value}`;
		return [code, 0];
	};

	Blockly.Python["images_animals"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `Image.${value}`;
		return [code, 0];
	};

	Blockly.Python["custom_image"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value1: string = block.getFieldValue("value_1");
		const value2: string = block.getFieldValue("value_2");
		const value3: string = block.getFieldValue("value_3");
		const value4: string = block.getFieldValue("value_4");
		const value5: string = block.getFieldValue("value_5");
		const value6: string = block.getFieldValue("value_6");
		const value7: string = block.getFieldValue("value_7");
		const value8: string = block.getFieldValue("value_8");
		const value9: string = block.getFieldValue("value_9");
		const value10: string = block.getFieldValue("value_10");
		const value11: string = block.getFieldValue("value_11");
		const value12: string = block.getFieldValue("value_12");
		const value13: string = block.getFieldValue("value_13");
		const value14: string = block.getFieldValue("value_14");
		const value15: string = block.getFieldValue("value_15");
		const value16: string = block.getFieldValue("value_16");
		const value17: string = block.getFieldValue("value_17");
		const value18: string = block.getFieldValue("value_18");
		const value19: string = block.getFieldValue("value_19");
		const value20: string = block.getFieldValue("value_20");
		const value21: string = block.getFieldValue("value_21");
		const value22: string = block.getFieldValue("value_22");
		const value23: string = block.getFieldValue("value_23");
		const value24: string = block.getFieldValue("value_24");
		const value25: string = block.getFieldValue("value_25");
		const code: string = `Image("${value1}${value2}${value3}${value4}${value5}:"\n"${value6}${value7}${value8}${value9}${value10}:"\n"${value11}${value12}${value13}${value14}${value15}:"\n"${value16}${value17}${value18}${value19}${value20}:"\n"${value21}${value22}${value23}${value24}${value25}")`;
		return [code, 0];
	};	 
	  
	Blockly.Python["display_clear"] = function(): string {
		const code: string = `display.clear()\n`;
		return code;
	};

	Blockly.Python["display_on_off"] = function(block: Blockly.BlockSvg): string {
		const value: string = block.getFieldValue("value");
		const code: string = `display.${value}()`;
		return code;
	};

	Blockly.Python["display_get_pixel"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `display.get_pixel(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["display_set_pixel"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `display.set_pixel(${parameters})\n`;
		return code;
	};

	Blockly.Python["display_read_light_level"] = function(): Array<string | number> {
		const code: string = `display.read_light_level()`;
		return [code, 0];
	};
}