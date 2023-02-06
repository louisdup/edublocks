export default function getGenerators(): void {
	Blockly.Python["sonic_pi_play"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `play(${parameters})\n`;
		return code;
	};

	Blockly.Python["sonic_pi_sample"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `sample(${parameters})\n`;
		return code;
	};

	Blockly.Python["sonic_pi_sleep"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `sleep(${parameters})\n`;
		return code;
	};

	Blockly.Python["sonic_pi_use_synth"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `use_synth(${parameters})\n`;
		return code;
	};
}