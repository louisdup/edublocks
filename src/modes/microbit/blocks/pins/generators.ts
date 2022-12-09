export default function getGenerators(): void {
	Blockly.Python["pin_is_touched"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const pin: string = Blockly.Python.valueToCode(block, "pin", 0);
		const code: string = `pin${pin}.is_touched()`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["pin"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const pin: string = Blockly.Python.valueToCode(block, "pin", 0);
		const code: string = `pin${pin}`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["logo_is_touched"] = function(): Array<string | number> {
		const code: string = "pin_logo.is_touched()";
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["pin_speaker"] = function(): Array<string | number> {
		const code: string = "pin_speaker";
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["pin_read_analog"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const pin: string = Blockly.Python.valueToCode(block, "pin", 0);
		const code: string = `pin${pin}.read_analog()`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["pin_read_digital"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const pin: string = Blockly.Python.valueToCode(block, "pin", 0);
		const code: string = `pin${pin}.read_digital()`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["pin_write_analog"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.valueToCode(block, "pin", 0);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `pin${pin}.write_analog(${parameters})\n`;
		return code;
	};

	Blockly.Python["pin_write_digital"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.valueToCode(block, "pin", 0);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `pin${pin}.write_digital(${parameters})\n`;
		return code;
	};

	Blockly.Python["pin_set_pull"] = function(block: Blockly.BlockSvg): string {
		const pin: string = Blockly.Python.valueToCode(block, "pin", 0);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `pin${pin}.set_pull(${parameters})\n`;
		return code;
	};

	Blockly.Python["pin_on_off"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = value;
		return [code, 0];
	};
}