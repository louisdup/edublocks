export default function getGenerators(): void {
	Blockly.Python["advanced_cpu_temperature"] = function(): Array<string | number> {
		const code: string = `microcontroller.cpu.temperature`;
		return [code, 0];
	};

	Blockly.Python["storage_mount"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `storage.mount(${parameters})\n`;
		return code;
	};

	Blockly.Python["storage_open"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `open(${parameters})`;
		return code;
	};
}