export default function getDefinitions(): void {
	Blockly.Blocks["import_microbit"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("from microbit import *");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the microbit library.");
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

	Blockly.Blocks["import_utime"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import utime");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ff0066");
			this.setTooltip("Imports the utime library.");
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

	Blockly.Blocks["comma"] = {
		init: function(): void {
			this.appendValueInput("in1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([[",",","], ["+","+"]]), "commadd");
			this.appendValueInput("in2")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
		}
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
				.appendField("sleep(");
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

	Blockly.Blocks["sleepus"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("utime.sleep_us(");
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

	Blockly.Blocks["operators3"] = {
		init: function(): void {
			this.appendValueInput("first")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["/","/"], ["%","%"], ["*","*"]]), "operators");
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

	Blockly.Blocks["mbint"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("int(");
			this.appendValueInput("bool")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
			this.setTooltip("Changes to an int");
			this.setHelpUrl("http://www.example.com/");
		},
	};

	Blockly.Blocks["ticks"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("utime.ticks_us()");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#ff0066");
			this.setTooltip("Ticks US, Utime");
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

	Blockly.Blocks["scrollnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.scroll(\""); 
			this.appendValueInput("displaytext")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Scroll a Message");
			this.setHelpUrl("");
		},
	};

	// deprecated

	Blockly.Blocks["scroll"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.scroll(\"")
				.appendField(new Blockly.FieldTextInput("Hello World"), "message")
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Scroll a Message");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["scrollvar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.scroll(")
				.appendField(new Blockly.FieldTextInput(""), "message")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Scroll a variable");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["scrollvarnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.scroll("); 
			this.appendValueInput("displaytextvar")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Scroll a variable");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["imagenew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.show("); 
			this.appendValueInput("imagevar")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Show an image");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["image"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.show(")
				.appendField(new Blockly.FieldTextInput(""), "image")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Display an image");
			this.setHelpUrl("");
		},
	};

	// deprecated

	Blockly.Blocks["getpixel"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.get_pixel(")
				.appendField(new Blockly.FieldTextInput(""), "xy")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Gets a pixel value");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["getpixelnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.get_pixel(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Gets a pixel value");
			this.setHelpUrl("");
		},
	};

	// deprecated

	Blockly.Blocks["setpixel"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.set_pixel(")
				.appendField(new Blockly.FieldTextInput(""), "setpix")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Set a pixel");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["setpixelnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.set_pixel(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Set a pixel");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["disclear"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.clear()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Clear the display");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["disonoff"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("display.")
				.appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "NAME")
				.appendField("()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Turn the display on/off");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["imagecreate"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("image"), "image")
				.appendField(" = (\"")
				.appendField(new Blockly.FieldNumber(0, 9), "1")
				.appendField(new Blockly.FieldNumber(0, 9), "2")
				.appendField(new Blockly.FieldNumber(0, 9), "3")
				.appendField(new Blockly.FieldNumber(0, 9), "4")
				.appendField(new Blockly.FieldNumber(0, 9), "5")
				.appendField(":\"")
				.setAlign(Blockly.ALIGN_RIGHT);
			this.appendDummyInput()
				.appendField(new Blockly.FieldNumber(0, 9), "6")
				.appendField(new Blockly.FieldNumber(0, 9), "7")
				.appendField(new Blockly.FieldNumber(0, 9), "8")
				.appendField(new Blockly.FieldNumber(0, 9), "9")
				.appendField(new Blockly.FieldNumber(0, 9), "10")
				.appendField(":\"")
				.setAlign(Blockly.ALIGN_RIGHT);
			this.appendDummyInput()
				.appendField(new Blockly.FieldNumber(0, 9), "11")
				.appendField(new Blockly.FieldNumber(0, 9), "12")
				.appendField(new Blockly.FieldNumber(0, 9), "13")
				.appendField(new Blockly.FieldNumber(0, 9), "14")
				.appendField(new Blockly.FieldNumber(0, 9), "15")
				.appendField(":\"")
				.setAlign(Blockly.ALIGN_RIGHT);
			this.appendDummyInput()
				.appendField(new Blockly.FieldNumber(0, 9), "16")
				.appendField(new Blockly.FieldNumber(0, 9), "17")
				.appendField(new Blockly.FieldNumber(0, 9), "18")
				.appendField(new Blockly.FieldNumber(0, 9), "19")
				.appendField(new Blockly.FieldNumber(0, 9), "20")
				.appendField(":\"")
				.setAlign(Blockly.ALIGN_RIGHT);
			this.appendDummyInput()
				.appendField(new Blockly.FieldNumber(0, 9), "21")
				.appendField(new Blockly.FieldNumber(0, 9), "22")
				.appendField(new Blockly.FieldNumber(0, 9), "23")
				.appendField(new Blockly.FieldNumber(0, 9), "24")
				.appendField(new Blockly.FieldNumber(0, 9), "25")
				.appendField("\")")
				.setAlign(Blockly.ALIGN_RIGHT);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setInputsInline(false);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	const expressions: Array<Array<string>> = [
		["Image.HEART","Image.HEART"], 
		["Image.HEART_SMALL","Image.HEART_SMALL"], 
		["Image.HAPPY","Image.HAPPY"],
		["Image.SMILE","Image.SMILE"], 
		["Image.SAD","Image.SAD"], 
		["Image.CONFUSED","Image.CONFUSED"],
		["Image.ANGRY","Image.ANGRY"], 
		["Image.ASLEEP","Image.ASLEEP"],
		["Image.SURPRISED","Image.SURPRISED"], 
		["Image.SILLY","Image.SILLY"], 
		["Image.FABULOUS","Image.FABULOUS"],
		["Image.MEH","Image.MEH"]
	];

	const clocks: Array<Array<string>> = [
		["Image.CLOCK1","Image.CLOCK1"], 
		["Image.CLOCK2","Image.CLOCK2"], 
		["Image.CLOCK3","Image.CLOCK3"],
		["Image.CLOCK4","Image.CLOCK4"], 
		["Image.CLOCK5","Image.CLOCK5"], 
		["Image.CLOCK6","Image.CLOCK6"],
		["Image.CLOCK7","Image.CLOCK7"], 
		["Image.CLOCK8","Image.CLOCK8"],
		["Image.CLOCK9","Image.CLOCK9"], 
		["Image.CLOCK10","Image.CLOCK10"], 
		["Image.CLOCK11","Image.CLOCK11"],
		["Image.CLOCK12","Image.CLOCK12"]
	];

	const shapes: Array<Array<string>> = [
		["Image.TRIANGLE","Image.TRIANGLE"], 
		["Image.TRIANGLE_LEFT","Image.TRIANGLE_LEFT"], 
		["Image.CHESSBOARD","Image.CHESSBOARD"],
		["Image.DIAMOND","Image.DIAMOND"], 
		["Image.DIAMOND_SMALL","Image.DIAMOND_SMALL"], 
		["Image.SQUARE","Image.SQUARE"],
		["Image.SQUARE_SMALL","Image.SQUARE_SMALL"], 
		["Image.PITCHFORK","Image.PITCHFORK"],
		["Image.MUSIC_CROTCHET","Image.MUSIC_CROTCHET"], 
		["Image.MUSIC_QUAVER","Image.MUSIC_QUAVER"], 
		["Image.MUSIC_QUAVERS","Image.MUSIC_QUAVERS"],
		["Image.PITCHFORK","Image.PITCHFORK"],
		["Image.XMAS","Image.XMAS"],
		["Image.PACMAN","Image.PACMAN"],
		["Image.TARGET","Image.TARGET"],
		["Image.TSHIRT","Image.TSHIRT"],
		["Image.ROLLERSKATE","Image.ROLLERSKATE"],
		["Image.HOUSE","Image.HOUSE"],
		["Image.SWORD","Image.SWORD"],
		["Image.UMBRELLA","Image.UMBRELLA"]
	];

	const animals: Array<Array<string>> = [
		["Image.RABBIT","Image.RABBIT"], 
		["Image.COW","Image.COW"], 
		["Image.DUCK","Image.DUCK"],
		["Image.TORTOISE","Image.TORTOISE"], 
		["Image.BUTTERFLY","Image.BUTTERFLY"], 
		["Image.STICKFIGURE","Image.STICKFIGURE"],
		["Image.GHOST","Image.GHOST"], 
		["Image.GIRAFFE","Image.GIRAFFE"],
		["Image.SKULL","Image.SKULL"], 
		["Image.SNAKE","Image.SNAKE"]
	];

	Blockly.Blocks["expressions"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(expressions), "image");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setInputsInline(true);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Choose an expression");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["clocks"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(clocks), "image");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setInputsInline(true);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Choose a clock face");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["shapes"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(shapes), "image");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setInputsInline(true);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Choose a shape");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["animals"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(animals), "image");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setInputsInline(true);
			this.setColour("#C3E516","#C3E516","#a4b835");
			this.setTooltip("Choose an animal");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["buttonispressed"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("button_")
				.appendField(new Blockly.FieldDropdown([["a", "a"], ["b", "b"]]), "NAME")
				.appendField(".is_pressed()");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#167EE5","#167EE5","#3775b3");
			this.setTooltip("Button Is Pressed");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["buttonwaspressed"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("button_")
				.appendField(new Blockly.FieldDropdown([["a", "a"], ["b", "b"]]), "NAME")
				.appendField(".was_pressed()");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#167EE5","#167EE5","#3775b3");
			this.setTooltip("Button Was Pressed");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["accisgesturenew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.is_gesture(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true); 
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour("#E57E16","#E57E16","#b87533");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["accisgesture"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.is_gesture(")
				.appendField(new Blockly.FieldTextInput(""), "gesture1")
				.appendField(")");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E57E16","#E57E16","#b87533");
			this.setTooltip("If the gesture is this, then do this");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["accwasgesturenew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.was_gesture(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true); 
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E57E16","#E57E16","#b87533");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["accwasgesture"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.was_gesture(")
				.appendField(new Blockly.FieldTextInput(""), "gesture2")
				.appendField(")");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E57E16","#E57E16","#b87533");
			this.setTooltip("If the gesture is this, then do this");
			this.setHelpUrl("");
		},
	};

	const gestures: Array<Array<string>> = [
		["'shake'", "'shake'"],
		["'up'","'up'"], 
		["'down'","'down'"], 
		["'left'","'left'"],
		["'right'", "'right'"],
		["'face up'", "'face up'"],
		["'face down'", "'face down'"],
		["'freefall'", "'freefall'"],
		["'3g'", "'3g'"],
		["'6g'", "'6g'"],
		["'8g'", "'8g'"],
	];

	Blockly.Blocks["accgestures"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(gestures), "gestures");
			this.setOutput(true,"String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E57E16","#E57E16","#b87533");
			this.setTooltip("list of possible gestures");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["acccurrentgesture"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.current_gesture()");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E57E16","#E57E16","#b87533");
			this.setTooltip("reads the current gesture");
		}
	};

	Blockly.Blocks["accget"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.")
				.appendField(new Blockly.FieldDropdown([
					["get_x()", "get_x()"],
					["get_y()", "get_y()"],
					["get_z()", "get_z()"]
				]), "axis");
			this.setOutput(true,"Number");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E57E16","#E57E16","#b87533");
			this.setTooltip("reads the current movement on the selected axis");
		}
	};

	Blockly.Blocks["compasscalibrate"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("compass.calibrate()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#A016E5", "#A016E5", "#732c91");
			this.setTooltip("Calibrate the compass module");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["compasscalibrated"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("compass.is_calibrated()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#A016E5", "#A016E5", "#732c91");
			this.setTooltip("Is the compass calibrated?");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["radiosend"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("radio.send(")
				.appendField(new Blockly.FieldTextInput("\"hello\""), "send")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Send a radio command");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["radiosendnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("radio.send(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Send a radio command");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["radioconf"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("radio.config(")
				.appendField(new Blockly.FieldTextInput(""), "conf")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Configure Radio");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["radioconfnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("radio.config(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Configure Radio");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["imradio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import radio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Import Radio");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["radioon"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("radio.on()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Turn Radio On");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["ifradio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("if ")
				.appendField(new Blockly.FieldVariable("incoming"), "incoming")
				.appendField(" == ")
				.appendField(new Blockly.FieldTextInput(""), "sentitem")
				.appendField(":");
			this.appendStatementInput("DO")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Check if there is an incoming radio command.");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["incoming"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("incoming"), "incoming")
				.appendField(" = radio.receive()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7EE516", "#7EE516", "#72ad33");
			this.setTooltip("Initialize receiver");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["imspeech"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("import speech");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E5E5","#16E5E5","#33a8a6");
			this.setTooltip("Imports the speech library");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["speechsay"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("speech.say(\"")
				.appendField(new Blockly.FieldTextInput(""), "words")
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E5E5","#16E5E5","#33a8a6");
			this.setTooltip("Say something");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["speechsaynew"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("speech.say(\"");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E5E5","#16E5E5","#33a8a6");
			this.setTooltip("Say something");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["speechpro"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("speech.pronounce(\"")
				.appendField(new Blockly.FieldTextInput(""), "pro")
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E5E5","#16E5E5","#33a8a6");
			this.setTooltip("Pronounce something");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["speechpronew"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("speech.pronounce(\"");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E5E5","#16E5E5","#33a8a6");
			this.setTooltip("Pronounce something");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["speechsing"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("speech.sing(\"")
				.appendField(new Blockly.FieldTextInput(""), "sing")
				.appendField("\")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E5E5","#16E5E5","#33a8a6");
			this.setTooltip("Sing something");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["speechsingnew"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField("speech.sing(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E5E5","#16E5E5","#33a8a6");
			this.setTooltip("Sing something");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["musicimport"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import music");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Import Music");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["audioimport"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("import audio");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Import Audio");
			this.setHelpUrl("");
		},
	};

	const music: Array<Array<string>> = [
		["music.DADADADUM", "music.DADADADUM"],
		["music.ENTERTAINER", "music.ENTERTAINER"],
		["music.PRELUDE", "music.PRELUDE"],
		["music.ODE", "music.ODE"],
		["music.NYAN", "music.NYAN"],
		["music.RINGTONE", "music.RINGTONE"],
		["music.FUNK", "music.FUNK"],
		["music.BLUES", "music.BLUES"],
		["music.BIRTHDAY", "music.BIRTHDAY"],
		["music.WEDDING", "music.WEDDING"],
		["music.FUNERAL", "music.FUNERAL"],
		["music.PUNCHLINE", "music.PUNCHLINE"],
		["music.PYTHON", "music.PYTHON"],
		["music.BADDY", "music.BADDY"],
		["music.CHASE", "music.CHASE"],
		["music.BA_DING", "music.BA_DING"],
		["music.WAWAWAWAA", "music.WAWAWAWAA"],
		["music.JUMP_UP", "music.JUMP_UP"],
		["music.JUMP_DOWN", "music.JUMP_DOWN"],
		["music.POWER_UP", "music.POWER_UP"],
		["music.POWER_DOWN", "music.POWER_DOWN"]
	];

	Blockly.Blocks["songs"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(music), "songs");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setInputsInline(true);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Choose a song");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["musicplay"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.play(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Play Music");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["audioplay"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("audio.play(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Play from Audio Library");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["audio_options"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["Sound.HAPPY","Sound.HAPPY"], ["Sound.GIGGLE","Sound.GIGGLE"], ["Sound.HELLO","Sound.HELLO"], ["Sound.MYSTERIOUS","Sound.MYSTERIOUS"], ["Sound.SAD","Sound.SAD"], ["Sound.SLIDE","Sound.SLIDE"], ["Sound.SOARING","Sound.SOARING"], ["Sound.SPRING","Sound.SPRING"], ["Sound.TWINKLE","Sound.TWINKLE"], ["Sound.YAWN","Sound.YAWN"]]), "options");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Sound expression options");
			this.setHelpUrl(""); 
		}
	};

	Blockly.Blocks["set_volume"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("set_volume(");
			this.appendValueInput("input")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Set the volume 0-255\t");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["volumeslider"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldSlider("128", "0", "255", "1", "1", "Volume"), "slider");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
			this.setTooltip("Slider input for inline input");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["musicpitch"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.pitch(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Change music pitch");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["music_pin"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin = ");
			this.appendValueInput("pin")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#E5BC16");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setTooltip("Assign pin to music");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["musicreset"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.reset()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Reset Music");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["musicstop"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.stop(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Stop music");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["musictempo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.set_tempo(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Change music tempo");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["musicgettempo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("music.get_tempo()");
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E5BC16","#E5BC16","#a1882d");
			this.setTooltip("Get tempo");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["microphone_current"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.current_sound()");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour("#008080");
			this.setTooltip("Get current sound loud/quiet");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["microphone_level"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.")
				.appendField(new Blockly.FieldDropdown([["LOUD","LOUD"], ["QUIET","QUIET"]]), "level");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#008080");
			this.setTooltip("Reference the onboard microphone level");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["microphone_sound"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.sound_level()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#008080");
			this.setTooltip("Reference the onboard microphone level");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["microphone_wassound"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.was_sound(");
			this.appendValueInput("level")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour("#008080");
			this.setTooltip("Check if a loud/quiet sound occurred since the last call to was_sound()");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["set_threshold"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.set_threshold(");
			this.appendValueInput("input")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#008080");
			this.setTooltip("Set threshold for sound 0-255\t");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["microphone_getsounds"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("microphone.get_sounds()");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour("#008080");
			this.setTooltip("Get history of sounds since last call to get_sounds()");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["setneonew"] = {
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
			this.setColour("#16E57E","#16E57E","#33a86b");
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
			this.setColour("#16E57E","#16E57E","#33a86b");
			this.setTooltip("Set Neopixel Colour");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["setneo"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "NAME")
				.appendField(" = neopixel.NeoPixel(")
				.appendField(new Blockly.FieldTextInput(""), "inputneo")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E57E","#16E57E","#33a86b");
			this.setTooltip("Configure Neopixels");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["neovar"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("np"), "NAME")
				.appendField("[")
				.appendField(new Blockly.FieldTextInput(""), "neonum")
				.appendField("] = (")
				.appendField(new Blockly.FieldTextInput(""), "colour")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#16E57E","#16E57E","#33a86b");
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
			this.setColour("#16E57E","#16E57E","#33a86b");
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
			this.setColour("#16E57E","#16E57E","#33a86b");
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
			this.setColour("#16E57E","#16E57E","#33a86b");
			this.setTooltip("Clear the set neopixel config");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pintouchednew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".is_touched()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("If this pin is touched");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["logotouched"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin_logo.is_touched()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("If logo pin is touched");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pin_speaker"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin_speaker");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616");
			this.setTooltip("Reference onboard speaker pin");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks["analogreadnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".read_analog()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Read Analog");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["digitalreadnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".read_digital()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Read Digital");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["writeanalognew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("text") 
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".write_analog(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Write Analog");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["writedigitalnew"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".write_digital(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Write Digital");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks["pin_pull"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".set_pull(");
			this.appendValueInput("text1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Set Pin Pull Value");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["pintouched"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin")
				.appendField(new Blockly.FieldTextInput("0"), "pinno")
				.appendField(".is_touched()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("If this pin is touched");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks["analogread"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin")
				.appendField(new Blockly.FieldTextInput("0"), "pinno")
				.appendField(".read_analog()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Read Analog");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["digitalread"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin")
				.appendField(new Blockly.FieldTextInput("0"), "pinno")
				.appendField(".read_digital()");
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Read Digital");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["writeanalog"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin")
				.appendField(new Blockly.FieldTextInput("0"), "pinno")
				.appendField(".write_analog(")
				.appendField(new Blockly.FieldTextInput(""), "analog")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Write Analog");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["writedigital"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("pin")
				.appendField(new Blockly.FieldTextInput("0"), "pinno")
				.appendField(".write_digital(")
				.appendField(new Blockly.FieldTextInput(""), "digital")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E51616","#E51616","#a82f2f");
			this.setTooltip("Write Digital");
			this.setHelpUrl("");
		}
	};
}