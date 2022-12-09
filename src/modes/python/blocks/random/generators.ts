export default function getGenerators(): void {
	Blockly.Python["random_choice"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `random.choice(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["random_randint"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `random.randint(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["random_uniform"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `random.uniform(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["random_random"] = function (): Array<string | number> {
		const code: string = `random.random()`;
		return [code, 0];
	};

	Blockly.Python["random_randrange"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `random.randrange(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["random_seed"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `random.seed(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["random_shuffle"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `random.shuffle(${parameters})`;
		return [code, 0];
	};
}