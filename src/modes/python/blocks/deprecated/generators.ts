/* eslint-disable */

export default function getGenerators(): void {
	Blockly.Python["variables_get"] = function(block: Blockly.BlockSvg) {
		const variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		const code = variable_var;
		return [code, 0];
	};

	Blockly.Python["variables_set"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_text = block.getFieldValue("NAME");
		const value_name = Blockly.Python.valueToCode(block, "varset", 0);
		const code = variable_name + " " +text_text+ " " +value_name+ "\n";
		return code;
	};

	Blockly.Python["random"] = function (block: Blockly.BlockSvg) {
		const code = "import random\n";
		return code;
	};

	Blockly.Python["websleepnew"] = function(block: Blockly.BlockSvg) {
		const value_name = Blockly.Python.valueToCode(block, "sleep", 0);
		const code = "time.sleep(" +value_name+ ")\n";
		return code;
	};

	Blockly.Python["webtypeanything"] = function(block: Blockly.BlockSvg) {
		const text_stuff = Blockly.Python.valueToCode(block, "stuff", 0);
		const code = text_stuff + "# your own code\n";
		return code;
	};

	Blockly.Python["webdf"] = function(block: Blockly.BlockSvg) {
		const text_def = Blockly.Python.valueToCode(block, "def", 0);
		const text_params = Blockly.Python.valueToCode(block, "params", 0);
		const code = text_def + "(" + text_params + ")\n";
		return code;
	};

	Blockly.Python["webpass"] = function() {
		const code = "pass \n";
		return code;
	};

	Blockly.Python["webprintnew"] = function(block: Blockly.BlockSvg) {
		const text_print = Blockly.Python.valueToCode(block, "text", 0);
		const code = "print(\"" + text_print + "\")\n";
		return code;
	};

	Blockly.Python["webvarprint"] = function(block: Blockly.BlockSvg) {
		const text_const = Blockly.Python.valueToCode(block, "var", 0);
		const code = "print(" + text_const + ")\n";
		return code;
	};

	Blockly.Python["input_web"] = function(block: Blockly.BlockSvg) {
		const value_name = Blockly.Python.valueToCode(block, "NAME", 0);
		const code = "input(" +value_name+ ")";
		return [code, 0];
	};

	Blockly.Python["webint"] = function(block: Blockly.BlockSvg) {
		const value_bool = Blockly.Python.valueToCode(block, "bool", 0);
		const code = "int(" + value_bool+ ")";
		return [code, 0];
	};

	Blockly.Python["webstr"] = function(block: Blockly.BlockSvg) {
		const value_bool = Blockly.Python.valueToCode(block, "bool", 0);
		const code = "str(" + value_bool+ ")";
		return [code, 0];
	};

	Blockly.Python["webfloat"] = function(block: Blockly.BlockSvg) {
		const value_number = Blockly.Python.valueToCode(block, "number", 0);
		const code = "float(" + value_number+ ")";
		return [code, 0];
	};

	Blockly.Python["webround"] = function(block: Blockly.BlockSvg) {
		const value_number = Blockly.Python.valueToCode(block, "number", 0);
		const code = "round(" + value_number+ ")";
		return [code, 0];
	};

	Blockly.Python["weblen"] = function(block: Blockly.BlockSvg) {
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		const code = "len(" + value_text+ ")";
		return [code, 0];
	};

	Blockly.Python["upper_lower"] = function(block: Blockly.BlockSvg) {
		const value_string = Blockly.Python.valueToCode(block, "string", 0);
		const dropdown_upperlower = block.getFieldValue("upperlower");
		const code = value_string + "." + dropdown_upperlower + "()";
		return [code, 0];
	};

	Blockly.Python["webcomma"] = function(block: Blockly.BlockSvg) {
		const value_in1 = Blockly.Python.valueToCode(block, "in1", 0);
		const dropdown_commadd = block.getFieldValue("commadd");
		const value_in2 = Blockly.Python.valueToCode(block, "in2", 0);
		const code = value_in1 + dropdown_commadd + value_in2;
		return [code, 0];
	};

	Blockly.Python["brackets"] = function(block: Blockly.BlockSvg) {
		const value_name = Blockly.Python.valueToCode(block, "NAME", 0);
		const code = "(" +value_name+ ")";
		return [code, 0];
	};

	Blockly.Python["textinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("text");
		const code = text_text;
		return [code, 0];
	};

	Blockly.Python["stringinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("text");
		const code = "\"" + text_text + "\"";
		return [code, 0];
	};

	Blockly.Python["operators2"] = function(block: Blockly.BlockSvg) {
		const value_first = Blockly.Python.valueToCode(block, "first", 0);
		const text_choose = block.getFieldValue("operators");
		const value_last = Blockly.Python.valueToCode(block, "last", 0);
		const code = value_first+ " " +text_choose+ " " +value_last;
		return [code, 0];
	};

	Blockly.Python["webifinline"] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "ifstate");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, "iftext", 0);
		const code = "if " + value_iftext + ":\n" + branch;
		return code;
	};

	Blockly.Python["webelifinline"] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "ifstate");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const value_iftext = Blockly.Python.valueToCode(block, "iftext", 0);
		const code = "elif " + value_iftext + ":\n" + branch;
		return code;
	};

	Blockly.Python["webelse"] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO"); 
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "else:\n" + branch;
	};

	Blockly.Python["webinternal"] = function(block: Blockly.BlockSvg) {
		const value_first = Blockly.Python.valueToCode(block, "first", 0);
		const text_choose = block.getFieldValue("choose");
		const value_last = Blockly.Python.valueToCode(block, "last", 0);
		const code = value_first+ " " +text_choose+ " " +value_last;
		return [code, 0];
	};
	
	Blockly.Python["webandor"] = Blockly.Python["webinternal"];

	Blockly.Python["webnot"] = function(block: Blockly.BlockSvg) {
		const value_bool = Blockly.Python.valueToCode(block, "bool", 0);
		const code = "not " + value_bool;
		return [code, 0];
	};

	Blockly.Python["create_list"] = function(block: Blockly.BlockSvg) {
		const variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue("list"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_list+ " = [" +value_text+ "]\n";
		return code;
	};

	Blockly.Python["calllist"] = function(block: Blockly.BlockSvg) {
		const variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue("list"), Blockly.VARIABLE_CATEGORY_NAME);
		const code = variable_list;
		return code;
	};

	Blockly.Python["selectlist"] = function(block: Blockly.BlockSvg) {
		const variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue("list"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_name = Blockly.Python.valueToCode(block, "NAME", 0);
		const code = variable_list + "[" +value_name+ "]\n";
		return code;
	};

	Blockly.Python["selectlist2"] = function(block: Blockly.BlockSvg) {
		const variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue("list"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_name = Blockly.Python.valueToCode(block, "NAME", 0);
		const code = variable_list + "[" +value_name+ "]";
		return [code, 0];
	};

	Blockly.Python["optionlist"] = function(block: Blockly.BlockSvg) {
		const variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue("list"), Blockly.VARIABLE_CATEGORY_NAME);
		const dropdown_options = block.getFieldValue("options");
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_list+ "." +dropdown_options+ "(" +value_text+ ")\n";
		return code;
	};

	Blockly.Python["assign_index_array"] = function(block: Blockly.BlockSvg) {
		const variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue("list"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_index = Blockly.Python.valueToCode(block, "index", 0);
		const value_value = Blockly.Python.valueToCode(block, "value", 0);
		const code = `${variable_list}[${value_index}] = ${value_value}\n`;
		return code;
	};

	Blockly.Python["get_array"] = function(block: Blockly.BlockSvg) {
		const variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue("list"), Blockly.VARIABLE_CATEGORY_NAME);
		const code = variable_list;
		return [code, 0];
	};

	Blockly.Python["webwhileout"] = function(block: Blockly.BlockSvg) {
		const text_1 = Blockly.Python.valueToCode(block, "cond", 0);
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const code = "while " + text_1 + ":\n" + branch;
		return code;
	};

	Blockly.Python["webfor"] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_letter = Blockly.Python.valueToCode(block, "letter", 0);
		const text_no = Blockly.Python.valueToCode(block, "no", 0);
		const code = "for " + text_letter + " in range(" + text_no + "):\n" + branch;
		return code;
	};

	Blockly.Python["webadvancedforloops"] = function(block: Blockly.BlockSvg) {
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const text_x = Blockly.Python.valueToCode(block, "x", 0);
		const text_y = Blockly.Python.valueToCode(block, "y", 0);
		const code = "for " + text_x + " in " + text_y + ":\n" + branch;
		return code;
	};

	Blockly.Python["web_break"] = function() {
		const code = "break\n";
		return code;
	};

	Blockly.Python["loop_get"] = function(block: Blockly.BlockSvg) {
		const variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		const code = variable_var;
		return [code, 0];
	};

	Blockly.Python["webdefine"] = function(block: Blockly.BlockSvg) {
		const text_1 = Blockly.Python.valueToCode(block, "1", 0);
		const text_2 = Blockly.Python.valueToCode(block, "2", 0);
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const code = "def " + text_1 + "(" + text_2 + "):\n" + branch;
		return code;
	};

	Blockly.Python["inline_def"] = function(block: Blockly.BlockSvg) {
		const value_def = Blockly.Python.valueToCode(block, "def", 0);
		const value_input = Blockly.Python.valueToCode(block, "input", 0);
		const code = value_def + "(" +value_input+ ")";
		return [code, 0];
	};

	Blockly.Python["webreturn2"] = function(block: Blockly.BlockSvg) {
		const text_return = Blockly.Python.valueToCode(block, "return", 0);
		const code = "return " + text_return + "\n";
		return code;
	};

	Blockly.Python["self"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_text = block.getFieldValue("NAME");
		const value_name = Blockly.Python.valueToCode(block, "varset", 0);
		const code = "self." + variable_name + " " +text_text+ " " +value_name+ "\n";
		return code;
	};

	Blockly.Python["webclass"] = function(block: Blockly.BlockSvg) {
		const text_const = Blockly.Python.valueToCode(block, "class", 0);
		let branch = Blockly.Python.statementToCode(block, "DO");
		branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		return "class " + text_const + ":\n" + branch;
	};

	Blockly.Python["turtle"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const code = variable_turtle+ " = Turtle()\n";
		return code;
	};
	
	Blockly.Python["screeninit"] = function(block: Blockly.BlockSvg) {
		const variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue("wn"), Blockly.VARIABLE_CATEGORY_NAME);
		const code = variable_wn+ " = Screen()\n";
		return code;
	};

	Blockly.Python["turtle_fill"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const dropdown_fill = block.getFieldValue("fill");
		const code = `${variable_turtle}.${dropdown_fill}()\n`;
		return code;
	};

	Blockly.Python["background"] = function(block: Blockly.BlockSvg) {
		const variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue("wn"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_color = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_wn+ ".bgcolor(" +text_color+ ")\n";
		return code;
	};

	Blockly.Python["directions"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const dropdown_options = block.getFieldValue("options");
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+ "." +dropdown_options+ "(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["penud"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const dropdown_options = block.getFieldValue("options");
		const code = variable_turtle+ ".pen" +dropdown_options+ "()\n";
		return code;
	};

	Blockly.Python["pen"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const code = variable_turtle+".Pen()\n";
		return code;
	};

	Blockly.Python["colourpen"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".pencolor(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["fillcolor"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".fillcolor(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["screen_setup"] = function(block: Blockly.BlockSvg) {
		const variable_screen = Blockly.Python.variableDB_.getName(block.getFieldValue("screen"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_screen+".setup(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["colour"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".color(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["colourmode"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("wn"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".colormode(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["penwidth"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".width(" +text_dist+ ")\n";
		return code;
	};
	
	Blockly.Python["turtlespeed"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".speed(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["turtleshape"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".shape(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["circle"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".circle(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["goto"] = function(block: Blockly.BlockSvg) {
		const variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue("turtle"), Blockly.VARIABLE_CATEGORY_NAME);
		const text_dist = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_turtle+".goto(" +text_dist+ ")\n";
		return code;
	};

	Blockly.Python["chart_type"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("name"), Blockly.VARIABLE_CATEGORY_NAME);
		const dropdown_charttypes = block.getFieldValue("chartTypes");
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		const code = variable_name + " = pygal." +dropdown_charttypes+ "(" +value_text+ ")\n";
		return code;
	};

	Blockly.Python["chart_title"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("name"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ".title = " +value_text+ "\n";
		return code;
	};

	Blockly.Python["chart_add"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("name"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_text = Blockly.Python.valueToCode(block, "text", 0);
		const value_text1 = Blockly.Python.valueToCode(block, "text1", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name+ ".add(" +value_text+ ", [" +value_text1+ "])\n";
		return code;
	};

	Blockly.Python["chart_xlabels"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("name"), Blockly.VARIABLE_CATEGORY_NAME);
		const value_name = Blockly.Python.valueToCode(block, "text", 0);
		// TODO: Assemble Python into code variable.
		const code = variable_name + ".x_labels = " +value_name+ "\n";
		return code;
	};

	Blockly.Python["chart_render"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("name"), Blockly.VARIABLE_CATEGORY_NAME);
		// TODO: Assemble Python into code variable.
		const code = variable_name+ ".render()\n";
		return code;
	};
}