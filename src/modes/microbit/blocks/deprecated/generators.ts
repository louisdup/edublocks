/* eslint-disable */

export default function getGenerators(): void {
	Blockly.Python["import_microbit"] = function (block: Blockly.BlockSvg) {
		const code = "from microbit import *\n";
		return code;
	};

	Blockly.Python["import_signal"] = function (block: Blockly.BlockSvg) {
		const code = "from signal import pause\n";
		return code;
	};

	Blockly.Python["import_utime"] = function (block: Blockly.BlockSvg) {
		const code = "import utime\n";
		return code;
	};

	Blockly.Python["comma"] = function(block: Blockly.BlockSvg) {
		const value_in1 = Blockly.Python.valueToCode(block, "in1", 0);
		const dropdown_commadd = block.getFieldValue("commadd");
		const value_in2 = Blockly.Python.valueToCode(block, "in2", 0);
		const code = value_in1 + dropdown_commadd + value_in2;
		return [code, 0];
	};

	Blockly.Python["pause_s"] = function (block: Blockly.BlockSvg) {
		const code = "pause()\n";
		return code;
	};

	Blockly.Python["random"] = function (block: Blockly.BlockSvg) {
		const code = "import random\n";
		return code;
	};

	Blockly.Python["while_true"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "while True:\n" + branch;
	};

	Blockly.Python["pass"] = function (block: Blockly.BlockSvg) {
		const code = "pass \n";
		return code;
	};

	Blockly.Python["if"] = function (block: Blockly.BlockSvg) {
		const text_const = block.getFieldValue("var");
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "if " + text_const + ":\n" + branch;
	};

	Blockly.Python["class"] = function (block: Blockly.BlockSvg) {
		const text_const = Blockly.Python.valueToCode(block, "class", 0);
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "class " + text_const + ":\n" + branch;
	};

	Blockly.Python["varprint"] = function (block: Blockly.BlockSvg) {
		const text_const = Blockly.Python.valueToCode(block, "var", 0);
		// TODO: Assemble Python into code variable.
		const code = "print(" + text_const + ")\n";
		return code;
	};

	Blockly.Python["ifcroc"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_this = block.getFieldValue("this");
		const dropdown_crocsigns = block.getFieldValue("crocsigns");
		const text_that = block.getFieldValue("that");
		// const statements_name = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = "if " + text_this + " " + dropdown_crocsigns + " " + text_that + ":\n" + branch;
		return code;
	};

	Blockly.Python["varminus"] = function (block: Blockly.BlockSvg) {
		const text_1 = block.getFieldValue("1");
		const text_2 = block.getFieldValue("2");
		// TODO: Assemble Python into code variable.
		const code = text_1 + " -= " + text_2 + "\n";
		return code;
	};

	Blockly.Python["for"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_letter = Blockly.Python.valueToCode(block, "letter", 0);
		const text_no = Blockly.Python.valueToCode(block, "no", 0);
		// const statements_name = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = "for " + text_letter + " in range(" + text_no + "):\n" + branch;
		return code;
	};

	Blockly.Python["advancedforloops"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_x = Blockly.Python.valueToCode(block, "x", 0);
		const text_y = Blockly.Python.valueToCode(block, "y", 0);
		// const statements_do = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = "for " + text_x + " in " + text_y + ":\n" + branch;
		return code;
	};

	Blockly.Python["ifequals"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_this = block.getFieldValue("this");
		const text_that = block.getFieldValue("that");
		// const statements_do = Blockly.Python.statementToCode(block, 'DO');
		// TODO: Assemble Python into code variable.
		const code = "if " + text_this + " == " + text_that + ":\n" + branch;
		return code;
	};

	Blockly.Python["importinputs"] = function (block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = "import inputs\n";
		return code;
	};

	Blockly.Python["return2"] = function (block: Blockly.BlockSvg) {
		const text_return = Blockly.Python.valueToCode(block, "return", 0);
		// TODO: Assemble Python into code variable.
		const code = "return " + text_return + "\n";
		return code;
	};

	Blockly.Python["elif"] = function (block: Blockly.BlockSvg) {
		const text_const = block.getFieldValue("var");
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "elif " + text_const + ":\n" + branch;
	};

	Blockly.Python["else"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "else:\n" + branch;
	};

	Blockly.Python["df"] = function (block: Blockly.BlockSvg) {
		const text_def = Blockly.Python.valueToCode(block, "def", 0);
		const text_params = Blockly.Python.valueToCode(block, "params", 0);
		const code = text_def + "(" + text_params + ")\n";
		return code;
	};

	Blockly.Python["whileout"] = function (block: Blockly.BlockSvg) {
		const text_1 = Blockly.Python.valueToCode(block, "cond", 0);
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const code = "while " + text_1 + ":\n" + branch;
		return code;
	};

	Blockly.Python["time"] = function (block: Blockly.BlockSvg) {
		// TODO: Assemble Python into code variable.
		const code = "import time\n";
		return code;
	};

	Blockly.Python["import_math"] = function (block: Blockly.BlockSvg) {
		const code = "import math\n";
		return code;
	};

	Blockly.Python["import_audio"] = function (block: Blockly.BlockSvg) {
		const code = "import audio\n";
		return code;
	};

	Blockly.Python["sleep"] = function (block: Blockly.BlockSvg) {
		const text_sleeptime = block.getFieldValue("sleep");
		const code = "sleep(" + text_sleeptime + ")\n";
		return code;
	};

	Blockly.Python["print"] = function (block: Blockly.BlockSvg) {
		const text_print = Blockly.Python.valueToCode(block, "print", 0);
		// TODO: Assemble Python into code variable.
		const code = "print(\"" + text_print + "\")\n";
		return code;
	};

	Blockly.Python["sleepnew"] = function(block: Blockly.BlockSvg) {
		const value_name = Blockly.Python.valueToCode(block, "sleep", 0);
		// TODO: Assemble Python into code variable.
		const code = "sleep(" +value_name+ ")\n";
		return code;
	};

	Blockly.Python["sleepus"] = function(block: Blockly.BlockSvg) {
		const value_name = Blockly.Python.valueToCode(block, "sleep", 0);
		// TODO: Assemble Python into code variable.
		const code = "utime.sleep_us(" +value_name+ ")\n";
		return code;
	};

	Blockly.Python["printnew"] = function (block: Blockly.BlockSvg) {
		const text_print = Blockly.Python.valueToCode(block, "text", 0)
|| "Hello World";
		// TODO: Assemble Python into code variable.
		const code = "print(\"" + text_print + "\")\n";
		return code;
	};

	Blockly.Python["equalsblocknew"] = function(block: Blockly.BlockSvg) {
		const value_text1 = Blockly.Python.valueToCode(block, "text1", 0);
		const value_text2 = Blockly.Python.valueToCode(block, "text2", 0);
		// TODO: Assemble Python into code variable.
		const code = value_text1+ " = " +value_text2+ "\n";
		return code;
	};

	Blockly.Python["define"] = function (block: Blockly.BlockSvg) {
		const text_1 = Blockly.Python.valueToCode(block, "1", 0);
		const text_2 = Blockly.Python.valueToCode(block, "2", 0);
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		// const statements_name = Blockly.Python.statementToCode(block, 'NAME');
		// TODO: Assemble Python into code variable.
		const code = "def " + text_1 + "(" + text_2 + "):\n" + branch;
		return code;
	};

	Blockly.Python["greater"] = function (block: Blockly.BlockSvg) {
		const text_1 = block.getFieldValue("1");
		const text_v = block.getFieldValue("v");
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		// TODO: Assemble Python into code variable.
		const code = "while " + text_1 + " > " + text_v + ":\n" + branch;
		return code;
	};

	Blockly.Python["buttonapressed"] = function (block: Blockly.BlockSvg) {
		const dropdown_name = block.getFieldValue("NAME");
		// TODO: Assemble Python into code variable.
		const code = "button_" + dropdown_name + ".is_pressed()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["ifinline"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "ifstate");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, "iftext", 0);
		const code = "if " + value_iftext + ":\n" + branch;
		return code;
	};

	Blockly.Python["typeanything"] = function(block: Blockly.BlockSvg) {
		const text_stuff = Blockly.Python.valueToCode(block, "stuff", 0);
		// TODO: Assemble Python into code variable.
		const code = text_stuff + "# your own code\n";
		return code;
	};

	Blockly.Python["elifinline"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "ifstate");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, "iftext", 0);
		// const statements_ifstate = Blockly.Python.statementToCode(block, 'ifstate');
		// TODO: Assemble Python into code variable.
		const code = "elif " + value_iftext + ":\n" + branch;
		return code;
	};

	Blockly.Python["internal"] = function(block: Blockly.BlockSvg) {
		const value_first = Blockly.Python.valueToCode(block, "first", 0);
		const text_choose = block.getFieldValue("choose");
		const value_last = Blockly.Python.valueToCode(block, "last", 0);
		// TODO: Assemble Python into code variable.
		const code = value_first+ " " +text_choose+ " " +value_last;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};
	Blockly.Python["andor"] = Blockly.Python["internal"];

	Blockly.Python["not"] = function (block: Blockly.BlockSvg) {
		const value_bool = Blockly.Python.valueToCode(block, "bool", 0);
		const code = "not " + value_bool;
		return [code, 0];
	};

	Blockly.Python["operators3"] = function(block: Blockly.BlockSvg) {
		const value_first = Blockly.Python.valueToCode(block, "first", 0);
		const text_choose = block.getFieldValue("operators");
		const value_last = Blockly.Python.valueToCode(block, "last", 0);
		// TODO: Assemble Python into code variable.
		const code = value_first+ " " +text_choose+ " " +value_last;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["mbint"] = function (block: Blockly.BlockSvg) {
		const value_bool = Blockly.Python.valueToCode(block, "bool", 0);
		const code = "int(" + value_bool+ ")";
		return [code, 0];
	};

	Blockly.Python["ticks"] = function (block: Blockly.BlockSvg) {
		const code = "utime.ticks_us()";
		return [code, 0];
	};

	Blockly.Python["break"] = function (block: Blockly.BlockSvg) {
		const code = "break\n ";
		return code;
	};

	Blockly.Python["textinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("text");
		// TODO: Assemble Python into code variable.
		const code = text_text;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["stringinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("text");
		// TODO: Assemble Python into code variable.
		const code = "\"" + text_text + "\"";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["sliderinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("slider");
		// TODO: Assemble Python into code variable.
		const code = text_text;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["varinlines"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("var"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_text = block.getFieldValue("NAME");
		const value_name = Blockly.Python.valueToCode(block, "value", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + " " +text_text+ " " +value_name+ "\n";
		return code;
	};

	Blockly.Python["boolstatus"] = function(block: Blockly.BlockSvg) {
		const dropdown_bool = block.getFieldValue("bool");
		const code = dropdown_bool;
		return [code, 0];
	};

	Blockly.Python["variables_get"] = function(block: Blockly.BlockSvg) {
		const variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		// TODO: Assemble Python into code variable.
		const code = variable_var;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["variables_set"] = function(block: Blockly.BlockSvg) {
		const variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_name = Blockly.Python.valueToCode(block, "varset", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_var+ " = " +value_name+ "\n";
		return code;
	};

	Blockly.Python["variables_get"] = function(block: Blockly.BlockSvg) {
		const variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		// TODO: Assemble Python into code variable.
		const code = variable_var;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["variables_set"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_text = block.getFieldValue("NAME");
		const value_name = Blockly.Python.valueToCode(block, "varset", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + " " +text_text+ " " +value_name+ "\n";
		return code;
	};

	Blockly.Python["scrollnew"] = function (block: Blockly.BlockSvg) {
		const text_message = Blockly.Python.valueToCode(block, "displaytext", 0)
	|| "True";
		const code = "display.scroll(\"" + text_message + "\") \n";
		return code; 
	};

	// deprecated

	Blockly.Python["scroll"] = function (block: Blockly.BlockSvg) {
		const text_message = Blockly.Python.valueToCode(block, "displaytext", 0)
	|| "True";
		const code = "display.scroll(\"" + text_message + "\") \n";
		return code; 
	};

	Blockly.Python["scrollvar"] = function (block: Blockly.BlockSvg) {
		const text_message = block.getFieldValue("message");
		const code = "display.scroll(" + text_message + ") \n";
		return code;
	};

	Blockly.Python["scrollvarnew"] = function (block: Blockly.BlockSvg) {
		const text_message = Blockly.Python.valueToCode(block, "displaytextvar", 0)
	|| "0";
		const code = "display.scroll(" + text_message + ") \n";
		return code; 
	};

	Blockly.Python["image"] = function (block: Blockly.BlockSvg) {
		const text_image = block.getFieldValue("image");
		const code = "display.show(" + text_image + ") \n";
		return code;
	};

	Blockly.Python["imagenew"] = function (block: Blockly.BlockSvg) {
		const text_message = Blockly.Python.valueToCode(block, "imagevar", 0)
	|| "Image.HAPPY";
		const code = "display.show(" + text_message + ") \n";
		return code; 
	};

	Blockly.Python["getpixel"] = function (block: Blockly.BlockSvg) {
		const text_xy = block.getFieldValue("xy");
		const code = "display.get_pixel(" + text_xy + ") \n";
		return code;
	};

	Blockly.Python["getpixelnew"] = function (block: Blockly.BlockSvg) {
		const text_xy = Blockly.Python.valueToCode(block, "text", 0)
	|| "0";
		const code = "display.get_pixel(" + text_xy + ") \n";
		return code;
	};

	Blockly.Python["setpixel"] = function (block: Blockly.BlockSvg) {
		const text_setpix = block.getFieldValue("setpix");
		const code = "display.set_pixel(" + text_setpix + ") \n";
		return code;
	};

	Blockly.Python["setpixelnew"] = function (block: Blockly.BlockSvg) {
		const text_setpix = Blockly.Python.valueToCode(block, "text", 0)
	|| "0, 0, 5";
		const code = "display.set_pixel(" + text_setpix + ") \n";
		return code;
	};
	
	Blockly.Python["disclear"] = function (block: Blockly.BlockSvg) {
		const code = "display.clear() \n";
		return code;
	};

	Blockly.Python["disonoff"] = function(block: Blockly.BlockSvg) {
		const dropdown_name = block.getFieldValue("NAME");
		// TODO: Assemble Python into code variable.
		const code = "display." +dropdown_name+ "()\n";
		return code;
	};
	
	Blockly.Python["imagecreate"] = function(block: Blockly.BlockSvg) {
		const text_image = Blockly.Python.variableDB_.getName(block.getFieldValue("image"), Blockly.VARIABLE_CATEGORY_NAME);
		const number_1 = block.getFieldValue("1");
		const number_2 = block.getFieldValue("2");
		const number_3 = block.getFieldValue("3");
		const number_4 = block.getFieldValue("4");
		const number_5 = block.getFieldValue("5");
		const number_6 = block.getFieldValue("6");
		const number_7 = block.getFieldValue("7");
		const number_8 = block.getFieldValue("8");
		const number_9 = block.getFieldValue("9");
		const number_10 = block.getFieldValue("10");
		const number_11 = block.getFieldValue("11");
		const number_12 = block.getFieldValue("12");
		const number_13 = block.getFieldValue("13");
		const number_14 = block.getFieldValue("14");
		const number_15 = block.getFieldValue("15");
		var number_16 = block.getFieldValue("16");
		var number_17 = block.getFieldValue("17");
		var number_18 = block.getFieldValue("18");
		var number_19 = block.getFieldValue("19");
		var number_20 = block.getFieldValue("20");
		var number_16 = block.getFieldValue("16");
		var number_17 = block.getFieldValue("17");
		var number_18 = block.getFieldValue("18");
		var number_19 = block.getFieldValue("19");
		var number_20 = block.getFieldValue("20");
		const number_21 = block.getFieldValue("21");
		const number_22 = block.getFieldValue("22");
		const number_23 = block.getFieldValue("23");
		const number_24 = block.getFieldValue("24");
		const number_25 = block.getFieldValue("25");
		const code = text_image +" = Image(\""+number_1+number_2+number_3+number_4+number_5+":"+number_6+number_7+number_8+number_9+number_10+":"+number_11+number_12+number_13+number_14+number_15+":"+number_16+number_17+number_18+number_19+number_20+":"+number_21+number_22+number_23+number_24+number_25+"\")\n";
		return code;
	};

	Blockly.Python["expressions"] = function(block: Blockly.BlockSvg) {
		const dropdown_expressions = block.getFieldValue("image");
		const code = dropdown_expressions;
		return [code, 0];
	};

	Blockly.Python["clocks"] = Blockly.Python["expressions"];
	Blockly.Python["shapes"] = Blockly.Python["expressions"];
	Blockly.Python["animals"] = Blockly.Python["expressions"];

	Blockly.Python["buttonispressed"] = function (block: Blockly.BlockSvg) {
		const dropdown_name = block.getFieldValue("NAME");
		const code = "button_" + dropdown_name + ".is_pressed()";
		return [code, 0];
	};

	Blockly.Python["buttonwaspressed"] = function (block: Blockly.BlockSvg) {
		const dropdown_name = block.getFieldValue("NAME");
		const code = "button_" + dropdown_name + ".was_pressed()";
		return [code, 0];
	};

	Blockly.Python["accisgesturenew"] = function (block: Blockly.BlockSvg) {
		const text_gesture1 = Blockly.Python.valueToCode(block, "text", 0)
		|| "'shake'";
		const code = "accelerometer.is_gesture(" + text_gesture1 + ")";
		return [code, 0];
	};

	Blockly.Python["accisgesture"] = function (block: Blockly.BlockSvg) {
		const text_gesture1 = block.getFieldValue("gesture1");
		const code = "accelerometer.is_gesture(" + text_gesture1 + ")";
		return [code, 0];
	};

	Blockly.Python["accwasgesturenew"] = function (block: Blockly.BlockSvg) {
		const text_gesture2 = Blockly.Python.valueToCode(block, "text", 0)
		|| "'shake'";
		const code = "accelerometer.was_gesture(" + text_gesture2 + ")";
		return [code, 0];
	};

	Blockly.Python["accwasgesture"] = function (block: Blockly.BlockSvg) {
		const text_gesture2 = block.getFieldValue("gesture2");
		const code = "accelerometer.was_gesture(" + text_gesture2 + ")";
		return [code, 0];
	};

	Blockly.Python["accgestures"] = function (block: Blockly.BlockSvg) {
		const text_gesture = block.getFieldValue("gestures");
		return [text_gesture, 0];
	};

	Blockly.Python["acccurrentgesture"] = function (block: Blockly.BlockSvg) {
		const code = "accelerometer.current_gesture()";
		return [code, 0];
	};

	Blockly.Python["accget"] = function (block: Blockly.BlockSvg) {
		const text_axis = block.getFieldValue("axis");
		const code = "accelerometer." + text_axis;
		return [code, 0];
	};

	Blockly.Python["radiosend"] = function (block: Blockly.BlockSvg) {
		const text_send = block.getFieldValue("send");
		const code = "radio.send(" + text_send + ") \n";
		return code;
	};

	Blockly.Python["radiosendnew"] = function (block: Blockly.BlockSvg) { 
		const text_send = Blockly.Python.valueToCode(block, "text", 0)
		|| "True";
		const code = "radio.send(" + text_send + ") \n";
		return code;
	};

	Blockly.Python["radioconf"] = function (block: Blockly.BlockSvg) {
		const text_conf = block.getFieldValue("conf");
		const code = "radio.config(" + text_conf + ") \n";
		return code;
	};

	Blockly.Python["radioconfnew"] = function (block: Blockly.BlockSvg) {
		const text_conf = Blockly.Python.valueToCode(block, "text", 0)
		|| "True";
		const code = "radio.config(" + text_conf + ") \n";
		return code;
	};

	Blockly.Python["imradio"] = function (block: Blockly.BlockSvg) {
		const code = "import radio \n";
		return code;
	};

	Blockly.Python["radioon"] = function (block: Blockly.BlockSvg) {
		const code = "radio.on()\n";
		return code;
	};

	Blockly.Python["ifradio"] = function (block: Blockly.BlockSvg) {
		const variable_incoming = Blockly.Python.variableDB_.getName(block.getFieldValue("incoming"), Blockly.VARIABLE_CATEGORY_NAME);
		// const statements_name = Blockly.Python.statementToCode(block, 'DO');
		const text_sentitem = block.getFieldValue("sentitem");
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		// TODO: Assemble Python into code variable.
		return "if " + variable_incoming + " == " + text_sentitem + ":\n" + branch;
	};

	Blockly.Python["incoming"] = function (block: Blockly.BlockSvg) {
		const variable_incoming = Blockly.Python.variableDB_.getName(block.getFieldValue("incoming"), Blockly.VARIABLE_CATEGORY_NAME);
		// TODO: Assemble Python into code variable.
		const code = variable_incoming + " = radio.receive()\n";
		return code;
	};

	Blockly.Python["imspeech"] = function (block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "import speech\n";
		return code;
	};

	Blockly.Python["speechsay"] = function (block: Blockly.BlockSvg) {
		const text_words = block.getFieldValue("words");
		// TODO: Assemble Python into code variable.
		const code = "speech.say(\"" + text_words + "\")\n";
		return code;
	};

	Blockly.Python["speechsaynew"] = function (block: Blockly.BlockSvg) {
		const text_words = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "speech.say(\"" + text_words + "\")\n";
		return code;
	};

	Blockly.Python["speechpro"] = function (block: Blockly.BlockSvg) {
		const text_pro = block.getFieldValue("pro");
		// TODO: Assemble Python into code variable.
		const code = "speech.pronounce(\"" + text_pro + "\")\n";
		return code;
	};

	Blockly.Python["speechpronew"] = function (block: Blockly.BlockSvg) {
		const text_pro = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "speech.pronounce(\"" + text_pro + "\")\n";
		return code;
	};

	Blockly.Python["speechsing"] = function (block: Blockly.BlockSvg) {
		const text_sing = block.getFieldValue("sing");
		// TODO: Assemble Python into code variable.
		const code = "speech.sing(\"" + text_sing + "\")\n";
		return code;
	};

	Blockly.Python["speechsing"] = function (block: Blockly.BlockSvg) {
		const text_sing = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "speech.sing(\"" + text_sing + "\")\n";
		return code;
	};

	Blockly.Python["musicplay"] = function (block: Blockly.BlockSvg) {
		const text_musicplay = Blockly.Python.valueToCode(block, "text", 0)
	|| "";
		const code = "music.play(" + text_musicplay + ") \n";
		return code;
	};

	Blockly.Python["audioplay"] = function (block: Blockly.BlockSvg) {
		const text_audioplay = Blockly.Python.valueToCode(block, "text", 0)
	|| "";
		const code = "audio.play(" + text_audioplay + ") \n";
		return code;
	};

	Blockly.Python["audio_options"] = function(block: Blockly.BlockSvg) {
		const dropdown_options = block.getFieldValue("options");
		const code = dropdown_options;
		return [code, 0];
	};

	Blockly.Python["set_volume"] = function(block: Blockly.BlockSvg) {
		const value_input = Blockly.Python.valueToCode(block, "input", 0);
		// TODO: Assemble Python into code variable.
		const code = "set_volume(" +value_input+ ")\n";
		return code;
	};

	Blockly.Python["volumeslider"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("slider");
		// TODO: Assemble Python into code variable.
		const code = text_text;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["songs"] = function(block: Blockly.BlockSvg) {
		const dropdown_songs = block.getFieldValue("songs");
		const code = dropdown_songs;
		return [code, 0];
	};

	Blockly.Python["musicimport"] = function (block: Blockly.BlockSvg) {
		const code = "import music\n";
		return code;
	};

	Blockly.Python["audioimport"] = function (block: Blockly.BlockSvg) {
		const code = "import audio\n";
		return code;
	};

	Blockly.Python["music_pin"] = function(block: Blockly.BlockSvg) {
		const value_pin = Blockly.Python.valueToCode(block, "pin", 0);
		// TODO: Assemble Python into code variable.
		const code = "pin = " + value_pin;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["musicpitch"] = function (block: Blockly.BlockSvg) {
		const text_musicpitch = Blockly.Python.valueToCode(block, "text", 0)
	|| "";
		const code = "music.pitch(" + text_musicpitch + ") \n";
		return code;
	};

	Blockly.Python["musicreset"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "music.reset()\n";
		return code;
	};

	Blockly.Python["musicstop"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "music.stop()\n";
		return code;
	};

	Blockly.Python["musicstop"] = function (block: Blockly.BlockSvg) {
		const text_musicstop = Blockly.Python.valueToCode(block, "text", 0)
	|| "";
		const code = "music.stop(" + text_musicstop + ") \n";
		return code;
	};

	Blockly.Python["musictempo"] = function (block: Blockly.BlockSvg) {
		const text_musictempo = Blockly.Python.valueToCode(block, "text", 0)
	|| "";
		const code = "music.set_tempo(" + text_musictempo + ") \n";
		return code;
	};

	Blockly.Python["musicgettempo"] = function (block: Blockly.BlockSvg) {
		const code = "music.get_tempo()";
		return [code, 0];
	};

	Blockly.Python["microphone_current"] = function (block: Blockly.BlockSvg) {
		const code = "microphone.current_sound()";
		return [code, 0];
	};

	Blockly.Python["microphone_level"] = function(block: Blockly.BlockSvg) {
		const dropdown_level = block.getFieldValue("level");
		// TODO: Assemble Python into code variable.
		const code = "microphone." + dropdown_level;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["microphone_sound"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "microphone.sound_level()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["set_threshold"] = function(block: Blockly.BlockSvg) {
		const value_input = Blockly.Python.valueToCode(block, "input", 0);
		// TODO: Assemble Python into code variable.
		const code = "microphone.set_threshold(" +value_input+ ")\n";
		return code;
	};

	Blockly.Python["microphone_wassound"] = function(block: Blockly.BlockSvg) {
		const value_level = Blockly.Python.valueToCode(block, "level", 0);
		// TODO: Assemble Python into code variable.
		const code = "microphone.was_sound(" +value_level+ ")";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["microphone_getsounds"] = function (block: Blockly.BlockSvg) {
		const code = "microphone.get_sounds()";
		return [code, 0];
	};

	Blockly.Python["setneonew"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_inputneo = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		const code = variable_name+ " = neopixel.NeoPixel(" +text_inputneo+ ")\n";
		return code;
	};

	Blockly.Python["setneo"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_inputneo = block.getFieldValue("inputneo");
		const code = variable_name+ " = neopixel.NeoPixel(" +text_inputneo+ ")\n";
		return code;
	};

	Blockly.Python["importneo"] = function(block: Blockly.BlockSvg) {
		const code = "import neopixel\n";
		return code;
	}; 

	Blockly.Python["neovar"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_neonum = block.getFieldValue("neonum");
		const text_colour = block.getFieldValue("colour");
		// TODO: Assemble Python into code variable.
		const code = variable_name+ "[" +text_neonum+ "] = (" +text_colour+ ")\n";
		return code;
	};

	Blockly.Python["neovarnew"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_neonum = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		const text_colour = Blockly.Python.valueToCode(block, "text1", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = variable_name+ "[" +text_neonum+ "] = (" +text_colour+ ")\n";
		return code;
	};

	Blockly.Python["neoshow"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.VARIABLE_CATEGORY_NAME);
		// TODO: Assemble Python into code variable.
		const code = variable_name+ ".show()\n";
		return code;
	};

	Blockly.Python["neoclear"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.VARIABLE_CATEGORY_NAME);
		// TODO: Assemble Python into code variable.
		const code = variable_name+ ".clear()\n";
		return code;
	};

	Blockly.Python["pintouchednew"] = function(block: Blockly.BlockSvg) {
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "pin"+text_pinno+".is_touched()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["logotouched"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "pin_logo.is_touched()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["pin_speaker"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "pin_speaker";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["analogreadnew"] = function(block: Blockly.BlockSvg) {
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "pin"+text_pinno+".read_analog()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["digitalreadnew"] = function(block: Blockly.BlockSvg) {
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "pin"+text_pinno+".read_digital()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["writeanalognew"] = function(block: Blockly.BlockSvg) {
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		const text_analog = Blockly.Python.valueToCode(block, "text1", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "pin" +text_pinno+ ".write_analog(" +text_analog+ ")\n";
		return code;
	};
	
	Blockly.Python["writedigitalnew"] = function(block: Blockly.BlockSvg) {
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		const text_digital = Blockly.Python.valueToCode(block, "text1", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "pin" +text_pinno+ ".write_digital(" +text_digital+ ")\n";
		return code;
	};
	
	Blockly.Python["pin_pull"] = function(block: Blockly.BlockSvg) {
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
	|| "True";
		const text_digital = Blockly.Python.valueToCode(block, "text1", 0)
	|| "True";
		// TODO: Assemble Python into code variable.
		const code = "pin" +text_pinno+ ".set_pull(" +text_digital+ ")\n";
		return code;
	};

	Blockly.Python["pintouched"] = function(block: Blockly.BlockSvg) {
		const text_pinno = block.getFieldValue("pinno");
		// TODO: Assemble Python into code variable.
		const code = "pin"+text_pinno+".is_touched()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["analogread"] = function(block: Blockly.BlockSvg) {
		const text_pinno = block.getFieldValue("pinno");
		// TODO: Assemble Python into code variable.
		const code = "pin"+text_pinno+".read_analog()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["digitalread"] = function(block: Blockly.BlockSvg) {
		const text_pinno = block.getFieldValue("pinno");
		// TODO: Assemble Python into code variable.
		const code = "pin"+text_pinno+".read_digital()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["writeanalog"] = function(block: Blockly.BlockSvg) {
		const text_pinno = block.getFieldValue("pinno");
		const text_analog = block.getFieldValue("analog");
		// TODO: Assemble Python into code variable.
		const code = "pin" +text_pinno+ ".write_analog(" +text_analog+ ")\n";
		return code;
	};
	
	Blockly.Python["writedigital"] = function(block: Blockly.BlockSvg) {
		const text_pinno = block.getFieldValue("pinno");
		const text_digital = block.getFieldValue("digital");
		// TODO: Assemble Python into code variable.
		const code = "pin" +text_pinno+ ".write_digital(" +text_digital+ ")\n";
		return code;
	};
}