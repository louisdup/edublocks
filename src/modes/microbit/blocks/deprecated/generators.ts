/* eslint-disable */

export default function getGenerators(): void {
	Blockly.Python["variables_get"] = function(block: Blockly.BlockSvg) {
		const variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
		const code = variable_var;
		return [code, 0];
	};

	Blockly.Python["variables_set"] = function(block: Blockly.BlockSvg) {
		const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
		const text_text = block.getFieldValue("NAME");
		const value_name = Blockly.Python.valueToCode(block, "varset", 0);
		const code = variable_name + " " +text_text+ " " +value_name+ "\n";
		return code;
	};

	Blockly.Python["textinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("text");
		const code = text_text;
		return [code, 0];
	};

	Blockly.Python["stringinline"] = function(block: Blockly.BlockSvg) {
		const text_text = block.getFieldValue("text");
		const code = "\"" + text_text + "\"";
		return [code, 0];
	};

	Blockly.Python['sliderinline'] = function(block: Blockly.BlockSvg) {
		var text_text = block.getFieldValue('slider');
		var code = text_text;
		return [code, Blockly.Python.ORDER_ATOMIC];
	};
}