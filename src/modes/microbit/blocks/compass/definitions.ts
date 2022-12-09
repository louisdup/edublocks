const compassColor: string = "#A016E5";

export default function getDefinitions(): void {
	Blockly.Blocks["compass_calibrate"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("compass.calibrate()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(compassColor);
		},
	};

	Blockly.Blocks["compass_is_calibrated"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("compass.is_calibrated()");
		  this.setOutput(true, null);
		  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		  this.setColour(compassColor);
		},
	};

	Blockly.Blocks["compass_heading"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField("compass.heading()");
		  this.setOutput(true, null);
		  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		  this.setColour(compassColor);
		},
	};

	Blockly.Blocks["compass_get_axis"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("compass.")
				.appendField(new Blockly.FieldDropdown([
					["get_x()", "get_x()"],
					["get_y()", "get_y()"],
					["get_z()", "get_z()"]
				]), "axis");
			this.setOutput(true,"Number");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour(compassColor);
		}
	};
}