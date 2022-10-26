Blockly.Python["turtle_init"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const code: string = `${turtle} = Turtle()\n`;
	return code;
};

Blockly.Python["turtle_screen_init"] = function(block: Blockly.BlockSvg): string {
	const screen: string = Blockly.Python.nameDB_.getName(block.getFieldValue("screen"), Blockly.VARIABLE_CATEGORY_NAME);
	const code: string = `${screen} = Screen()\n`;
	return code;
};

Blockly.Python["turtle_screen_setup"] = function(block: Blockly.BlockSvg): string {
	const screen: string = Blockly.Python.nameDB_.getName(block.getFieldValue("screen"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${screen}.setup(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_background_color"] = function(block: Blockly.BlockSvg): string {
	const screen: string = Blockly.Python.nameDB_.getName(block.getFieldValue("screen"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${screen}.bgcolor(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_color_mode"] = function(block: Blockly.BlockSvg): string {
	const screen: string = Blockly.Python.nameDB_.getName(block.getFieldValue("screen"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${screen}.colormode(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_direction"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const direction: string = block.getFieldValue("direction");
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${turtle}.${direction}(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_circle"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${turtle}.circle(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_goto"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${turtle}.goto(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_shape"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const shape: string = block.getFieldValue("shape");
	const code: string = `${turtle}.shape("${shape}")\n`;
	return code;
};

Blockly.Python["turtle_width"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${turtle}.width(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_color"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${turtle}.color(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_pen_color"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${turtle}.pencolor(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_fill_color"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
	const code: string = `${turtle}.fillcolor(${parameters})\n`;
	return code;
};

Blockly.Python["turtle_fill"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const action: string = block.getFieldValue("action");
	const code: string = `${turtle}.${action}()\n`;
	return code;
};

Blockly.Python["turtle_pen_up_down"] = function(block: Blockly.BlockSvg): string {
	const turtle: string = Blockly.Python.nameDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
	const direction: string = block.getFieldValue("direction");
	const code: string = `${turtle}.pen${direction}()\n`;
	return code;
};