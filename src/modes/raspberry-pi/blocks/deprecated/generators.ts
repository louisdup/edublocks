/* eslint-disable */

export default function getGenerators(): void {
	Blockly.Python['import_time'] = function(block: Blockly.BlockSvg) {
		const code = 'import time\n';
		return code;
	  };
	
	  Blockly.Python['import_signal'] = function(block: Blockly.BlockSvg) {
		const code = 'from signal import pause\n';
		return code;
	  };
	
	  Blockly.Python['pause_s'] = function(block: Blockly.BlockSvg) {
		const code = 'pause()\n';
		return code;
	  };
	
	  Blockly.Python['random'] = function(block: Blockly.BlockSvg) {
		const code = 'import random\n';
		return code; 
	  };
	
	  Blockly.Python['while_true'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return 'while True:\n' + branch;
	  };
	
	  Blockly.Python['pass'] = function(block: Blockly.BlockSvg) {
		const code = 'pass \n';
		return code;
	  };
	
	  Blockly.Python['if'] = function(block: Blockly.BlockSvg) {
		const text_const = block.getFieldValue('var');
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return 'if ' + text_const + ':\n' + branch;
	  };
	
	  Blockly.Python['class'] = function(block: Blockly.BlockSvg) {
		const text_const = Blockly.Python.valueToCode(block, 'class', 0);
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return 'class ' + text_const + ':\n' + branch;
	  };
	
	  Blockly.Python['varprint'] = function(block: Blockly.BlockSvg) {
		const text_const = Blockly.Python.valueToCode(block, 'var', 0);
		// TODO: Assemble Python into code variable.
		const code = 'print(' + text_const + ')\n';
		return code;
	  };
	
	  Blockly.Python['ifcroc'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_this = block.getFieldValue('this');
		const dropdown_crocsigns = block.getFieldValue('crocsigns');
		const text_that = block.getFieldValue('that');
		// const statements_name = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = 'if ' + text_this + ' ' + dropdown_crocsigns + ' ' + text_that + ':\n' + branch;
		return code;
	  };
	
	  Blockly.Python['varminus'] = function(block: Blockly.BlockSvg) {
		const text_1 = block.getFieldValue('1');
		const text_2 = block.getFieldValue('2');
		// TODO: Assemble Python into code variable.
		const code = text_1 + ' -= ' + text_2 + '\n';
		return code;
	  };
	
	  Blockly.Python['for'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_letter = Blockly.Python.valueToCode(block, 'letter', 0);
		const text_no = Blockly.Python.valueToCode(block, 'no', 0);
		// const statements_name = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = 'for ' + text_letter + ' in range(' + text_no + '):\n' + branch;
		return code;
	  };
	
	  Blockly.Python['advancedforloops'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_x = Blockly.Python.valueToCode(block, 'x', 0)
		const text_y = Blockly.Python.valueToCode(block, 'y', 0)
		// const statements_do = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = 'for ' + text_x + ' in ' + text_y + ':\n' + branch;
		return code;
	  };
	
	  Blockly.Python['ifequals'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_this = block.getFieldValue('this');
		const text_that = block.getFieldValue('that');
		// const statements_do = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = 'if ' + text_this + ' == ' + text_that + ':\n' + branch;
		return code;
	  };
	
	  Blockly.Python['importinputs'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'import inputs\n';
		return code;
	  };
	
	  Blockly.Python['return2'] = function(block: Blockly.BlockSvg) {
		const text_return = Blockly.Python.valueToCode(block, 'return', 0)
		// TODO: Assemble Python into code variable.
		const code = 'return ' + text_return + '\n';
		return code;
	  };
	
	  Blockly.Python['elif'] = function(block: Blockly.BlockSvg) {
		const text_const = block.getFieldValue('var');
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return 'elif ' + text_const + ':\n' + branch;
	  };
	
	  Blockly.Python['else'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return 'else:\n' + branch;
	  };
	
	  Blockly.Python['df'] = function(block: Blockly.BlockSvg) {
		const text_def = Blockly.Python.valueToCode(block, 'def', 0);
		const text_params = Blockly.Python.valueToCode(block, 'params', 0)
		const code = text_def + '(' + text_params + ')\n';
		return code;
	  };
	
	  Blockly.Python['whileout'] = function(block: Blockly.BlockSvg) {
		var text_1 = Blockly.Python.valueToCode(block, 'cond', 0);
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const code = 'while ' + text_1 + ':\n' + branch;
		return code;
	  };
	
	  Blockly.Python['time'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'import time\n';
		return code;
	  };
	
	  Blockly.Python['import_math'] = function(block: Blockly.BlockSvg) {
		const code = 'import math\n';
		return code;
	  };
	
	  Blockly.Python['import_audio'] = function(block: Blockly.BlockSvg) {
		const code = 'import audio\n';
		return code;
	  };
	
	  Blockly.Python['sleep'] = function(block: Blockly.BlockSvg) {
		const text_sleeptime = block.getFieldValue('sleep');
		const code = 'sleep(' + text_sleeptime + ')\n';
		return code;
	  };
	
	  Blockly.Python['print'] = function(block: Blockly.BlockSvg) {
		const text_print = Blockly.Python.valueToCode(block, 'print', 0)
		// TODO: Assemble Python into code variable.
		const code = 'print("' + text_print + '")\n';
		return code;
	  };
	
	  Blockly.Python['sleepnew'] = function(block: Blockly.BlockSvg) {
		var value_name = Blockly.Python.valueToCode(block, 'sleep', 0);
		// TODO: Assemble Python into code variable.
		var code = 'time.sleep(' +value_name+ ')\n';
		return code;
	  };
	
	  Blockly.Python['printnew'] = function(block: Blockly.BlockSvg) {
		var text_print = Blockly.Python.valueToCode(block, 'text', 0)
		|| 'Hello World';
		// TODO: Assemble Python into code variable.
		const code = 'print("' + text_print + '")\n';
		return code;
	  };
	
	  Blockly.Python['equalsblocknew'] = function(block: Blockly.BlockSvg) {
		var value_text1 = Blockly.Python.valueToCode(block, 'text1', 0);
		var value_text2 = Blockly.Python.valueToCode(block, 'text2', 0);
		// TODO: Assemble Python into code variable.
		var code = value_text1+ ' = ' +value_text2+ '\n';
		return code;
	  };
	
	  Blockly.Python['define'] = function(block: Blockly.BlockSvg) {
		const text_1 = Blockly.Python.valueToCode(block, '1', 0)
		const text_2 = Blockly.Python.valueToCode(block, '2', 0)
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		// const statements_name = Blockly.Python.statementToCode(block, 'NAME');
		// TODO: Assemble Python into code variable.
		const code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
		return code;
	  };
	
	  Blockly.Python['greater'] = function(block: Blockly.BlockSvg) {
		const text_1 = block.getFieldValue('1');
		const text_v = block.getFieldValue('v');
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		// TODO: Assemble Python into code variable.
		const code = 'while ' + text_1 + ' > ' + text_v + ':\n' + branch;
		return code;
	  };
	
	  Blockly.Python['buttonapressed'] = function(block: Blockly.BlockSvg) {
		const dropdown_name = block.getFieldValue('NAME');
		// TODO: Assemble Python into code variable.
		const code = 'button_' + dropdown_name + '.is_pressed()';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	  };
	
	  Blockly.Python['ifinline'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'ifstate');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, 'iftext', 0);
		const code = 'if ' + value_iftext + ':\n' + branch;
		return code;
	  };
	
	  Blockly.Python['typeanything'] = function(block: Blockly.BlockSvg) {
		var text_stuff = Blockly.Python.valueToCode(block, 'stuff', 0);
		// TODO: Assemble Python into code variable.
		var code = text_stuff + '# your own code\n';
		return code;
	  };
	
	  Blockly.Python['elifinline'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'ifstate');
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, 'iftext', 0);
		// const statements_ifstate = Blockly.Python.statementToCode(block, 'ifstate');
		// TODO: Assemble Python into code variable.
		const code = 'elif ' + value_iftext + ':\n' + branch;
		return code;
	  };
	 
	  Blockly.Python['internal'] = function(block: Blockly.BlockSvg) {
		var value_first = Blockly.Python.valueToCode(block, 'first', 0);
		var text_choose = block.getFieldValue('choose');
		var value_last = Blockly.Python.valueToCode(block, 'last', 0);
		// TODO: Assemble Python into code variable.
		var code = value_first+ ' ' +text_choose+ ' ' +value_last;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	  };
	  Blockly.Python['andor'] = Blockly.Python['internal'];
	
	  Blockly.Python['not'] = function(block: Blockly.BlockSvg) {
		var value_bool = Blockly.Python.valueToCode(block, 'bool', 0);
		const code = 'not ' +  value_bool;
		return [code, 0];
	  };
	
	  Blockly.Python['break'] = function(block: Blockly.BlockSvg) {
		const code = 'break\n ';
		return code;
	  };
	
	  Blockly.Python['textinline'] = function(block: Blockly.BlockSvg) {
		var text_text = block.getFieldValue('text');
		// TODO: Assemble Python into code variable.
		var code = text_text;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	  };
	
	  Blockly.Python['stringinline'] = function(block: Blockly.BlockSvg) {
		var text_text = block.getFieldValue('text');
		// TODO: Assemble Python into code variable.
		var code = '"' + text_text + '"';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	  };
	
	  Blockly.Python['sliderinline'] = function(block: Blockly.BlockSvg) {
		var text_text = block.getFieldValue('slider');
		// TODO: Assemble Python into code variable.
		var code = text_text;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	  };
	
	
	  Blockly.Python['varinlines'] = function(block: Blockly.BlockSvg) {
		var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
		var text_text = block.getFieldValue('NAME');
		var value_name = Blockly.Python.valueToCode(block, 'value', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_name + ' ' +text_text+ ' ' +value_name+ '\n';
		return code;
	  };
	
	  Blockly.Python['boolstatus'] = function(block: Blockly.BlockSvg) {
		var dropdown_bool = block.getFieldValue('bool');
		var code = dropdown_bool;
		return [code, 0];
	  };
	
	  Blockly.Python['variables_get'] = function(block: Blockly.BlockSvg) {
		var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		var code = variable_var;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	  };
	 
	  Blockly.Python['variables_set'] = function(block: Blockly.BlockSvg) {
		var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
		var text_text = block.getFieldValue('NAME');
		var value_name = Blockly.Python.valueToCode(block, 'varset', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_name + ' ' +text_text+ ' ' +value_name+ '\n';
		return code;
	  };

	  Blockly.Python['mcimport'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'from mcpi.minecraft import Minecraft \n';
		return code;
	  };
	
	  Blockly.Python['mccreate'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'mc = Minecraft.create() \n'; 
		return code;
	  };
	
	  Blockly.Python['import_block'] = function(block: Blockly.BlockSvg) {
		const code = 'from mcpi import block\n';
		return code;
	  };
	
	  Blockly.Python['mcpost'] = function(block: Blockly.BlockSvg) {
		var text_chat = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = 'mc.postToChat(' + text_chat + ')\n';
		return code;
	  };
	
	  Blockly.Python['mcpos'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'playerPos = mc.player.getPos() \n';
		return code;
	  };
	
	  Blockly.Python['setpos'] = function(block: Blockly.BlockSvg) {
		var text_x = Blockly.Python.valueToCode(block, 'text', 0);
		var text_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var text_z = Blockly.Python.valueToCode(block, 'text2', 0);
		// TODO: Assemble Python into code variable.
		const code = 'mc.player.setPos(' + text_x + ', ' + text_y + ', ' + text_z + ')\n\n';
		return code;
	  };
	
	  Blockly.Python['campos'] = function(block: Blockly.BlockSvg) {
		var number_x = Blockly.Python.valueToCode(block, 'text', 0);
		var number_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var number_z = Blockly.Python.valueToCode(block, 'text2', 0);
		// TODO: Assemble Python into code variable.
		const code = 'mc.camera.setPos(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
		return code;
	  };
	
	  Blockly.Python['getblock'] = function(block: Blockly.BlockSvg) {
		var number_x = Blockly.Python.valueToCode(block, 'text', 0);
		var number_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var number_z = Blockly.Python.valueToCode(block, 'text2', 0);
		// TODO: Assemble Python into code variable.
		const code = 'blockType = mc.getBlock(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
		return code;
	  };
	
	  Blockly.Python['cameraset'] = function(block: Blockly.BlockSvg) {
		const dropdown_drop = block.getFieldValue('drop');
		// TODO: Assemble Python into code variable.
		const code = 'mc.camera.set' + dropdown_drop + '()\n';
		return code;
	  };
	
	  Blockly.Python['setblock'] = function(block: Blockly.BlockSvg) {
		var number_x = Blockly.Python.valueToCode(block, 'text', 0);
		var number_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var number_z = Blockly.Python.valueToCode(block, 'text2', 0);
		var number_id = Blockly.Python.valueToCode(block, 'text3', 0);
		// TODO: Assemble Python into code variable.
		const code = 'blockType = mc.setBlock(' + number_x + ', ' + number_y + ', ' + number_z + ', ' + number_id + ')\n';
		return code;
	  };
	
	  Blockly.Python['mcvar'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'x, y, z = mc.player.getPos() \n';
		return code;
	  };
	
	  Blockly.Python['mctext'] = function(block: Blockly.BlockSvg) {
		var text_x = Blockly.Python.valueToCode(block, 'text', 0);
		var text_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var text_z = Blockly.Python.valueToCode(block, 'text2', 0);
		var number_id = Blockly.Python.valueToCode(block, 'text3', 0);
		// TODO: Assemble Python into code variable.
		const code = 'blockType = mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + number_id + ')\n';
		return code;
	  };
	
	  Blockly.Python['mcblocks'] = function(block: Blockly.BlockSvg) {
		var text_x = Blockly.Python.valueToCode(block, 'text', 0);
		var text_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var text_z = Blockly.Python.valueToCode(block, 'text2', 0);
		var text_q = Blockly.Python.valueToCode(block, 'text3', 0);
		var text_w = Blockly.Python.valueToCode(block, 'text4', 0);
		var text_e = Blockly.Python.valueToCode(block, 'text5', 0);
		var text_r = Blockly.Python.valueToCode(block, 'text6', 0);
		var text_t = Blockly.Python.valueToCode(block, 'text7', 0);
		var text_u = Blockly.Python.valueToCode(block, 'text8', 0);
		// TODO: Assemble Python into code variable.
		const code = 'mc.setBlocks(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_q + ', ' + text_w + ', ' + text_e + ', ' + text_r + ', ' + text_t + ', ' + text_u + ')\n';
		return code;
	  };
	
	  Blockly.Python['build'] = function(block: Blockly.BlockSvg) {
		var number_x = Blockly.Python.valueToCode(block, 'text', 0);
		var number_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var number_z = Blockly.Python.valueToCode(block, 'text2', 0);
		// TODO: Assemble Python into code variable.
		const code = 'buildPumpkin(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
		return code;
	  };
	
	  Blockly.Python['printwall'] = function(block: Blockly.BlockSvg) {
		const text_11 = block.getFieldValue('11');
		const text_12 = block.getFieldValue('12');
		const text_13 = block.getFieldValue('13');
		const text_14 = block.getFieldValue('14');
		const text_15 = block.getFieldValue('15');
		const text_16 = block.getFieldValue('16');
		const text_17 = block.getFieldValue('17');
		const text_18 = block.getFieldValue('18');
		const text_21 = block.getFieldValue('21');
		const text_22 = block.getFieldValue('22');
		const text_23 = block.getFieldValue('23');
		const text_24 = block.getFieldValue('24');
		const text_25 = block.getFieldValue('25');
		const text_26 = block.getFieldValue('26');
		const text_27 = block.getFieldValue('27');
		const text_28 = block.getFieldValue('28');
		const text_31 = block.getFieldValue('31');
		const text_32 = block.getFieldValue('32');
		const text_33 = block.getFieldValue('33');
		const text_34 = block.getFieldValue('34');
		const text_35 = block.getFieldValue('35');
		const text_36 = block.getFieldValue('36');
		const text_37 = block.getFieldValue('37');
		const text_38 = block.getFieldValue('38');
		const text_41 = block.getFieldValue('41');
		const text_42 = block.getFieldValue('42');
		const text_43 = block.getFieldValue('43');
		const text_44 = block.getFieldValue('44');
		const text_45 = block.getFieldValue('45');
		const text_46 = block.getFieldValue('46');
		const text_47 = block.getFieldValue('47');
		let text_48 = block.getFieldValue('48');
		let text_51 = block.getFieldValue('51');
		let text_52 = block.getFieldValue('52');
		let text_53 = block.getFieldValue('53');
		let text_54 = block.getFieldValue('54');
		let text_55 = block.getFieldValue('55');
		let text_56 = block.getFieldValue('56');
		let text_57 = block.getFieldValue('57');
		let text_58 = block.getFieldValue('58');
		let text_61 = block.getFieldValue('61');
		let text_62 = block.getFieldValue('62');
		let text_63 = block.getFieldValue('63');
		let text_64 = block.getFieldValue('64');
		let text_65 = block.getFieldValue('65');
		let text_66 = block.getFieldValue('66');
		let text_67 = block.getFieldValue('67');
		let text_68 = block.getFieldValue('68');
		let text_71 = block.getFieldValue('71');
		let text_72 = block.getFieldValue('72');
		let text_73 = block.getFieldValue('73');
		let text_74 = block.getFieldValue('74');
		let text_75 = block.getFieldValue('75');
		let text_76 = block.getFieldValue('76');
		let text_77 = block.getFieldValue('77');
		let text_78 = block.getFieldValue('78');
		let text_81 = block.getFieldValue('81');
		let text_82 = block.getFieldValue('82');
		let text_83 = block.getFieldValue('83');
		let text_84 = block.getFieldValue('84');
		let text_85 = block.getFieldValue('85');
		let text_86 = block.getFieldValue('86');
		let text_87 = block.getFieldValue('87');
		let text_88 = block.getFieldValue('88');
		// TODO: Assemble Python into code variable.
		let start = 'PrintWall(PixelArt(\n';
		let line1 = ' ' + text_11 + ', ' + text_12 + ', ' + text_13 + ', ' + text_14 + ', ' + text_15 + ', ' + text_16 + ', ' + text_17 + ', ' + text_18 + ', \n';
		let line2 = ' ' + text_21 + ', ' + text_22 + ', ' + text_23 + ', ' + text_24 + ', ' + text_25 + ', ' + text_26 + ', ' + text_27 + ', ' + text_28 + ', \n';
		let line3 = ' ' + text_31 + ', ' + text_32 + ', ' + text_33 + ', ' + text_34 + ', ' + text_35 + ', ' + text_36 + ', ' + text_37 + ', ' + text_38 + ', \n';
		let line4 = ' ' + text_41 + ', ' + text_42 + ', ' + text_43 + ', ' + text_44 + ', ' + text_45 + ', ' + text_46 + ', ' + text_47 + ', ' + text_48 + ', \n';
		let line5 = ' ' + text_51 + ', ' + text_52 + ', ' + text_53 + ', ' + text_54 + ', ' + text_55 + ', ' + text_56 + ', ' + text_57 + ', ' + text_58 + ', \n';
		let line6 = ' ' + text_61 + ', ' + text_62 + ', ' + text_63 + ', ' + text_64 + ', ' + text_65 + ', ' + text_66 + ', ' + text_67 + ', ' + text_68 + ', \n';
		let line7 = ' ' + text_71 + ', ' + text_72 + ', ' + text_73 + ', ' + text_74 + ', ' + text_75 + ', ' + text_76 + ', ' + text_77 + ', ' + text_78 + ', \n';
		let line8 = ' ' + text_81 + ', ' + text_82 + ', ' + text_83 + ', ' + text_84 + ', ' + text_85 + ', ' + text_86 + ', ' + text_87 + ', ' + text_88 + ', \n';
		let end = '))\n';
		let code = start + line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8 + end + '\n';
		return code;
	  };
	
	  Blockly.Python['mctext2'] = function(block: Blockly.BlockSvg) {
		var text_x = Blockly.Python.valueToCode(block, 'text', 0);
		var text_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var text_z = Blockly.Python.valueToCode(block, 'text2', 0);
		var text_i = Blockly.Python.valueToCode(block, 'text3', 0);
		// TODO: Assemble Python into code variable.
		let code = 'mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_i + ')\n';
		return code;
	  };
	
	  Blockly.Python['mctext5'] = function(block: Blockly.BlockSvg) {
		var text_x = Blockly.Python.valueToCode(block, 'text', 0);
		var text_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var text_z = Blockly.Python.valueToCode(block, 'text2', 0);
		var text_p = Blockly.Python.valueToCode(block, 'text3', 0);
		var text_i = Blockly.Python.valueToCode(block, 'text4', 0);
		// TODO: Assemble Python into code variable.
		let code = 'mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_p + ', ' + text_i + ')\n';
		return code;
	  };
	
	  Blockly.Python['mcblocks8'] = function(block: Blockly.BlockSvg) {
		var text_x = Blockly.Python.valueToCode(block, 'text', 0);
		var text_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var text_z = Blockly.Python.valueToCode(block, 'text2', 0);
		var text_q = Blockly.Python.valueToCode(block, 'text3', 0);
		var text_w = Blockly.Python.valueToCode(block, 'text4', 0);
		var text_e = Blockly.Python.valueToCode(block, 'text5', 0);
		var text_r = Blockly.Python.valueToCode(block, 'text6', 0);
		var text_t = Blockly.Python.valueToCode(block, 'text7', 0);
	
		// TODO: Assemble Python into code variable.
		let code = 'mc.setBlocks(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_q + ', ' + text_w + ', ' + text_e + ', ' + text_r + ', ' + text_t + ')\n';
		return code;
	  };
	
	  Blockly.Python['return'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		let code = 'return math.sqrt((xd*xd) + (yd*yd) + (zd*zd))\n';
		return code;
	  };
	
	  Blockly.Python['getdist'] = function(block: Blockly.BlockSvg) {
		var number_x = Blockly.Python.valueToCode(block, 'text', 0);
		var number_y = Blockly.Python.valueToCode(block, 'text1', 0);
		var number_z = Blockly.Python.valueToCode(block, 'text2', 0);
		// TODO: Assemble Python into code variable.
		let code = 'distance_to_player(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
		return code;
	  };
	
	  Blockly.Python['mcpiblockas'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		let code = 'import mcpi.block as block\n';
		return code;
	  };
	
	  Blockly.Python['defcall'] = function(block: Blockly.BlockSvg) {
		var text_fname = Blockly.Python.valueToCode(block, 'text', 0);
		var text_extra = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		let code = text_fname + '(' + text_extra + ')\n';
		return code;
	  };

	  Blockly.Python['importgpiozero'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'from gpiozero import *\n';
		return code;
	  };
	
	  Blockly.Python['importtime'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable. 
		const code = 'from datetime import time\n';
		return code;
	  };
	
	  Blockly.Python['buttonset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = Button(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['lineset'] = function(block: Blockly.BlockSvg) {
		var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_sensor + ' = LineSensor(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['motionset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = MotionSensor(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['lightset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = LightSensor(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['distanceset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = DistanceSensor(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['ledset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = LED(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['pledset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = PWMLED(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['rgbledset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = RGBLED(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['buzzerset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = Buzzer(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['motorset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = Motor(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['servoset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = Servo(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['angset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = AngularServo(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['ledbset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = LEDBoard(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['graphset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('graph'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = LEDBarGraph(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['buttonbset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buttonb'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = ButtonBoard(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['buttonaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['lineaction'] = function(block: Blockly.BlockSvg) {
		var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
		var dropdown_action = block.getFieldValue('action');
		var text_sense = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_sensor + '.' + dropdown_action + '(' + text_sense + ')\n';
		return code;
	  };
	
	  Blockly.Python['motionaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['lightaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['distanceaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['ledaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['pledaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['rgbledaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['buzzeraction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['motoraction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['servoaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['angaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['ledbaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['graphaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('graph'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['buttonbaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buttonb'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['buttonvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['motionvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['lineaction'] = function(block: Blockly.BlockSvg) {
		var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
		var text_first = block.getFieldValue('first');
		var text_second = block.getFieldValue('second');
		// TODO: Assemble Python into code variable.
		var code = variable_sensor + '.' + text_first + ' = ' + text_second + '\n';
		return code;
	  };
	
	
	  Blockly.Python['lightvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['distancevar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['ledvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['pledvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['rgbledvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['buzzervar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['motorvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['servovar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['angvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['ledbvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['graphvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('graph'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['buttonbvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buttonb'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['trafficset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('traffic'), Blockly.Variables.NAME_TYPE);
		var text_pin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = TrafficLights(' + text_pin + ')\n';
		return code;
	  };
	
	  Blockly.Python['trafficaction'] = function(block: Blockly.BlockSvg) {
		var variable_traffic = Blockly.Python.variableDB_.getName(block.getFieldValue('traffic'), Blockly.Variables.NAME_TYPE);
		var dropdown_colour = block.getFieldValue('colour');
		var dropdown_action = block.getFieldValue('action');
		// TODO: Assemble Python into code variable.
		var code = variable_traffic + '.' + dropdown_colour + '.' + dropdown_action + '()\n';
		return code;
	  };
	
	  Blockly.Python['trafficvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('traffic'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	
	  Blockly.Python['pingset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('server'), Blockly.Variables.NAME_TYPE);
		var text_num = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = PingServer(' + text_num + ')\n';
		return code;
	  };
	
	  Blockly.Python['cpuset'] = function(block: Blockly.BlockSvg) {
		var variable_cpu = Blockly.Python.variableDB_.getName(block.getFieldValue('cpu'), Blockly.Variables.NAME_TYPE);
		var text_num = Blockly.Python.valueToCode(block, 'text', 0);
		var text_num2 = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_cpu + ' = CPUTemprature(min_temp(' + text_num + '), max_temp(' + text_num2 + '))...\n';
		return code;
	  };
	
	  Blockly.Python['adc'] = function(block: Blockly.BlockSvg) {
		var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
		var dropdown_name = block.getFieldValue('NAME');
		var text_channel = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_var + ' = ' + dropdown_name + '(' + text_channel + ')\n';
		return code;
	  };
	
	  Blockly.Python['energenieset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('lamp'), Blockly.Variables.NAME_TYPE);
		var text_num = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = Energenie(' + text_num + ')\n';
		return code;
	  };
	
	  Blockly.Python['energenieaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('lamp'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['energenievar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('lamp'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['camjamset'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('camjam'), Blockly.Variables.NAME_TYPE);
	
		// TODO: Assemble Python into code variable.
		const code = variable_name + ' = CamJamKitRobot()\n';
		return code;
	  };
	
	  Blockly.Python['camjamaction'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('camjam'), Blockly.Variables.NAME_TYPE);
		const dropdown_action = block.getFieldValue('action');
		var text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['camjamvar'] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('camjam'), Blockly.Variables.NAME_TYPE);
		var text_action = Blockly.Python.valueToCode(block, 'text', 0);
		var text_act = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
		return code;
	  };
	
	  Blockly.Python['timeset'] = function(block: Blockly.BlockSvg) {
		var variable_morning = Blockly.Python.variableDB_.getName(block.getFieldValue('morning'), Blockly.Variables.NAME_TYPE);
		var text_num = Blockly.Python.valueToCode(block, 'text', 0);
		var text_num2 = Blockly.Python.valueToCode(block, 'text1', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_morning + ' = TimeOfDay(Time(' + text_num + '), Time(' + text_num2 + '))\n';
		return code;
	  };

	  Blockly.Python['import_sonic'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		let code = 'from psonic import *\n';
		return code;
	  };
	
	  Blockly.Python['sampleson'] = function(block: Blockly.BlockSvg) {
		var text_name = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'sample(' + text_name + ')\n';
		return code;
	  };
	
	  Blockly.Python['synth'] = function(block: Blockly.BlockSvg) {
		var text_name = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'use_synth(' + text_name + ')\n';
		return code;
	  };
	
	  Blockly.Python['play'] = function(block: Blockly.BlockSvg) {
		var text_value = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'play(' + text_value + ')\n';
		return code;
	  };
	
	  Blockly.Python['sleep1'] = function(block: Blockly.BlockSvg) {
		var text_value = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'sleep(' + text_value + ')\n';
		return code;
	  };
	
	  Blockly.Python['liveloop'] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, 'DO');
		branch = Blockly.Python.addLoopTrap(branch, block.id) ||
		  Blockly.Python.PASS;
		const dropdown_num = block.getFieldValue('num');
		// TODO: Assemble Python into code variable.
		let code = '\ndef live_loop_' + dropdown_num + '():\n' + branch;
		code = code + '\nlive_thread_' + dropdown_num + '.start()\n';
		return code;
	  };

	  Blockly.Python['ehimport'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		let code = 'import explorerhat\n';
		return code;
	  };
	
	  Blockly.Python['ehtouch'] = function(block: Blockly.BlockSvg) {
		let dropdown_padnumber = block.getFieldValue('padnumber');
		let dropdown_event = block.getFieldValue('event');
		let text_bracket = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'explorerhat.touch.' + dropdown_padnumber + '.' + dropdown_event + '(' + text_bracket + ')\n';
		return code;
	  };
	
	  Blockly.Python['ehinput'] = function(block: Blockly.BlockSvg) {
		let dropdown_inputnumber = block.getFieldValue('inputnumber');
		let dropdown_inputevent = block.getFieldValue('inputevent');
		let text_bracketin = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'explorerhat.input.' + dropdown_inputnumber + '.' + dropdown_inputevent + '(' + text_bracketin + ')\n';
		return code;
	  };
	
	  Blockly.Python['ehoutput'] = function(block: Blockly.BlockSvg) {
		let dropdown_outputnumber = block.getFieldValue('outputnumber');
		let dropdown_outputevent = block.getFieldValue('outputevent');
		let text_bracketout = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'explorerhat.output.' + dropdown_outputnumber + '.' + dropdown_outputevent + '(' + text_bracketout + ')\n';
		return code;
	  };
	
	  Blockly.Python['ehlights'] = function(block: Blockly.BlockSvg) {
		let dropdown_lightnumber = block.getFieldValue('lightnumber');
		let dropdown_lightevent = block.getFieldValue('lightevent');
		let text_bracketlight = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'explorerhat.light.' + dropdown_lightnumber + '.' + dropdown_lightevent + '(' + text_bracketlight + ')\n';
		return code;
	  };
	
	  Blockly.Python['ehanalog'] = function(block: Blockly.BlockSvg) {
		let dropdown_analognumber = block.getFieldValue('analognumber');
		let dropdown_analogevent = block.getFieldValue('analogevent');
		let text_bracketanalog = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'explorerhat.analog.' + dropdown_analognumber + '.' + dropdown_analogevent + '(' + text_bracketanalog + ')\n';
		return code;
	  };
	
	  Blockly.Python['ehmotor'] = function(block: Blockly.BlockSvg) {
		let dropdown_motornumber = block.getFieldValue('motornumber');
		let dropdown_motorevent = block.getFieldValue('motorevent');
		let text_bracketmotor = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'explorerhat.motor.' + dropdown_motornumber + '.' + dropdown_motorevent + '(' + text_bracketmotor + ')\n';
		return code;
	  };
	
	  Blockly.Python['blinktimport'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		let code = 'from blinkt import *\n';
		return code;
	  };
	
	  Blockly.Python['blinktsetpixel'] = function(block: Blockly.BlockSvg) {
		let text_pixelno = Blockly.Python.valueToCode(block, 'text', 0);
		let text_r = Blockly.Python.valueToCode(block, 'text1', 0);
		let text_g = Blockly.Python.valueToCode(block, 'text2', 0);
		let text_b = Blockly.Python.valueToCode(block, 'text3', 0);
		// TODO: Assemble Python into code variable.
		let code = 'set_pixel(' + text_pixelno + ', ' + text_r + ', ' + text_g + ', ' + text_b + ')\n';
		return code;
	  };
	
	  Blockly.Python['blinktshow'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		let code = 'show()\n';
		return code;
	  };
	
	  Blockly.Python['blinktsetbrightness'] = function(block: Blockly.BlockSvg) {
		let text_number = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		let code = 'set_brightness(' + text_number + ')\n';
		return code;
	  };
	
	  Blockly.Python['blinktsetall'] = function(block: Blockly.BlockSvg) {
		let text_r = Blockly.Python.valueToCode(block, 'text', 0);
		let text_g = Blockly.Python.valueToCode(block, 'text1', 0);
		let text_b = Blockly.Python.valueToCode(block, 'text2', 0);
		// TODO: Assemble Python into code variable.
		let code = 'set_all(' + text_r + ', ' + text_g + ', ' + text_b + ')\n';
		return code;
	  };
	
	  Blockly.Python['blinktsetallbright'] = function(block: Blockly.BlockSvg) {
		// let text_pixelno = block.getFieldValue('pixelno');
		let text_r = Blockly.Python.valueToCode(block, 'text', 0);
		let text_g = Blockly.Python.valueToCode(block, 'text1', 0);;
		let text_b = Blockly.Python.valueToCode(block, 'text2', 0);
		let text_bright = Blockly.Python.valueToCode(block, 'text3', 0);
		// TODO: Assemble Python into code variable.
		let code = 'set_all(' + text_r + ', ' + text_g + ', ' + text_b + ',' + text_bright + ')\n';
		return code;
	  };
	
	  Blockly.Python['blinktclear'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		let code = 'clear()\n';
		return code;
	  };

	  Blockly.Python['import_requests'] = function(block: Blockly.BlockSvg) {
		let code = 'import requests \n';
		return code;
	  };
	
	  Blockly.Python['import_json'] = function(block: Blockly.BlockSvg) {
		let code = 'import json \n';
		return code;
	  };
	
	  Blockly.Python['requests_get'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + ' = requests.get(' + value_text + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_post'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + ' = requests.post(' + value_text + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_put'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + ' = requests.put(' + value_text + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_delete'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + ' = requests.delete(' + value_text + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_head'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + ' = requests.head(' + value_text + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_options'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + ' = requests.options(' + value_text + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_url'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var dropdown_name = block.getFieldValue('NAME');
		// TODO: Assemble Python into code variable.
		var code = variable_r + '.' + dropdown_name;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	  };
	
	
	  Blockly.Python['requests_cookies'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + '.cookies[' + value_text + ']\n';
		return code;
	  };
	
	  Blockly.Python['requests_rjar'] = function(block: Blockly.BlockSvg) {
		var variable_jar = Blockly.Python.variableDB_.getName(block.getFieldValue('jar'), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		var code = variable_jar + ' = requests.cookies.RequestsCookieJar()\n';
		return code;
	  };
	
	  Blockly.Python['requests_jset'] = function(block: Blockly.BlockSvg) {
		var variable_jar = Blockly.Python.variableDB_.getName(block.getFieldValue('jar'), Blockly.Variables.NAME_TYPE);
		var value_name = Blockly.Python.valueToCode(block, 'NAME', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_jar + '.set(' + value_name + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_hget'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		var value_name = Blockly.Python.valueToCode(block, 'NAME', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_r + '.headers.get(' + value_name + ')\n';
		return code;
	  };
	
	  Blockly.Python['requests_raise'] = function(block: Blockly.BlockSvg) {
		var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		var code = variable_r + '.raise_for_status()\n';
		return code;
	  };
	
	  Blockly.Python['senseinit'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'sense = SenseHat()\n';
		return code;
	  };
	
	  Blockly.Python['senseshow'] = function(block: Blockly.BlockSvg) {
		const text_text = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = 'sense.show_message("' + text_text + '")\n';
		return code;
	  };
	
	  Blockly.Python['senseshowvar'] = function(block: Blockly.BlockSvg) {
		const text_varname = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		const code = 'sense.show_message(' + text_varname + ')\n\n';
		return code;
	  };
	
	  Blockly.Python['senseimport'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'from sense_hat import SenseHat\n';
		return code;
	  };
	
	  Blockly.Python['senseimportemu'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = 'from sense_emu import SenseHat\n';
		return code;
	  };

	  Blockly.Python['importmb'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		var code = 'import microbit\n';
		return code;
	  };
	
	  Blockly.Python['displayscrolltext'] = function(block: Blockly.BlockSvg) {
		var text_message = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = 'microbit.display.scroll("' + text_message + '")\n';
		return code;
	  };
	
	  Blockly.Python['displayscrollvar'] = function(block: Blockly.BlockSvg) {
		var text_varmess = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = 'microbit.display.scroll(' + text_varmess + ')\n';
		return code;
	  };
	
	  Blockly.Python['microsleep'] = function(block: Blockly.BlockSvg) {
		var text_time = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = 'microbit.sleep(' + text_time + ')\n';
		return code;
	  };
	
	  Blockly.Python['displayshow'] = function(block: Blockly.BlockSvg) {
		var text_show = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = 'microbit.display.show(' + text_show + ')\n';
		return code;
	  };
	
	  Blockly.Python['displayclear'] = function(block: Blockly.BlockSvg) {
		// var text_show = block.getFieldValue('show');
		// TODO: Assemble Python into code variable.
		var code = 'microbit.display.clear()\n';
		return code;
	  };

	  Blockly.Python['import_turtle'] = function(block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		var code = 'from turtle import *\n';
		return code;
	  }; 
	
	  Blockly.Python['turtle'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+ ' = Turtle()\n';
		return code;
	  };
	  
	  Blockly.Python['screeninit'] = function(block: Blockly.BlockSvg) {
		var variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		var code = variable_wn+ ' = Screen()\n';
		return code;
	  };
	
	  Blockly.Python['background'] = function(block: Blockly.BlockSvg) {
		var variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
		let text_color = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_wn+ '.bgcolor(' +text_color+ ')\n';
		return code;
	  };
	
	  Blockly.Python['directions'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		var dropdown_options = block.getFieldValue('options');
		let text_dist = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+ '.' +dropdown_options+ '(' +text_dist+ ')\n';
		return code;
	  };
	
	  Blockly.Python['penud'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		var dropdown_options = block.getFieldValue('options');
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+ '.pen' +dropdown_options+ '()\n';
		return code;
	  };
	
	  Blockly.Python['pen'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+'.Pen()\n';
		return code;
	  };
	
	  Blockly.Python['colourpen'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		let text_dist = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+'.pencolor(' +text_dist+ ')\n';
		return code;
	  };
	
	  Blockly.Python['colour'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		let text_dist = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+'.color(' +text_dist+ ')\n';
		return code;
	  };
	
	  Blockly.Python['colourmode'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
		let text_dist = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+'.colormode(' +text_dist+ ')\n';
		return code;
	  };
	
	  Blockly.Python['penwidth'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		let text_dist = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+'.width(' +text_dist+ ')\n';
		return code;
	  };
	
	  Blockly.Python['circle'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		let text_dist = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+'.circle(' +text_dist+ ')\n';
		return code;
	  };
	
	  Blockly.Python['goto'] = function(block: Blockly.BlockSvg) {
		var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
		let text_dist = Blockly.Python.valueToCode(block, 'text', 0);
		// TODO: Assemble Python into code variable.
		var code = variable_turtle+'.goto(' +text_dist+ ')\n';
		return code;
	  };
}