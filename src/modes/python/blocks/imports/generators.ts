export default function getGenerators(): void {
	Blockly.Python["import_time"] = function(): string {
		const code: string = `import time\n`;
		return code;
	};

	Blockly.Python["import_math"] = function(): string {
		const code: string = `import math\n`;
		return code;
	};

	Blockly.Python["random"] = function(): string {
		const code: string = `import random\n`;
		return code;
	};

	Blockly.Python["import_pygal"] = function(): string {
		const code: string = `import pygal\n`;
		return code;
	};

	Blockly.Python["import_turtle"] = function(): string {
		const code: string = `from turtle import *\n`;
		return code;
	};

	Blockly.Python["import_processing"] = function(): string {
		const code: string = `from processing import *\n`;
		return code;
	};
}