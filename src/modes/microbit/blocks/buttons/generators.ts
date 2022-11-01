export default function getGenerators(): void {
	Blockly.Python["button_is_pressed"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `button_${value}.is_pressed()`;
		return [code, 0];
	};

	Blockly.Python["button_was_pressed"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `button_${value}.was_pressed()`;
		return [code, 0];
	};

	Blockly.Python["button_get_presses"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `button_${value}.get_presses()`;
		return [code, 0];
	};
}