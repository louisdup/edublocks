export default function getGenerators(): void {
	Blockly.Python["compass_calibrate"] = function (): string {
		const code: string = "compass.calibrate()\n";
		return code;
	};
	
	Blockly.Python["compass_is_calibrated"] = function (): Array<string | number> {
		const code: string = "compass.is_calibrated()";
		return [code, 0];
	};
	
	Blockly.Python["compass_heading"] = function (): Array<string | number> {
		const code: string = "compass.heading()";
		return [code, 0];
	};

	Blockly.Python["accelerometer_get_axis"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const axis: string = block.getFieldValue("axis");
		const code: string = `compass.${axis}`;
		return [code, 0];
	};
}