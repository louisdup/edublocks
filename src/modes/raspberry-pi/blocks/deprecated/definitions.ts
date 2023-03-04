export default function getDefinitions(): void {
	Blockly.Blocks["import_time"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import time");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the time library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};
	
	Blockly.Blocks["import_signal"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from signal import pause");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the signal library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["pause_s"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pause()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Pause");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["random"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import random");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the random library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	//   deprecated
	Blockly.Blocks["while_true"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("while True:");
			this.appendStatementInput("DO")
				.appendField("");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Forever loop.");
			this.setHelpUrl("https://t.co/PCZC5EFe4D");
		},
	};

	Blockly.Blocks["pass"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pass");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Pass to the next command");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	//   deprecated
	Blockly.Blocks["if"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("if")
				.appendField(new Blockly.FieldTextInput("0"), "var")
				.appendField(":");
			this.appendStatementInput("DO")
				.appendField("");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("If Statement.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["class"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("class");
			this.appendValueInput("class")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("DO")
				.appendField("");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Class Statement.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["varprint"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("print(");
			this.appendValueInput("var")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Use this to print a variable, a number, or even a string if you put in the quotes yourself.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	//   deprecated
	Blockly.Blocks["ifcroc"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("if")
				.appendField(new Blockly.FieldTextInput("this"), "this")
				.appendField(new Blockly.FieldDropdown([[">", ">"], ["<", "<"]]), "crocsigns")
				.appendField(new Blockly.FieldTextInput("that"), "that")
				.appendField(":");
			this.appendStatementInput("DO")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("If statement with greater and less than");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["varminus"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldTextInput("0"), "1")
				.appendField("-=")
				.appendField(new Blockly.FieldTextInput("0"), "2");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Variable with - and =");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["for"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("for");
			this.appendValueInput("letter")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("in range(");
			this.appendValueInput("no")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("):");
			this.appendStatementInput("DO")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("Create a for loop");
		},
	};

	Blockly.Blocks["advancedforloops"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("for");
			this.appendValueInput("x")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("in");
			this.appendValueInput("y")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("DO")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	//   deprecated
	Blockly.Blocks["ifequals"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("if")
				.appendField(new Blockly.FieldTextInput("this"), "this")
				.appendField("==")
				.appendField(new Blockly.FieldTextInput("that"), "that");
			this.appendStatementInput("DO")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["importinputs"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import inputs");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["return2"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("return");
			this.appendValueInput("return")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setInputsInline(true);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	//   deprecated
	Blockly.Blocks["elif"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("elif")
				.appendField(new Blockly.FieldTextInput("0"), "var")
				.appendField(":");
			this.appendStatementInput("DO")
				.appendField("");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Elif Statement.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["else"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("else:");
			this.appendStatementInput("DO")
				.appendField("");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Else statement");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["df"] = {
		init: function(): void {
			this.appendValueInput("def")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("(");
			this.appendValueInput("params")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("call a define function");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["whileout"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("while");
			this.appendValueInput("cond")
				.setCheck("Boolean");
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("DO")
				.appendField("");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["import_math"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import math");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the math library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["import_audio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import audio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the audio library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["sleep"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sleep(");
			this.appendValueInput("sleep");
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Sleep");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["sleepnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("time.sleep(");
			this.appendValueInput("sleep")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Wait (in milliseconds)");
			this.setHelpUrl("");
		}
	};

	// deprecated

	Blockly.Blocks["print"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("print(\"");
			this.appendValueInput("print")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\" )");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Use this to print to the output box.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["printnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("print(\"");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\" )");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Use this to print a string to the output box.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["equalsblock"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldTextInput("0"), "1")
				.appendField("=")
				.appendField(new Blockly.FieldTextInput("0"), "2");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["equalsblocknew"] = {
		init: function(): void {
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["=", "="], ["+=", "+="], ["-=", "-="]]), "NAME");
			this.appendValueInput("text2")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Assign, increment or decrement a variable");
			this.setHelpUrl("");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, "Boolean");
		}
	};

	Blockly.Blocks["define"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("def ");
			this.appendValueInput("1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("(");
			this.appendValueInput("2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("):");
			this.appendStatementInput("DO")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	//   deprecated
	Blockly.Blocks["greater"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("while")
				.appendField(new Blockly.FieldTextInput(""), "1")
				.appendField(">")
				.appendField(new Blockly.FieldTextInput(""), "v")
				.appendField(":");
			this.appendStatementInput("DO")
				.appendField("");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["ifinline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("if");
			this.appendValueInput("iftext")
				.setCheck("Boolean");
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("ifstate")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("If block with inline input");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["typeanything"] = {
		init: function(): void {
			this.appendValueInput("stuff")
				.setCheck(null);
			this.appendDummyInput()   
				.appendField("# your own code");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Type any python code into this block");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["elifinline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("elif");
			this.appendValueInput("iftext")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("ifstate")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("ElIf block with inline input");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["buttonapressed"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("button_")
				.appendField(new Blockly.FieldDropdown([["a", "a"], ["b", "b"]]), "NAME")
				.appendField(".is_pressed()");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
			this.setTooltip("Button A Pressed");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["internal"] = {
		init: function(): void {
			const operators: Array<Array<string>> = [
				["==", "=="],
				["!=", "!="],
				["<", "<"],
				["<=", "<="],
				[">", ">"],
				[">=", ">="]
			];
			this.appendValueInput("first")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(operators), "choose");
			this.appendValueInput("last")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["textinline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldTextInput(""), "text");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
			this.setTooltip("Text input for inline input");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["stringinline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldString(""), "text");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
			this.setTooltip("String input for inline input");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["sliderinline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldSlider("0", "0", "1", "1", "1", "Value"), "slider");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
			this.setTooltip("Slider input for inline input");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["varinlines"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable"), "var")
				.appendField(new Blockly.FieldDropdown([["=", "="], ["+=", "+="], ["-=", "-="]]), "NAME");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("assign a value, increment, or decrement a variable");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["boolstatus"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([
					["True","True"], 
					["False","False"]
				]), "bool");
			this.setOutput(true, "Boolean");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["andor"] = {
		init: function(): void {
			this.appendValueInput("first")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["and", "and"], ["or", "or"]]), "choose");
			this.appendValueInput("last")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["not"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("not");
			this.appendValueInput("bool")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
			this.setTooltip("negates a Boolean value");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["break"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("break");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("breaks out of a loop");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["variables_get"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("var"), "VAR");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#0000CD");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	}; 

	Blockly.Blocks["variables_set"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable(""), "VAR")
				.appendField(new Blockly.FieldDropdown([["=", "="], ["+=", "+="], ["-=", "-="]]), "NAME");
			this.appendValueInput("varset")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#0000CD");
			this.setTooltip("assign a value, increment, or decrement a variable");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["mcimport"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from mcpi.minecraft import Minecraft");
			this.setPreviousStatement(true, null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7D21E1");
			this.setTooltip("Use this to import minecraft.");
			this.setHelpUrl("http://www.example.com/");
		},
	};
	
	Blockly.Blocks["mccreate"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc = Minecraft.create()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7D21E1");
			this.setTooltip("Use this to connect to minecraft. ALWAYS REQUIRED.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["import_block"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from mcpi import block");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7D21E1");
			this.setTooltip("Imports the mcpi block library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mcpost"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.postToChat(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to send a message to the Minecraft chat.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mcpos"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("playerPos = mc.player.getPos()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this set a variable of the players position.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["setpos"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.player.setPos(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Set players position");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["campos"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.camera.setPos(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to set the cameras position");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["getblock"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("blockType = mc.getBlock(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to get a block type.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["cameraset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.camera.set")
				.appendField(new Blockly.FieldDropdown([["Fixed", "Fixed"], ["Normal", "Normal"]]), "drop")
				.appendField("()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Set camera mode.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["setblock"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("blockType = mc.setBlock(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to set a block type.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mcvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("x, y, z = mc.player.getPos()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this set a variable of the players position.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mctext"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("blockType = mc.setBlock(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to set a block type with text");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mcblocks"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.setBlocks(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text4")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text5")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text6")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text7")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text8")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to set numerous blocks");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["build"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("buildPumpkin(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["printwall"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("PrintWall(PixelArt(");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "11")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "12")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "13")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "14")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "15")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "16")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "17")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "18")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "21")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "22")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "23")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "24")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "25")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "26")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "27")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "28")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "31")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "32")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "33")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "34")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "35")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "36")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "37")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "38")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "41")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "42")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "43")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "44")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "45")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "46")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "47")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "48")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "51")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "52")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "53")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "54")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "55")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "56")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "57")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "58")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "61")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "62")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "63")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "64")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "65")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "66")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "67")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "68")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "71")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "72")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "73")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "74")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "75")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "76")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "77")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "78")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(new Blockly.FieldTextInput(""), "81")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "82")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "83")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "84")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "85")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "86")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "87")
				.appendField(", ")
				.appendField(new Blockly.FieldTextInput(""), "88")
				.appendField(", ");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("))");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setInputsInline(false);
			this.setColour("#19E32E");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["mctext2"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.setBlock(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to set a block type with text");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mctext5"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.setBlock(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text4")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Use this to set a block type with text");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mcblocks8"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("mc.setBlocks(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text4")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text5")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text6")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text7")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["return"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("return math.sqrt((xd*xd) + (yd*yd) + (zd*zd))");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Imports the edupy library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["getdist"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("distance_to_player(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["mcpiblockas"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import mcpi.block as block");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7D21E1");
			this.setTooltip("Imports the Minecraft Block Library");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["defcall"] = {
		init: function(): void {
			this.appendDummyInput();
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#19E32E");
			this.setTooltip("Call a function");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["importgpiozero"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from gpiozero import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E4E436");
			this.setTooltip("Import the gpiozero library");
			this.setHelpUrl("http://gpiozero.readthedocs.io");
		},
	};

	Blockly.Blocks["importtime"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from datetime import time");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E4E436");
			this.setTooltip("Import the datetime library");
			this.setHelpUrl("http://gpiozero.readthedocs.io");
		},
	};

	Blockly.Blocks["buttonset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("button"), "button")
				.appendField(" = Button(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a button");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#button");
		},
	};

	Blockly.Blocks["lineset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("sensor"), "sensor")
				.appendField(" = LineSensor(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Setup a line sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
		}
	};

	Blockly.Blocks["motionset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pir"), "pir")
				.appendField(" = MotionSensor(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a MotionSensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#motion-sensor-d-sun-pir");
		},
	};

	Blockly.Blocks["lightset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("ldr"), "ldr")
				.appendField(" = LightSensor(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a Light Sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr");
		},
	};

	Blockly.Blocks["distanceset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("distance"), "distance")
				.appendField(" = DistanceSensor(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a Distance Sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#distance-sensor-hc-sr04");
		},
	};

	Blockly.Blocks["ledset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(" = LED(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an LED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#led");
		},
	};

	Blockly.Blocks["pledset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(" = PWMLED(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an PWMLED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled");
		},
	};

	Blockly.Blocks["rgbledset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("rgb"), "rgb")
				.appendField(" = RGBLED(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an RGB LED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled");
		},
	};

	Blockly.Blocks["buzzerset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("buzzer"), "buzzer")
				.appendField(" = Buzzer(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an Buzzer");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer");
		},
	};

	Blockly.Blocks["motorset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("motor"), "motor")
				.appendField(" = Motor(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for a Motor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#motor");
		},
	};

	Blockly.Blocks["servoset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("servo"), "servo")
				.appendField(" = Servo(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for a Servo");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#servo");
		},
	};

	Blockly.Blocks["angset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("angular"), "angular")
				.appendField(" = AngularServo(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an Angular Servo");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo");
		},
	};

	Blockly.Blocks["ledbset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("leds"), "leds")
				.appendField(" = LEDBoard(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for an LED Board");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard");
		},
	};

	Blockly.Blocks["graphset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("graph"), "leds")
				.appendField(" = LEDBarGraph(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for an LED Bar Graph");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph");
		},
	};

	Blockly.Blocks["buttonbset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("buttonb"), "buttonb")
				.appendField(" = ButtonBoard(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for a Button Board");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard");
		},
	};

	Blockly.Blocks["buttonaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("button"), "button")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["wait_for_press", "wait_for_press"], ["wait_for_release", "wait_for_release"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a button");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#button");
		},
	};

	Blockly.Blocks["lineaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("sensor"), "sensor")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["wait_for_line", "wait_for_line"], ["wait_for_no_line", "wait_for_no_line"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a Line Sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
		},
	};

	Blockly.Blocks["motionaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pir"), "pir")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["wait_for_motion", "wait_for_motion"], ["wait_for_no_motion", "wait_for_no_motion"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a motion sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
		},
	};

	Blockly.Blocks["lightaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("ldr"), "ldr")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["wait_for_dark", "wait_for_dark"], ["wait_for_light", "wait_for_light"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a light sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr");
		},
	};

	Blockly.Blocks["distanceaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("distance"), "distance")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["wait_for_in_range", "wait_for_in_range"], ["wait_for_out_of_range", "wait_for_out_of_range"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set a variable for a distance sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr");
		},
	};

	Blockly.Blocks["ledaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["blink", "blink"], ["toggle", "toggle"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an LED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#led");
		},
	};

	Blockly.Blocks["pledaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["blink", "blink"], ["toggle", "toggle"], ["pulse", "pulse"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an PWM LED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled");
		},
	};

	Blockly.Blocks["rgbledaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("rgb"), "rgb")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["blink", "blink"], ["toggle", "toggle"], ["pulse", "pulse"], ["color", "color"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an RGB LED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled");
		},
	};

	Blockly.Blocks["buzzeraction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("buzzer"), "buzzer")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["beep", "beep"], ["toggle", "toggle"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for a Buzzer");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer");
		},
	};

	Blockly.Blocks["motoraction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("motor"), "motor")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["forward", "forward"], ["backward", "backward"], ["stop", "stop"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for a Motor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#motor");
		},
	};

	Blockly.Blocks["servoaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("servo"), "servo")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["detach", "detach"], ["max", "max"], ["mid", "mid"], ["min", "min"], ["angle", "angle"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for a Servo");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#servo");
		},
	};

	Blockly.Blocks["angaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("angular"), "angular")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["detach", "detach"], ["max", "max"], ["mid", "mid"], ["min", "min"], ["angle", "angle"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set a variable for an Angular Servo");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo");
		},
	};

	Blockly.Blocks["ledbaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("leds"), "leds")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["blink", "blink"], ["close", "close"], ["on", "off"], ["pulse", "pulse"], ["toggle", "toggle"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for an LED Board");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard");
		},
	};

	Blockly.Blocks["graphaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("graph"), "graph")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["toggle", "toggle"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for an LED Bar Graph");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph");
		},
	};

	Blockly.Blocks["buttonbaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("buttonb"), "buttonb")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["wait_for_active", "wait_for_active"], ["wait_for_inactive", "wait_for_inactive"], ["wait_for_press", "wait_for_press"], ["wait_for_release", "wait_for_release"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for a Button Baord");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard");
		},
	};

	Blockly.Blocks["buttonvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("button"), "button")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);

			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set an action variable for a button");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#button");
		},
	};

	Blockly.Blocks["linevar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("sensor"), "sensor")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set an action variable for a Sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
		},
	};

	Blockly.Blocks["motionvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pir"), "pir")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set an action variable for a motion sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
		},
	};

	Blockly.Blocks["lightvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("ldr"), "ldr")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set an action variable for a light sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
		},
	};

	Blockly.Blocks["distancevar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("distance"), "disance")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16AEE5");
			this.setTooltip("Set an action variable for a Distance sensor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000");
		},
	};

	Blockly.Blocks["ledvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set an action variable for an LED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#led");
		},
	};

	Blockly.Blocks["pledvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set an action variable for an PWMLED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled");
		},
	};

	Blockly.Blocks["rgbledvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("rgb"), "rgb")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set an action variable for an RGB LED");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled");
		},
	};

	Blockly.Blocks["buzzervar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("buzzer"), "buzzer")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set an action variable for an Buzzer");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer");
		},
	};

	Blockly.Blocks["motorvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("motor"), "motor")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set an action variable for a Motor");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#motor");
		},
	};

	Blockly.Blocks["servovar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("servo"), "servo")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set an action variable for a Servo");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#servo");
		},
	};

	Blockly.Blocks["angvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("angular"), "angular")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616");
			this.setTooltip("Set an action variable for an Angular Servo");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo");
		},
	};

	Blockly.Blocks["ledbvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("leds"), "leds")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set an action variable for an LED Board");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard");
		},
	};

	Blockly.Blocks["graphvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("graph"), "graph")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set an action variable for an LED Bar Graph");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph");
		},
	};

	Blockly.Blocks["buttonbvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("buttonb"), "buttonb")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set an action variable for a Button Board");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard");
		},
	};

	Blockly.Blocks["trafficset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("traffic"), "traffic")
				.appendField(" = TrafficLights(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for a Traffic Light");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights");
		},
	};

	Blockly.Blocks["trafficaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("traffic"), "traffic")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["red", "red"], ["amber", "amber"], ["green", "green"]]), "colour")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["blink", "blink"], ["pulse", "pulse"], ["toggle", "toggle"]]), "action")
				.appendField("()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Setup a Traffic Light");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights");
		}
	};

	Blockly.Blocks["trafficvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("traffic"), "traffic")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput();
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set an action variable for a Traffic Light");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights");
		},
	};

	Blockly.Blocks["pingset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("server"), "server")
				.appendField(" = PingServer(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E57E");
			this.setTooltip("Set a variable for a Ping Server");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_other.html#pingserver");
		},
	};

	Blockly.Blocks["energenieset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("lamp"), "lamp")
				.appendField(" = Energenie(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for an Energenie");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie");
		},
	};

	Blockly.Blocks["energenieaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("lamp"), "lamp")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for an Energenie");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie");
		},
	};

	Blockly.Blocks["energenievar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("lamp"), "lamp")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set an action variable for an Energenie");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie");
		},
	};

	Blockly.Blocks["camjamset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("camjam"), "camjam")
				.appendField(" = CamJamKitRobot()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for a CamJam Kit 3");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot");
		},
	};

	Blockly.Blocks["camjamaction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("camjam"), "camjam")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["forward", "forward"], ["backward", "backward"], ["left", "left"], ["right", "right"], ["reverse", "reverse"], ["stop", "stop"]]), "action")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set a variable for an CamJam Kit 3");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot");
		},
	};

	Blockly.Blocks["camjamvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("camjam"), "camjam")
				.appendField(".");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(" = ");
			this.appendValueInput("text1")
				.setCheck(null);

			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5B116");
			this.setTooltip("Set an action variable for a CamJam Kit 3");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot");
		},
	};

	Blockly.Blocks["timeset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("morning"), "morning")
				.appendField(" = TimeOfDay(time(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("), time(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("))");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E57E");
			this.setTooltip("Setup Time Of Day");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_other.html#timeofday");
		}
	};

	Blockly.Blocks["cpuset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("cpu"), "cpu")
				.appendField(" = CPUTemperature(min_temp(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("), max_temp(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("))");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E57E");
			this.setTooltip("Setup CPU Temp");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_other.html#cputemperature");
		}
	};

	Blockly.Blocks["adc"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("var"), "var")
				.appendField(" = ")
				.appendField(new Blockly.FieldDropdown([["MCP3001", "MCP3001"], ["MCP3002", "MCP3002"], ["MCP3004", "MCP3004"], ["MCP3008", "MCP3008"], ["MCP3201", "MCP3201"], ["MCP3202", "MCP3202"], ["MCP3204", "MCP3204"], ["MCP3208", "MCP3208"], ["MCP3302", "MCP3302"], ["MCP3302", "MCP3302"], ["MCP3304", "MCP3304"]]), "NAME")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E57E");
			this.setTooltip("Setup Analog to Digital Converters");
			this.setHelpUrl("https://gpiozero.readthedocs.io/en/stable/api_spi.html#analog-to-digital-converters-adc");
		}
	};

	Blockly.Blocks["import_sonic"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from psonic import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["sampleson"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sample(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["synth"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("use_synth(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["play"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("play(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
			this.setTooltip("Play a single note");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["sleep1"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sleep(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
			this.setTooltip("Play a single note");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["liveloop"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("live_loop_")
				.appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "num");
			this.appendStatementInput("DO")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
			this.setTooltip("Create a live loop with Sonic Pi");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ehimport"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import explorerhat");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);

			this.setTooltip("Import the Explorer Hat library");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ehtouch"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("explorerhat.touch.")
				.appendField(new Blockly.FieldDropdown([["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"], ["five", "five"], ["six", "six"], ["seven", "seven"], ["eight", "eight"]]), "padnumber")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["is_pressed", "is_pressed"], ["is_held", "is_held"], ["pressed", "pressed"], ["held", "held"], ["released", "released"]]), "event")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);

			this.setTooltip("Control the eight cap touch buttons on Explorer Hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ehinput"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("explorerhat.input.")
				.appendField(new Blockly.FieldDropdown([["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"]]), "inputnumber")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["read", "read"], ["has_changed", "has_changed"], ["on_changed", "on_changed"], ["on_low", "on_low"], ["on_high", "on_high"], ["clear_events", "clear_events"]]), "inputevent")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);

			this.setTooltip("Control the 4 inputs on Explorer Hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ehoutput"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("explorerhat.output.")
				.appendField(new Blockly.FieldDropdown([["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"]]), "outputnumber")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["toggle", "toggle"], ["write", "write"], ["blink", "blink"], ["pulse", "pulse"], ["fade", "fade"], ["stop", "stop"]]), "outputevent")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);

			this.setTooltip("Contol the 4 outputs on Explorer Hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ehlights"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("explorerhat.light.")
				.appendField(new Blockly.FieldDropdown([["yellow", "yellow"], ["blue", "blue"], ["red", "red"], ["green", "green"]]), "lightnumber")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"], ["toggle", "toggle"], ["write", "write"], ["blink", "blink"], ["pulse", "pulse"], ["fade", "fade"], ["stop", "stop"]]), "lightevent")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);

			this.setTooltip("Control the 4 lights on Explorer Hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ehanalog"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("explorerhat.analog.")
				.appendField(new Blockly.FieldDropdown([["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"]]), "analognumber")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["read", "read"], ["changed", "changed"]]), "analogevent")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);

			this.setTooltip("Control the 4 Analog Inputs on Explorer Hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ehmotor"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("explorerhat.motor.")
				.appendField(new Blockly.FieldDropdown([["one", "one"], ["two", "two"]]), "motornumber")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["forwards", "forwards"], ["backwards", "backwards"], ["invert", "invert"], ["speed", "speed"], ["stop", "stop"]]), "motorevent")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);

			this.setTooltip("Control the 2 motor outputs on Explorer Hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["blinktimport"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from blinkt import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(90);
			this.setTooltip("Import the Blinkt! library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["blinktsetpixel"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("set_pixel(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(90);
			this.setTooltip("Set a pixel on the Blinkt!");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["blinktshow"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("show()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(90);
			this.setTooltip("Update the Blinkt! to show your code");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["blinktsetbrightness"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("set_brightness(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(90);
			this.setTooltip("Set the brightness of your Blinkt!");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["blinktsetall"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("set_all(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(90);
			this.setTooltip("Set all the pixels on your Blinkt!");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["blinktsetallbright"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("set_all(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(",");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(90);
			this.setTooltip("Set all the pixels on your Blinkt! with brightness control");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["blinktclear"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("clear()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(90);
			this.setTooltip("Clear all pixels on your Blinkt!");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["import_requests"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import requests");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("Imports the requests library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["import_json"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import json");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("Imports the JSON library.");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["requests_get"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.get(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_post"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.post(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_put"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.put(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_delete"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.delete(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_head"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.head(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_options"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.options(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_url"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["url", "url"], ["text", "text"], ["encoding", "encoding"], ["content", "content"], ["json", "json"], ["raw", "raw"], ["status_code", "status_code"], ["headers", "headers"], ["history", "history"]]), "NAME");
			this.setOutput(true, null);
			this.setColour("#C2E434");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_cookies"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".cookies[");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("]");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_rjar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("jar"), "jar")
				.appendField(" = requests.cookies.RequestsCookieJar()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_jset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("jar"), "jar")
				.appendField(".set(");
			this.appendValueInput("NAME")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_hget"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".headers.get(");
			this.appendValueInput("NAME")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["requests_raise"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".raise_for_status()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C2E434");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["senseshow"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sense.show_message(\"");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("Shows a message on the Sense Hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["senseshowvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sense.show_message(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("Show a variable on the display");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["senseinit"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sense = SenseHat()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("Detects the sense hat");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["senseimport"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from sense_hat import SenseHat");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("Imports the Sense Hat library");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["senseimportemu"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from sense_emu import SenseHat");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("Imports the Sense Hat Emulator library");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["senserotation"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sense.set_rotation(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["senseflip"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sense.flip_h(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["senseflipv"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sense.flip_v(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["sensesetpix"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("sense.set_pixels(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E55F2B");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["importmb"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import microbit");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C227E2");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks["displayscrolltext"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microbit.display.scroll(\"");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C227E2");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["displayscrollvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microbit.display.scroll(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C227E2");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["microsleep"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microbit.sleep(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C227E2");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["displayshow"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microbit.display.show(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C227E2");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["displayclear"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microbit.display.clear()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C227E2");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_turtle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from turtle import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Import Turtle library");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["turtle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(" = Turtle()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Initialize the turtle");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["screeninit"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("screen"), "wn")
				.appendField(" = Screen()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Initialize the Turtle screen");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["background"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("screen"), "wn")
				.appendField(".bgcolour(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Change the background");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["directions"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["forward", "forward"], ["left", "left"], ["right", "right"], ["backward", "backward"]]), "options")
				.appendField("(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Make the turtle move");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["penud"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".pen")
				.appendField(new Blockly.FieldDropdown([["up", "up"], ["down", "down"]]), "options")
				.appendField("()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Pen up and down");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pen"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".pen()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Initialize the pen");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["colourpen"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".pencolor(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Change the colour");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["colour"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".color(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Change the colour");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["colourmode"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("screen"), "wn")
				.appendField(".colormode(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Change the colourmode");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["penwidth"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".width(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Change the width");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["circle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".circle(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("Draw a circle");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["goto"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".goto(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7289DA");
			this.setTooltip("go to x&y");
			this.setHelpUrl("");
		}
	};
}