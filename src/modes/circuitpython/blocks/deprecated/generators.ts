/* eslint-disable */

export default function getGenerators(): void {
	Blockly.Python["import_board"] = function (block: Blockly.BlockSvg) {
		const code = "import board\n";
		return code;
	};

	Blockly.Python["events_start_here"] = function (block: Blockly.BlockSvg) {
		const code = "# Start code here\n";
		return code;
	};

	Blockly.Python["import_time"] = function (block: Blockly.BlockSvg) {
		const code = "import time\n";
		return code;
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

	Blockly.Python["try"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "try:\n" + branch;
	};

	Blockly.Python["df"] = function (block: Blockly.BlockSvg) {
		const text_def = Blockly.Python.valueToCode(block, "def", 0);
		const text_params = Blockly.Python.valueToCode(block, "params", 0);
		const code = text_def + "(" + text_params + ")\n";
		return code;
	};

	Blockly.Python["whileout"] = function (block: Blockly.BlockSvg) {
		const text_1 = Blockly.Python.valueToCode(block, "cond", 0)
	|| "True";
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

	Blockly.Python["sleep"] = function (block: Blockly.BlockSvg) {
		const text_sleeptime = block.getFieldValue("sleep");
		const code = "time.sleep(" + text_sleeptime + ")\n";
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
		const code = "time.sleep(" +value_name+ ")\n";
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
		const value_iftext = Blockly.Python.valueToCode(block, "iftext", 0) || "True";
		const code = "if " + value_iftext + ":\n" + branch;
		return code;
	};

	Blockly.Python["except"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "ifstate");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, "iftext", 0);
		const code = "except " + value_iftext + ":\n" + branch;
		return code;
	};

	Blockly.Python["with"] = function (block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "ifstate");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, "iftext", 0);
		const value_iftext2 = Blockly.Python.valueToCode(block, "iftext2", 0);
		const code = "with " + value_iftext + " as " +value_iftext2+ ":\n" + branch;
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
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("var"), Blockly.Variables.NAME_TYPE);
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
		const variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_var;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["variables_set"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
		const text_text = block.getFieldValue("NAME");
		const value_name = Blockly.Python.valueToCode(block, "varset", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + " " +text_text+ " " +value_name+ "\n";
		return code;
	};

	Blockly.Python["import_digitalio"] = function (block: Blockly.BlockSvg) {
		const code = "from digitalio import *\n";
		return code;
	};

	Blockly.Python["pinconfig"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = DigitalInOut(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["pindirection"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_direction = Blockly.Python.valueToCode(block, "text", 0)
|| "Direction.OUTPUT";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".direction = " +text_direction+ "\n";
		return code;
	};

	Blockly.Python["pull"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_direction = Blockly.Python.valueToCode(block, "text", 0)
|| "Pull.DOWN";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".pull = " +text_direction+ "\n";
		return code;
	};

	Blockly.Python["pinvalue"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_text = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".value = " +text_text+ "\n";
		return code;
	};

	Blockly.Python["valuein"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+".value";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["import_analogio"] = function (block: Blockly.BlockSvg) {
		const code = "from analogio import *\n";
		return code;
	};

	Blockly.Python["analog_in"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = AnalogIn(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["analog_out"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = AnalogOut(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["analogpinvalue"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_text = Blockly.Python.valueToCode(block, "text", 0)
|| "True";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".value = " +text_text+ "\n";
		return code;
	};

	Blockly.Python["valinline"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+".value";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["setneo"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.Variables.NAME_TYPE);
		const text_inputneo = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		const code = variable_name+ " = neopixel.NeoPixel(" +text_inputneo+ ")\n";
		return code;
	};

	Blockly.Python["fill"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.Variables.NAME_TYPE);
		const text_inputneo = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		const code = variable_name+ ".fill(" +text_inputneo+ ")\n";
		return code;
	};

	Blockly.Python["importneo"] = function(block: Blockly.BlockSvg) {
		const code = "import neopixel\n";
		return code;
	};

	Blockly.Python["neovarnew"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.Variables.NAME_TYPE);
		const text_neonum = Blockly.Python.valueToCode(block, "text", 0);
		const text_colour = Blockly.Python.valueToCode(block, "text1", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name+ "[" +text_neonum+ "] = (" +text_colour+ ")\n";
		return code;
	};

	Blockly.Python["neoshow"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_name+ ".show()\n";
		return code;
	};

	Blockly.Python["neoclear"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("NAME"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_name+ ".clear()\n";
		return code;
	};

	Blockly.Python["import_touchio"] = function (block: Blockly.BlockSvg) {
		const code = "import touchio\n";
		return code;
	};

	Blockly.Python["touch_conf"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text1", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = touchio.TouchIn(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["touch_valinline"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+".value";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["import_servo"] = function (block: Blockly.BlockSvg) {
		const code = "from adafruit_motor import servo\n";
		return code;
	};

	Blockly.Python["servo_conf"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = servo.Servo(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["servo_value"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_angle = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".angle = " +text_angle+ "\n";
		return code;
	};

	Blockly.Python["import_audio"] = function (block: Blockly.BlockSvg) {
		const code = "import audioio\n";
		return code;
	};

	Blockly.Python["audio_conf"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = audioio.AudioOut(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["audio_wav"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = audioio.WaveFile(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["audio_enable"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "value = True";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".switch_to_output(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["audio_open"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("data"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = open(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["audio_raw"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ " = audioio.RawSample(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["audio_play"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		const text_pinno = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".play(" +text_pinno+ ")\n";
		return code;
	};

	Blockly.Python["audio_stop"] = function(block: Blockly.BlockSvg) {
		const variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_pin+ ".stop()\n";
		return code;
	};

	Blockly.Python["audio_playing"] = function(block: Blockly.BlockSvg) {
		const variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue("pin"), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble Python into code variable.
		const code = variable_variable+ ".playing";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["import_dotstar"] = function (block: Blockly.BlockSvg) {
		const code = "import adafruit_dotstar\n";
		return code;
	};

	Blockly.Python["vardotstar"] = function(block: Blockly.BlockSvg) {
		const variable_led = Blockly.Python.variableDB_.getName(block.getFieldValue("led"), Blockly.Variables.NAME_TYPE);
		const text_input = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_led+ " = adafruit_dotstar.DotStar(" +text_input+ ")\n";
		return code;
	};

	Blockly.Python["ledfill"] = function(block: Blockly.BlockSvg) {
		const variable_led = Blockly.Python.variableDB_.getName(block.getFieldValue("led"), Blockly.Variables.NAME_TYPE);
		const text_input = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_led+ ".fill(" +text_input+ ")\n";
		return code;
	};

	Blockly.Python["dsbrightness"] = function(block: Blockly.BlockSvg) {
		const variable_led = Blockly.Python.variableDB_.getName(block.getFieldValue("led"), Blockly.Variables.NAME_TYPE);
		const text_brightness = Blockly.Python.valueToCode(block, "text", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_led+ ".brightness = " +text_brightness+ "\n";
		return code;
	};

	Blockly.Python["dsvar"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("led"), Blockly.Variables.NAME_TYPE);
		const text_neonum = Blockly.Python.valueToCode(block, "text1", 0)
|| "";
		const text_colour = Blockly.Python.valueToCode(block, "text2", 0)
|| "";
		// TODO: Assemble Python into code variable.
		const code = variable_name+ "[" +text_neonum+ "] = (" +text_colour+ ")\n";
		return code;
	};

	Blockly.Python["import_micro"] = function (block: Blockly.BlockSvg) {
		const code = "import microcontroller\n";
		return code;
	};

	Blockly.Python["cputemp"] = function(block: Blockly.BlockSvg) {
		const code = "microcontroller.cpu.temperature";
		return [code, 0];
	};

	// Storage

	Blockly.Python["import_storage"] = function (block: Blockly.BlockSvg) {
		const code = "import storage\n";
		return code;
	};

	Blockly.Python["storage_remount"] = function(block: Blockly.BlockSvg) {
		const value_text1 = Blockly.Python.valueToCode(block, "text1", 0);
		const value_text2 = Blockly.Python.valueToCode(block, "text2", 0);
		// TODO: Assemble Python into code variable.
		const code = "storage.remount(" +value_text1+ ", " +value_text2+ ")\n";
		return code;
	};

	Blockly.Python["open"] = function(block: Blockly.BlockSvg) {
		const value_text1 = Blockly.Python.valueToCode(block, "text1", 0);
		const value_text2 = Blockly.Python.valueToCode(block, "text2", 0);
		// TODO: Assemble Python into code variable.
		const code = "open(" +value_text1+ ", " +value_text2+ ")";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["write"] = function(block: Blockly.BlockSvg) {
		const value_text1 = Blockly.Python.valueToCode(block, "text1", 0);
		const value_text2 = Blockly.Python.valueToCode(block, "text2", 0);
		// TODO: Assemble Python into code variable.
		const code = value_text1 + ".write(" +value_text2+ ")\n";
		return code;
	};

	Blockly.Python["import_cpx"] = function (block: Blockly.BlockSvg) {
		const code = "from adafruit_circuitplayground.express import cpx\n";
		return code;
	};

	Blockly.Python["redled"] = function(block: Blockly.BlockSvg) {
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = "cpx.red_led = " +value_text+ "\n";
		return code;
	};

	Blockly.Python["switch"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "cpx.switch";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["detect_taps"] = function(block: Blockly.BlockSvg) {
		const value_name = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = "cpx.detect_taps = " +value_name+ "\n";
		return code;
	};

	Blockly.Python["tapped"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "cpx.tapped";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["shake"] = function(block: Blockly.BlockSvg) {
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = "cpx.shake(" +value_text+ ")";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["light"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "cpx.light";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["acc"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "cpx.acceleration";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["button"] = function(block: Blockly.BlockSvg) {
		const dropdown_button = block.getFieldValue("button");
		// TODO: Assemble Python into code variable.
		const code = "cpx.button_" +dropdown_button;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["temp"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "cpx.temperature";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["touchdrop"] = function(block: Blockly.BlockSvg) {
		const dropdown_button = block.getFieldValue("button");
		// TODO: Assemble Python into code variable.
		const code = "cpx.touch_" +dropdown_button;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["playtone"] = function(block: Blockly.BlockSvg) {
		const value_text1 = Blockly.Python.valueToCode(block, "text1", 0);
		const value_text2 = Blockly.Python.valueToCode(block, "text2", 0);
		// TODO: Assemble Python into code variable.
		const code = "cpx.play_tone(" +value_text1+ ", " +value_text2+ ")\n";
		return code;
	};

	Blockly.Python["starttone"] = function(block: Blockly.BlockSvg) {
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = "cpx.start_tone(" +value_text+ ")";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["stoptone"] = function(block: Blockly.BlockSvg) {
	// TODO: Assemble Python into code variable.
		const code = "cpx.stop_tone()";
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, 0];
	};

	Blockly.Python["playfile"] = function(block: Blockly.BlockSvg) {
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = "cpx.play_file(" +value_text+ ")\n";
		return code;
	};
}