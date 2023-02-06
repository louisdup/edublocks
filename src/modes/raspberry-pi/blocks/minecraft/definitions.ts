const minecraftColor: string = "#49B04D";

export default function getDefinitions(): void {
	Blockly.Blocks["minecraft_post_to_chat"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("mc.postToChat(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(minecraftColor);
		}
	};

	Blockly.Blocks["minecraft_get_player_pos"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("playerPos"), "playerPos")
				.appendField("= mc.player.getPos()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(minecraftColor);
		}
	};	
	
	Blockly.Blocks["minecraft_set_player_pos"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.player.setPos(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(minecraftColor);
		}
	};	  

	Blockly.Blocks["minecraft_set_camera_pos"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.camera.setPos(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(minecraftColor);
		}
	};	  

	Blockly.Blocks["minecraft_get_block"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("blockType"), "blockType")
			  .appendField(" = mc.getBlock(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(minecraftColor);
		}
	  };

	Blockly.Blocks["minecraft_set_block"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("blockType"), "blockType")
			  .appendField(" = mc.setBlock(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(minecraftColor);
		}
	  };

	  Blockly.Blocks["minecraft_set_camera"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("mc.camera.set")
			  .appendField(new Blockly.FieldDropdown([["Fixed","Fixed"], ["Normal","Normal"]]), "setting")
			  .appendField("()");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(minecraftColor);
		}
	  };	  

	  Blockly.Blocks["minecraft_set_blocks"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField("mc.setBlocks(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(minecraftColor);
		}
	  };
}