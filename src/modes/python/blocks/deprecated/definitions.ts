Blockly.Blocks['variables_get'] = {
    init: function(): void {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("var"), "VAR");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#0000CD");
    }
};
  
  
Blockly.Blocks['variables_set'] = {
    init: function(): void {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(""), "VAR")
        .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME')
      this.appendValueInput("varset")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
    }
};

Blockly.Blocks['websleepnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("time.sleep(");
      this.appendValueInput("sleep")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
    }
};

Blockly.Blocks['webtypeanything'] = {
    init: function() {
      this.appendValueInput("stuff")
        .setCheck(null);
      this.appendDummyInput()   
          .appendField("# your own code");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip("Type any python code into this block");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['webdf'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput("params")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('call a define function');
      this.setHelpUrl('');
    },
};

Blockly.Blocks['webpass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pass');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Pass to the next command');
      this.setHelpUrl('');
    },
};

Blockly.Blocks['webprintnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print("')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('" )');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Use this to print a string to the output box.');
      this.setHelpUrl('');
    },
};

Blockly.Blocks["textinline"] = {
    init: function() {
      this.appendDummyInput().appendField(new Blockly.FieldTextInput(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
      this.setTooltip("Text input for inline input");
      this.setHelpUrl("");
    }
};

Blockly.Blocks["stringinline"] = {
    init: function() {
      this.appendDummyInput().appendField(new Blockly.FieldString(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
      this.setTooltip("String input for inline input");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['webvarprint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(')
      this.appendValueInput('var')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Use this to print a variable, a number, or even a string if you put in the quotes yourself.');
      this.setHelpUrl('');
    },
};

Blockly.Blocks['input_web'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("input(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    }
};

Blockly.Blocks['webint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('int(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    },
};

Blockly.Blocks['webstr'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('str(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    },
  };

Blockly.Blocks['webfloat'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('float(');
      this.appendValueInput("number")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    },
};

Blockly.Blocks['webround'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('round(');
      this.appendValueInput("number")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    },
};

Blockly.Blocks['weblen'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('len(');
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    },
};

Blockly.Blocks['upper_lower'] = {
    init: function() {
      this.appendValueInput("string")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["upper","upper"], ["lower","lower"]]), "upperlower")
          .appendField("()");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#F89621");
    }
};

Blockly.Blocks['webcomma'] = {
    init: function() {
      this.appendValueInput("in1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["+","+"], [",",","]]), "commadd");
      this.appendValueInput("in2")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    }
};

Blockly.Blocks['brackets'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour('#F89621');
    }
};

Blockly.Blocks['webifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if');
      this.appendValueInput("iftext")
        .setCheck("Boolean");
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#49B04D");
    },
};

Blockly.Blocks['webelifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif');
      this.appendValueInput('iftext')
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#49B04D");
    },
};

Blockly.Blocks['webelse'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('else:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#49B04D");
    },
};
  
Blockly.Blocks['webinternal'] = {
    init: function() {
      var ltrOperators = [
        ['==', '=='],
        ['!=', '!='],
        ['<', '<'],
        ['<=', '<='],
        ['>', '>'],
        ['>=', '>=']
      ];
      var OPERATORS = ltrOperators;
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(OPERATORS), "choose")
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#49B04D");
    }
};

Blockly.Blocks['webandor'] = {
    init: function() {
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["and", "and"], ["or", "or"]]), "choose")
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#49B04D");
    }
};

Blockly.Blocks['webnot'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('not'); 
      this.appendValueInput("bool")
        .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#49B04D");
    },
};

Blockly.Blocks['create_list'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("myList"), "list")
          .appendField(" = [");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
    }
};
  
Blockly.Blocks['calllist'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("myList"), "list");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
    }
};

Blockly.Blocks['selectlist'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("myList"), "list")
          .appendField("[");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
    }
};

Blockly.Blocks['selectlist2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("myList"), "list")
          .appendField("[");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#15BAD4");
    }
};

Blockly.Blocks['optionlist'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("myList"), "list")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["append","append"], ["insert","insert"], ["extend","extend"], ["pop","pop"], ["remove","remove"]]), "options")
          .appendField("(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
    }
};

Blockly.Blocks['assign_index_array'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("myList"), "list")
          .appendField("[");
      this.appendValueInput("index")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("] = ");
      this.appendValueInput("value")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
    }
};

Blockly.Blocks['get_array'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("myList"), "list");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#15BAD4");
    }
};

Blockly.Blocks['webwhileout'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while');
      this.appendValueInput("cond")
        .setCheck("Boolean");
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

Blockly.Blocks['webfor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('letter')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in range(');
      this.appendValueInput('no')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('');
      this.setHelpUrl('Create a for loop');
    },
};

Blockly.Blocks['webadvancedforloops'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('x')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in');
      this.appendValueInput('y')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(":");
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('');
      this.setHelpUrl('');
    },
};

Blockly.Blocks['web_break'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("break");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
    }
};

Blockly.Blocks['loop_get'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("i"), "VAR");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#644A9E");
    }
};

Blockly.Blocks['webdefine'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('def ');
      this.appendValueInput('1')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput('2')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
    },
};

Blockly.Blocks['inline_def'] = {
    init: function() {
      this.appendValueInput("def")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("(");
      this.appendValueInput("input")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setOutput(true, null);
      this.setColour("#CDDA36");
   this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND)
    }
};

Blockly.Blocks['self'] = {
    init: function() {
      this.appendDummyInput()
        .appendField('self.')
        .appendField(new Blockly.FieldVariable(""), "VAR")
        .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME')
      this.appendValueInput("varset")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
    }
};

Blockly.Blocks['webreturn2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return');
      this.appendValueInput('return')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setColour("#CDDA36");
    },
};

Blockly.Blocks['webclass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('class')
      this.appendValueInput("class")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
    },
};

Blockly.Blocks['operators2'] = {
    init: function() {
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["/","/"], ["%","%"], ["*","*"], ["//", "//"]]), "operators");
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#1B173D");
    }
};

Blockly.Blocks['turtle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(" = Turtle()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Initialize the turtle");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['turtle_fill'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("turtle"), "turtle")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["begin_fill","begin_fill"], ["end_fill","end_fill"]]), "fill")
          .appendField("()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("Begin/End Shape Fill");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['screeninit'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("screen"), "wn")
        .appendField(" = Screen()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Initialize the Turtle screen");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['background'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("screen"), "wn")
        .appendField(".bgcolour(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Change the background");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['directions'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["forward", "forward"], ["left", "left"], ["right", "right"], ["backward", "backward"]]), "options")
        .appendField("(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Make the turtle move");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['penud'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".pen")
        .appendField(new Blockly.FieldDropdown([["up", "up"], ["down", "down"]]), "options")
        .appendField("()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Pen up and down");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['pen'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".pen()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Initialize the pen");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['colourpen'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".pencolor(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
    }
};

Blockly.Blocks['fillcolor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".fillcolor(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Change the fill colour");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['screen_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("screen"), "screen")
        .appendField(".setup(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Set screen size and starting position");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['colour'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".color(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Change the colour");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['colourmode'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("screen"), "wn")
        .appendField(".colormode(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Change the colourmode");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['penwidth'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".width(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
      this.setTooltip("Change the width");
      this.setHelpUrl("");
    }
};
  
Blockly.Blocks['turtlespeed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".speed(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
    }
};

Blockly.Blocks['turtleshape'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".shape(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
    }
};

Blockly.Blocks['circle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".circle(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
    }
};

Blockly.Blocks['goto'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".goto(")
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
    }
};

Blockly.Blocks['chart_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(" = pygal.")
          .appendField(new Blockly.FieldDropdown([["Line","Line"], ["StackedLine","StackedLine"], ["Bar","Bar"], ["StackedBar","StackedBar"], ["HorizontalBar","HorizontalBar"], ["StackedHorizontalBar","StackedHorizontalBar"], ["XY","XY"],["Pie","Pie"], ["Radar","Radar"]]), "chartTypes")
          .appendField("(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#008FD1");
    }
};

Blockly.Blocks['chart_title'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".title = ");
      this.appendValueInput("text")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#008FD1");
    }
};

Blockly.Blocks['chart_add'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".add(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", [");
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("])");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#008FD1");
    }
};

Blockly.Blocks['chart_xlabels'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".x_labels = ");
      this.appendValueInput("text")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#008FD1");
    }
};

Blockly.Blocks['chart_render'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".render()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#008FD1");
    }
};