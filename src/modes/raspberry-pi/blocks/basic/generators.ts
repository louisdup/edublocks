export default function getGenerators(): void {
	Blockly.Python["import_time"] = function(): string {
		const code: string = `import time\n`;
		return code;
	};

	Blockly.Python["import_minecraft"] = function(): string {
		const code: string = `from mcpi.minecraft import Minecraft\n`;
		return code;
	};

	Blockly.Python["import_minecraft_block"] = function(): string {
		const code: string = `from mcpi import block\n`;
		return code;
	};

	Blockly.Python["import_minecraft_block_as_block"] = function(): string {
		const code: string = `import mcpi.block as block\n`;
		return code;
	};

	Blockly.Python["import_requests"] = function(): string {
		const code: string = `import requests\n`;
		return code;
	};

	Blockly.Python["import_sonic_pi"] = function(): string {
		const code: string = `from psonic import *\n`;
		return code;
	};

	Blockly.Python["import_json"] = function(): string {
		const code: string = `import json\n`;
		return code;
	};

	Blockly.Python["import_turtle"] = function(): string {
		const code: string = `from turtle import *\n`;
		return code;
	};

	Blockly.Python["sleep"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `time.sleep(${parameters})\n`;
		return code;
	};
}