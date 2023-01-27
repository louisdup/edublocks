export default function getGenerators(): void {
	Blockly.Python["import_board"] = function(): string {
		const code: string = `import board\n`;
		return code;
	};

	Blockly.Python["import_digitalio"] = function(): string {
		const code: string = `from digitalio import *\n`;
		return code;
	};

	Blockly.Python["import_analogio"] = function(): string {
		const code: string = `from analogio import *\n`;
		return code;
	};

	Blockly.Python["import_neopixel"] = function(): string {
		const code: string = `import neopixel\n`;
		return code;
	};

	Blockly.Python["import_touchio"] = function(): string {
		const code: string = `import touchio\n`;
		return code;
	};

	Blockly.Python["import_audioio"] = function(): string {
		const code: string = `import audioio\n`;
		return code;
	};

	Blockly.Python["import_pulseio"] = function(): string {
		const code: string = `import pulseio\n`;
		return code;
	};

	Blockly.Python["import_microcontroller"] = function(): string {
		const code: string = `import microcontroller\n`;
		return code;
	};

	Blockly.Python["import_storage"] = function(): string {
		const code: string = `import storage\n`;
		return code;
	};

	Blockly.Python["import_time"] = function(): string {
		const code: string = `import time\n`;
		return code;
	};

	Blockly.Python["import_math"] = function(): string {
		const code: string = `import math\n`;
		return code;
	};

	Blockly.Python["import_random"] = function(): string {
		const code: string = `import random\n`;
		return code;
	};

	Blockly.Python["sleep"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `time.sleep(${parameters})\n`;
		return code;
	};
}