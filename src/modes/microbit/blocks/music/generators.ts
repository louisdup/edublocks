export default function getGenerators(): void {
	Blockly.Python["music_play"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `music.play(${parameters})\n`;
		return code;
	};

	Blockly.Python["music_songs"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = block.getFieldValue("value");
		const code: string = value;
		return [code, 0];
	};

	Blockly.Python["music_pitch"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `music.pitch(${parameters})\n`;
		return code;
	};

	Blockly.Python["music_set_tempo"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `music.set_tempo(${parameters})\n`;
		return code;
	};

	Blockly.Python["music_reset"] = function (): string {
		const code: string = "music.reset()\n";
		return code;
	};

	Blockly.Python["music_stop"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `music.stop(${parameters})\n`;
		return code;
	};

	Blockly.Python["music_get_tempo"] = function (): Array<string | number> {
		const code: string = "music.get_tempo()";
		return [code, 0];
	};

	Blockly.Python["audio_play"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `audio.play(${parameters})\n`;
		return code;
	};

	Blockly.Python["audio_options"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const options: string = block.getFieldValue("options");
		const code: string = options;
		return [code, 0];
	};

	Blockly.Python["audio_set_volume"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `set_volume(${parameters})\n`;
		return code;
	};
}