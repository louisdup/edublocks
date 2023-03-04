export default function getDefinitions(): void {
	Blockly.Blocks["import_board"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import board");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the board library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["events_start_here"] = { 
		init: function(): void {
			this.appendDummyInput()
				.appendField("# Start code here"); 
			this.setNextStatement(true, null);
			this.setColour("#FFBF00");
			Blockly.BlockSvg.START_HAT = true;
		}
	};

	Blockly.Blocks["import_time"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import time");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the time library.");
			this.setHelpUrl("");
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
			this.setHelpUrl("");
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
			this.setHelpUrl("");
		},
	};

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
			this.setHelpUrl("");
		},
	};

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
			this.setHelpUrl("");
		},
	};

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

	Blockly.Blocks["try"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("try:");
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
			this.setHelpUrl("");
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
			this.setHelpUrl("");
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
			this.setHelpUrl("");
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
			this.setHelpUrl("");
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
			this.setHelpUrl("");
		},
	};

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
			this.setHelpUrl("");
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

	Blockly.Blocks["except"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("except");
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
			this.setTooltip("Except");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["with"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("with");
			this.appendValueInput("iftext")
				.setCheck("null");
			this.appendDummyInput()
				.appendField("as");
			this.appendValueInput("iftext2")
				.setCheck("null");
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("ifstate")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("With block");
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
			this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
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
			this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
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
			this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
			this.setTooltip("Text input for inline input");
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
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
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
			this.setColour("#ff0066");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setTooltip("negates a Boolean value");
			this.setHelpUrl("");
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
			this.setHelpUrl("");
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

	Blockly.Blocks["import_digitalio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from digitalio import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#2C97DF");
			this.setTooltip("Imports the DigitalIO library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["pinconfig"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(" = DigitalInOut(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#2C97DF");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pindirection"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".direction = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#2C97DF");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pull"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".pull = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput();
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#2C97DF");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pinvalue"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput();
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#2C97DF");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["valuein"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#2C97DF");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_analogio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from analogio import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E67D21");
			this.setTooltip("Imports the DigitalIO library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["analog_in"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("analogin"), "pin")
				.appendField(" = AnalogIn(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E67D21");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["analog_out"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("analog_out"), "pin")
				.appendField(" = AnalogOut(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E67D21");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["analogpinvalue"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput();
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E67D21");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["valinline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".value");
			this.setOutput(true, null);
			this.setColour("#E67D21");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["setneo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "NAME")
				.appendField(" = neopixel.NeoPixel(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(150);
			this.setTooltip("Configure Neopixels");
			this.setHelpUrl("");
		}
	}; 

	Blockly.Blocks["fill"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "NAME")
				.appendField(".fill(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(150);
			this.setTooltip("Configure Neopixels");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["neovarnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "NAME")
				.appendField("[");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("] = (");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(150);
			this.setTooltip("Set Neopixel Colour");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["importneo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import neopixel");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(150);
			this.setTooltip("Import Neopixel Library");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["neoshow"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "NAME")
				.appendField(".show()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(150);
			this.setTooltip("Show the set neopixel config");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["neoclear"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "NAME")
				.appendField(".clear()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(150);
			this.setTooltip("Clear the set neopixel config");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_touchio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import touchio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E84C3D");
			this.setTooltip("Imports the TouchIO library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["touch_conf"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("touch"), "pin")
				.appendField(" = touchio.TouchIn(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E84C3D");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["touch_valinline"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("touch"), "pin")
				.appendField(".value");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E84C3D");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_servo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from adafruit_motor import servo");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#9C56B8");
			this.setTooltip("Imports the Adafruit Motor Servo library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["servo_conf"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("my_servo"), "pin")
				.appendField(" = servo.Servo(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#9C56B8");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["servo_value"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("my_servo"), "pin")
				.appendField(".angle = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput();
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#9C56B8");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_audio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import audioio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("Imports the DigitalIO library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["audio_enable"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "pin")
				.appendField(".switch_to_output(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_conf"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "pin")
				.appendField(" = audioio.AudioOut(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_wav"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "pin")
				.appendField(" = audioio.WaveFile(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_open"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("data"), "data")
				.appendField(" = open(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_playing"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "pin")
				.appendField(".playing");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_raw"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("sample"), "pin")
				.appendField(" = audioio.RawSample(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_play"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "pin")
				.appendField(".play(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio_stop"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("audio"), "pin")
				.appendField(".stop()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#4CE254");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_pulseio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import pulseio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF4A60");
			this.setTooltip("Imports the PulseIO library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["import_simpleio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import simpleio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF4A60");
			this.setTooltip("Imports the PulseIO library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["pwm_conf"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pwm"), "pwm")
				.appendField(" = pulseio.PWMOut(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", duty_cycle=");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", frequency = ");
			this.appendValueInput("text3")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF4A60");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pwm_conf2"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(" = pulseio.PWMOut(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF4A60");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["simple_tone"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("simple.tone(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF4A60");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pwm_dc"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".duty_cycle = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF4A60");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pwm_freq"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("pin"), "pin")
				.appendField(".frequency = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF4A60");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_dotstar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import adafruit_dotstar");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516");
			this.setTooltip("Scroll a Message");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["vardotstar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(" = adafruit_dotstar.DotStar(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["ledfill"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(".fill(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["dsbrightness"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField(".brightness = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["dsvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("led"), "led")
				.appendField("[");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("] = (");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516");
			this.setTooltip("Set Neopixel Colour");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_micro"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import microcontroller");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#22a6b3");
			this.setTooltip("Imports the microcontroller library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["cputemp"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microcontroller.cpu.temperature");
			this.setOutput(true, null);
			this.setColour("#22a6b3");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	// Storage

	Blockly.Blocks["import_storage"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import storage");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#22a6b3");
			this.setTooltip("Imports the storage library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["storage_remount"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("storage.remount(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#22a6b3");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["open"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("open(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#22a6b3");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["write"] = {
		init: function(): void {
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".write(");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#22a6b3");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["import_cpx"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from adafruit_circuitplayground.express import cpx");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#556EE6");
			this.setTooltip("Imports the CPX library.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["redled"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.red_led = ");
			this.appendValueInput("text")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["switch"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.switch");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["detect_taps"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.detect_taps =");
			this.appendValueInput("text")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["tapped"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.tapped");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["shake"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.shake(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["light"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.light");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["acc"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.acceleration");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["button"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.button_")
				.appendField(new Blockly.FieldDropdown([["a","a"], ["b","b"]]), "button");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["temp"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.acceleration");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["touchdrop"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.touch_")
				.appendField(new Blockly.FieldDropdown([["a1","a1"], ["a2","a2"], ["a3","a3"], ["a4","a4"], ["a5","a5"], ["a6","a6"], ["a7","a7"]]), "button");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["playtone"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.play_tone(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("text2")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["starttone"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.start_tone(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["stoptone"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.stop_tone()");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["playfile"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("cpx.play_file(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#556EE6");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

}