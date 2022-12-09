export default function getGenerators(): void {
	Blockly.Python["accelerometer_is_gesture"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const gesture: string = Blockly.Python.valueToCode(block, "gesture", 0);
		const code: string = `accelerometer.is_gesture(${gesture})`;
		return [code, 0];
	};

	Blockly.Python["accelerometer_was_gesture"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const gesture: string = Blockly.Python.valueToCode(block, "gesture", 0);
		const code: string = `accelerometer.was_gesture(${gesture})`;
		return [code, 0];
	};

	Blockly.Python["accelerometer_gestures"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const gesture: string = block.getFieldValue("gestures");
		return [gesture, 0];
	};

	Blockly.Python["accelerometer_current_gesture"] = function (): Array<string | number> {
		const code: string = "accelerometer.current_gesture()";
		return [code, 0];
	};

	Blockly.Python["accelerometer_get_axis"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const axis: string = block.getFieldValue("axis");
		const code: string = `accelerometer.${axis}`;
		return [code, 0];
	};
}