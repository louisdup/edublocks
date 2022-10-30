const turtleColor: string = "#5b59a2";

export default function getDefinitions(): void {
	Blockly.Blocks["turtle_init"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(" = Turtle()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_screen_init"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("screen"), "screen")
				.appendField(" = Screen()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_screen_setup"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("screen"), "screen")
				.appendField(".setup(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_background_color"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("screen"), "screen")
				.appendField(".bgcolor(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_color_mode"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("screen"), "screen")
				.appendField(".colormode(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_direction"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["forward", "forward"], ["left", "left"], ["right", "right"], ["backward", "backward"]]), "direction")
				.appendField("(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_circle"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".circle(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_goto"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".goto(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_shape"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(`.shape("`)
				.appendField(new Blockly.FieldDropdown([["turtle","turtle"], ["classic","classic"], ["arrow","arrow"], ["circle","circle"], ["square","square"], ["triangle","triangle"]]), "shape")
				.appendField(`")`);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_width"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".width(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_color"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".color(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_pen_color"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".pencolor(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_fill_color"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".fillcolor(");
			this.appendValueInput("parameters")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_fill"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["begin_fill","begin_fill"], ["end_fill","end_fill"]]), "action")
				.appendField("()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};

	Blockly.Blocks["turtle_pen_up_down"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("turtle"), "turtle")
				.appendField(".pen")
				.appendField(new Blockly.FieldDropdown([["up", "up"], ["down", "down"]]), "direction")
				.appendField("()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(turtleColor);
		}
	};
}