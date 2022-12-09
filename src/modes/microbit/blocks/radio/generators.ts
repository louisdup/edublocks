export default function getGenerators(): void {
	Blockly.Python["radio_on"] = function (): string {
		const code: string = "radio.on()\n";
		return code;
	};

	Blockly.Python["radio_send"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `radio.send(${parameters})`;
		return code;
	};

	Blockly.Python["radio_config"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `radio.config(${parameters})`;
		return code;
	};

	Blockly.Python["radio_receive"] = function (): Array<string | number> {
		const code: string = "radio.receive()";
		return [code, 0];
	};
}