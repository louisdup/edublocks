export default function getGenerators(): void {
	Blockly.Python["minecraft_post_to_chat"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `mc.postToChat(${parameters})\n`;
		return code;
	};

	Blockly.Python["minecraft_get_player_pos"] = function(block: Blockly.BlockSvg): string {
		const playerPos: string = Blockly.Python.nameDB_.getName(block.getFieldValue("playerPos"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${playerPos} = mc.player.getPos()`;
		return code;
	};

	Blockly.Python["minecraft_set_player_pos"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `mc.player.setPos(${parameters})\n`;
		return code;
	};

	Blockly.Python["minecraft_set_camera_pos"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `mc.camera.setPos(${parameters})\n`;
		return code;
	};

	Blockly.Python["minecraft_get_block"] = function(block: Blockly.BlockSvg): string {
		const blockType: string = Blockly.Python.nameDB_.getName(block.getFieldValue("blockType"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${blockType} = mc.getBlock(${parameters})`;
		return code;
	};

	Blockly.Python["minecraft_set_block"] = function(block: Blockly.BlockSvg): string {
		const blockType: string = Blockly.Python.nameDB_.getName(block.getFieldValue("blockType"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${blockType} = mc.setBlock(${parameters})`;
		return code;
	};

	Blockly.Python["minecraft_set_camera"] = function(block: Blockly.BlockSvg): string {
		const setting: string = block.getFieldValue("setting");
		const code: string = `mc.camera.set${setting}()`;
		return code;
	};

	Blockly.Python["minecraft_set_blocks"] = function(block: Blockly.BlockSvg): string {
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `mc.setBlocks(${parameters})`;
		return code;
	};
}