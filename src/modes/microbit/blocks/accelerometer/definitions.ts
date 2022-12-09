const accelerometersColor: string = "#E57E16";

export default function getDefinitions(): void {
	Blockly.Blocks["accelerometer_is_gesture"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.is_gesture(");
			this.appendValueInput("gesture")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true); 
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setOutput(true, null);
			this.setColour(accelerometersColor);
		}
	};
	
	Blockly.Blocks["accelerometer_was_gesture"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.was_gesture(");
			this.appendValueInput("gesture")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true); 
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(accelerometersColor);
		}
	};

	const gestures: Array<Array<string>> = [
		[`"shake"`, `"shake"`],
		[`"up"`,`"up"`], 
		[`"down"`,`"down"`], 
		[`"left"`,`"left"`],
		[`"right"`, `"right"`],
		[`"face up"`, `"face up"`],
		[`"face down"`, `"face down"`],
		[`"freefall"`, `"freefall"`],
		[`"3g"`, `"3g"`],
		[`"6g"`, `"6g"`],
		[`"8g"`, `"8g"`]
	];

	Blockly.Blocks["accelerometer_gestures"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown(gestures), "gestures");
			this.setOutput(true,"String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(accelerometersColor);
		}
	};

	Blockly.Blocks["accelerometer_current_gesture"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("accelerometer.current_gesture()");
			this.setOutput(true, "String");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(accelerometersColor);
		}
	};

	Blockly.Blocks["accelerometer_get_axis"] = {
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
			this.setColour(accelerometersColor);
		}
	};
}