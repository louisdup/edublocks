export default function getGenerators(): void {
	Blockly.Python["import_microbit"] = function(): string {
		const code: string = `from microbit import *\n`;
		return code;
	};

	Blockly.Python["import_music"] = function(): string {
		const code: string = `import music\n`;
		return code;
	};

	Blockly.Python["import_speech"] = function(): string {
		const code: string = `import speech\n`;
		return code;
	};

	Blockly.Python["import_random"] = function(): string {
		const code: string = `import random\n`;
		return code;
	};

	Blockly.Python["sleep"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `sleep(${parameters})\n`;
		return code;
	};
}