export default function getGenerators(): void {
	Blockly.Python["audio_out"] = function(block: Blockly.BlockSvg): string {
		const audio: string = Blockly.Python.nameDB_.getName(block.getFieldValue("audio"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${audio} = audioio.AudioOut(${parameters})\n`;
		return code;
	};

	Blockly.Python["audio_switch_to_output"] = function(block: Blockly.BlockSvg): string {
		const audio: string = Blockly.Python.nameDB_.getName(block.getFieldValue("audio"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${audio}.switch_to_output(${parameters})\n`;
		return code;
	};

	Blockly.Python["audio_wave_file"] = function(block: Blockly.BlockSvg): string {
		const audio: string = Blockly.Python.nameDB_.getName(block.getFieldValue("audio"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${audio} = audiocore.WaveFile(${parameters})\n`;
		return code;
	};

	Blockly.Python["audio_play"] = function(block: Blockly.BlockSvg): string {
		const audio: string = Blockly.Python.nameDB_.getName(block.getFieldValue("audio"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${audio}.play(${parameters})\n`;
		return code;
	};

	Blockly.Python["audio_stop"] = function(block: Blockly.BlockSvg): string {
		const audio: string = Blockly.Python.nameDB_.getName(block.getFieldValue("audio"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${audio}.stop()\n`;
		return code;
	};

	Blockly.Python["audio_raw_sample"] = function(block: Blockly.BlockSvg): string {
		const sample: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sample"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${sample} = audiocore.RawSample(${parameters})\n`;
		return code;
	};

	Blockly.Python["audio_playing"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const audio: string = Blockly.Python.nameDB_.getName(block.getFieldValue("audio"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${audio}.playing`;
		return [code, 0];
	};
}