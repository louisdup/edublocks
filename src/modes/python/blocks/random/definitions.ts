const randomColor: string = "#8BC248";

export default function getDefinitions(): void {
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
		  this.setColour(randomColor);
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
			this.setColour(randomColor);
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
			this.setColour(randomColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};

	Blockly.Blocks["random_random"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("random.random()");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(randomColor);
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
			this.setColour(randomColor);
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
			this.setColour(randomColor);
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
			this.setColour(randomColor);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};
}