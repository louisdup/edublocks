export default function getGenerators(): void {
	Blockly.Python["neopixel_setup"] = function(block: Blockly.BlockSvg): string {
		const neopixel: string = Blockly.Python.nameDB_.getName(block.getFieldValue("neopixel"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${neopixel} = neopixel.NeoPixel(${parameters})\n`;
		return code;
	};

	Blockly.Python["neopixel_set"] = function(block: Blockly.BlockSvg): string {
		const neopixel: string = Blockly.Python.nameDB_.getName(block.getFieldValue("neopixel"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${neopixel}[${value}] = (${parameters})\n`;
		return code;
	};

	Blockly.Python["neopixel_fill"] = function(block: Blockly.BlockSvg): string {
		const neopixel: string = Blockly.Python.nameDB_.getName(block.getFieldValue("neopixel"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${neopixel}.fill(${parameters})\n`;
		return code;
	};

	Blockly.Python["neopixel_show"] = function(block: Blockly.BlockSvg): string {
		const neopixel: string = Blockly.Python.nameDB_.getName(block.getFieldValue("neopixel"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${neopixel}.show()\n`;
		return code;
	};

	Blockly.Python["neopixel_clear"] = function(block: Blockly.BlockSvg): string {
		const neopixel: string = Blockly.Python.nameDB_.getName(block.getFieldValue("neopixel"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${neopixel}.clear()\n`;
		return code;
	};
}