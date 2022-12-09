const basicColor: string = "#E71D64";

export default function getDefinitions(): void {
	Blockly.Blocks["print"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("print(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["input"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("input(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["time_sleep"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("time.sleep(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["convert_to_string"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("str(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["convert_to_integer"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("int(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["convert_to_float"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("float(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["global"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("global ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["length"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("len(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["case"] = {
		init: function(): void {
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["upper","upper"], ["lower","lower"], ["title","title"]]), "case")
				.appendField("()");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["reverse"] = {
		init: function(): void {
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("[::-1]");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["replace"] = {
		init: function(): void {
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".replace(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["count"] = {
		init: function(): void {
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".count(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["strip"] = {
		init: function(): void {
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["strip","strip"], ["lstrip","lstrip"], ["rstrip","rsrtip"]]), "strip_type")
				.appendField("()");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["find"] = {
		init: function(): void {
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["find","find"], ["rfind","rfind"]]), "find_type")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};
	
	Blockly.Blocks["text_at_index"] = {
		init: function(): void {
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("[");
			this.appendValueInput("index")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("]");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["arithmetic"] = {
		init: function(): void {
			this.appendValueInput("value_1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["/","/"], ["%","%"], ["*","*"], ["**","**"], ["//","//"]]), "operator");
			this.appendValueInput("value_2")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true);
			this.setColour(basicColor);
		}
	};
  
	Blockly.Blocks["round"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("round(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["if"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("if ");
			this.appendValueInput("condition")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["elif"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("elif ");
			this.appendValueInput("condition")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["else"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("else:");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};
  
	Blockly.Blocks["compare"] = {
		init: function(): void {
			this.appendValueInput("value_1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["==","=="], ["!=","!="], ["is", "is"], ["is not","is not"], ["<","<"], ["<=","<="], [">",">"], [">=",">="]]), "operator");
			this.appendValueInput("value_2")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["and_or"] = {
		init: function(): void {
			this.appendValueInput("value_1")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "operator");
			this.appendValueInput("value_2")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["not"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("not ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["list"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("[");
			this.appendValueInput("data")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("]");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["list_get_item_at_index"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
				.appendField("[");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("]");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};
  
	Blockly.Blocks["list_reverse"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
				.appendField(".reverse()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["list_find_index"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
				.appendField(".index(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["list_append"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("variable_name"), "variable_name")
				.appendField(".append(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["while"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("while ");
			this.appendValueInput("condition")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["for_range"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("for ")
				.appendField(new Blockly.FieldVariable("i"), "variable")
				.appendField(" in range(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("):");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["for"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("for ")
				.appendField(new Blockly.FieldVariable("i"), "variable")
				.appendField(" in ");
			this.appendValueInput("condition")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(":");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};
  
	Blockly.Blocks["break"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("break");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["define_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("def ")
				.appendField(new Blockly.FieldVariable("function_name"), "function_name")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("):");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["define_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("def ")
				.appendField(new Blockly.FieldVariable("function_name"), "function_name")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("):");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["define_class"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("class ")
				.appendField(new Blockly.FieldVariable("class_name"), "class_name")
				.appendField(":");
			this.appendStatementInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["return_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("return ")
				.appendField(new Blockly.FieldVariable("function_name"), "function_name");
			this.setPreviousStatement(true, null);
			this.setColour(basicColor);
		}
	};

	Blockly.Blocks["call_function"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("function_name"), "function_name")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};
	
	Blockly.Blocks["class_self"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("self.")
				.appendField(new Blockly.FieldVariable("i"), "variable_name")
				.appendField(new Blockly.FieldDropdown([["=","="], ["+=","+="], ["-=","-="]]), "operator");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(basicColor);
		}
	};	

	Blockly.Blocks["random_choice"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("random.choice(");
		  this.appendValueInput("text")
				.setCheck(null);
		  this.appendDummyInput()
				.appendField(")");
		  this.setInputsInline(true);
		  this.setOutput(true, null);
		  this.setColour(basicColor);
		  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	  };
	 
	Blockly.Blocks["random_randint"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("random.randint(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};

	Blockly.Blocks["random_uniform"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("random.uniform(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};

	Blockly.Blocks["random_random"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("random.random()");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};

	Blockly.Blocks["random_randrange"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("random.randrange(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};

	Blockly.Blocks["random_seed"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("random.seed(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};

	Blockly.Blocks["random_shuffle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("random.shuffle(");
			this.appendValueInput("text")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(basicColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};
}