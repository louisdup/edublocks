export default function getGenerators(): void {
	Blockly.Python["dotstar_setup"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${led} = adafruit_dotstar.DotStar(${parameters})\n`;
		return code;
	};

	Blockly.Python["dotstar_set"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${led}[${value}] = (${parameters})\n`;
		return code;
	};

	Blockly.Python["dotstar_show"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${led}.show()\n`;
		return code;
	};

	Blockly.Python["dotstar_fill"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${led}.fill(${parameters})\n`;
		return code;
	};

	Blockly.Python["dotstar_brightness"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${led}.brightness = ${value})\n`;
		return code;
	};
}