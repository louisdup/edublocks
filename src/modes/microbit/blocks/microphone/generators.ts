export default function getGenerators(): void {
	Blockly.Python["microphone_current_sound"] = function(): Array<string | number> {
		const code: string = "microphone.current_sound()";
		return [code, 0];
	};

	Blockly.Python["microphone_is_level"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const level: string = block.getFieldValue("level");
		const code: string = `microphone.${level}`;
		return [code, 0];
	};

	Blockly.Python["microphone_sound_level"] = function(): Array<string | number> {
		const code: string = "microphone.sound_level()";
		return [code, 0];
	};

	Blockly.Python["microphone_set_threshold"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `microphone.set_threshold(${parameters})\n`;
		return code;
	};

	Blockly.Python["microphone_was_sound"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `microphone.was_sound(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["microphone_get_sounds"] = function(): Array<string | number> {
		const code: string = "microphone.get_sounds()";
		return [code, 0];
	};

	Blockly.Python["sound_event"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = `SoundEvent.${value}`;
		return [code, 0];
	  };
}