export default function getGenerators(): void {
	Blockly.Python["print"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `print(${parameters})\n`;
		return code;
	};

	Blockly.Python["input"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `input(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["time_sleep"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `time.sleep(${parameters})\n`;
		return code;
	};

	Blockly.Python["convert_to_string"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `str(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["convert_to_integer"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `int(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["convert_to_float"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `float(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["global"] = function(block: Blockly.BlockSvg): string {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `global ${value}\n`;
		return code;
	};

	Blockly.Python["length"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `len(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["case"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const textCase: string = block.getFieldValue("case");
		const code: string = `${value}.${textCase}()`;
		return [code, 0];
	};

	Blockly.Python["reverse"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${value}[::-1]`;
		return [code, 0];
	};

	Blockly.Python["replace"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${value}.replace(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["count"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const parameters: string = Blockly.Python.valueToCode(block, "suparametersbstring", 0);
		const code: string = `${value}.count(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["strip"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const stripType: string = block.getFieldValue("strip_type");
		const code: string = `${value}.${stripType}()`;
		return [code, 0];
	};

	Blockly.Python["find"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const findType: string = block.getFieldValue("find_type");
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${value}.${findType}(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["text_at_index"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const index: string = Blockly.Python.valueToCode(block, "index", 0);
		const code: string = `${value}[${index}]`;
		return [code, 0];
	};

	Blockly.Python["arithmetic"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value1: string = Blockly.Python.valueToCode(block, "value_1", 0);
		const operator: string = block.getFieldValue("operator");
		const value2: string = Blockly.Python.valueToCode(block, "value_2", 0);
		const code: string = `${value1} ${operator} ${value2}`;
		return [code, 0];
	};

	Blockly.Python["round"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `round(${parameters})`;
		return [code, 0];
	};

	Blockly.Python["if"] = function(block: Blockly.BlockSvg): string {
		const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `if ${condition}:\n${value}`;
		return code;
	};

	Blockly.Python["elif"] = function(block: Blockly.BlockSvg): string {
		const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `elif ${condition}:\n${value}`;
		return code;
	};

	Blockly.Python["else"] = function(block: Blockly.BlockSvg): string {
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `else:\n${value}`;
		return code;
	};

	Blockly.Python["compare"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value1: string = Blockly.Python.valueToCode(block, "value_1", 0);
		const operator: string = block.getFieldValue("operator");
		const value2: string = Blockly.Python.valueToCode(block, "value_2", 0);
		const code: string = `${value1} ${operator} ${value2}`;
		return [code, 0];
	};

	Blockly.Python["and_or"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value1: string = Blockly.Python.valueToCode(block, "value_1", 0);
		const operator: string = block.getFieldValue("operator");
		const value2: string = Blockly.Python.valueToCode(block, "value_2", 0);
		const code: string = `${value1} ${operator} ${value2}`;
		return [code, 0];
	};

	Blockly.Python["not"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `not ${value}`;
		return [code, 0];
	};

	Blockly.Python["list"] = function(block: Blockly.BlockSvg): Array<string> {
		const data: string = Blockly.Python.valueToCode(block, "data", 0);
		const code: string = `[${data}]`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["list_get_item_at_index"] = function(block: Blockly.BlockSvg): Array<string> {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${variableName}[${parameters}]`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["list_reverse"] = function(block: Blockly.BlockSvg): string {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${variableName}.reverse()\n`;
		return code;
	};

	Blockly.Python["list_find_index"] = function(block: Blockly.BlockSvg): Array<string> {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${variableName}.index(${parameters})`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};

	Blockly.Python["list_append"] = function(block: Blockly.BlockSvg): string {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${variableName}.append(${parameters})\n`;
		return code;
	};

	Blockly.Python["while"] = function(block: Blockly.BlockSvg): string {
		const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `while ${condition}:\n${value}`;
		return code;
	};

	Blockly.Python["for_range"] = function(block: Blockly.BlockSvg): string {
		const variable: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `for ${variable} in range(${parameters}):\n${value}`;
		return code;
	};

	Blockly.Python["for"] = function(block: Blockly.BlockSvg): string {
		const variable: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable"), Blockly.VARIABLE_CATEGORY_NAME);
		const condition: string = Blockly.Python.valueToCode(block, "condition", 0);
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `for ${variable} in ${condition}:\n${value}`;
		return code;
	};
  
	Blockly.Python["break"] = function(): string {
		const code: string = "break\n";
		return code;
	};

	Blockly.Python["define_function"] = function(block: Blockly.BlockSvg): string {
		const functionName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("function_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `def ${functionName}(${parameters}):\n${value}`;
		return code;
	};

	Blockly.Python["define_class"] = function(block: Blockly.BlockSvg): string {
		const className: string = Blockly.Python.nameDB_.getName(block.getFieldValue("class_name"), Blockly.VARIABLE_CATEGORY_NAME);
		let value: string = Blockly.Python.statementToCode(block, "value");
		value = Blockly.Python.addLoopTrap(value, block) || Blockly.Python.PASS;
		const code: string = `class ${className}:\n${value}`;
		return code;
	};

	Blockly.Python["return_function"] = function(block: Blockly.BlockSvg): string {
		const functionName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("function_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `return ${functionName}\n`;
		return code;
	};

	Blockly.Python["call_function"] = function(block: Blockly.BlockSvg): string {
		const functionName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("function_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${functionName}(${parameters})\n`;
		return code;
	};

	Blockly.Python["class_self"] = function(block: Blockly.BlockSvg): string {
		const variableName: string = Blockly.Python.nameDB_.getName(block.getFieldValue("variable_name"), Blockly.VARIABLE_CATEGORY_NAME);
		const operator: string = block.getFieldValue("operator");
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `self.${variableName} ${operator} ${value}\n`;
		return code;
	};

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