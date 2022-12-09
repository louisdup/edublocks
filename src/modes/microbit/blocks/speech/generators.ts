export default function getGenerators(): void {
	Blockly.Python["speech_say"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `speech.say(${parameters})`;
		return code;
	};

	Blockly.Python["speech_pronounce"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `speech.pronounce(${parameters})`;
		return code;
	};

	Blockly.Python["speech_sing"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `speech.sing(${parameters})`;
		return code;
	};
}