export default function getGenerators(): void {
	Blockly.Python["microphone_current"] = function(): Array<string | number> {
		const code: string = "microphone.current_sound()";
		return [code, 0];
	};

	Blockly.Python["microphone_level"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const level: string = block.getFieldValue("level");
		const code: string = `microphone.${level}`;
		return [code, 0];
	};

	Blockly.Python["microphone_sound"] = function(): Array<string | number> {
		const code: string = "microphone.sound_level()";
		return [code, 0];
	};

	Blockly.Python["set_threshold"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `microphone.set_threshold(${parameters})\n`;
		return code;
	};

	Blockly.Python["microphone_wassound"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `microphone.was_sound(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["microphone_getsounds"] = function(): Array<string | number> {
		const code: string = "microphone.get_sounds()";
		return [code, 0];
	};

	Blockly.Python["sound_event"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `SoundEvent.${value}`;
		return [code, 0];
	  };
}