export default function getGenerators(): void {
	Blockly.Python["import_requests"] = function (): string {
		const code: string = "import requests \n";
		return code;
	};
	
	Blockly.Python["import_json"] = function (): string {
		const code: string = "import json \n";
		return code;
	};

	Blockly.Python["requests_request"] = function(block: Blockly.BlockSvg): string {
		const requests: string = Blockly.Python.nameDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const type: string = block.getFieldValue("type");
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${requests} = requests.${type}(${parameters})\n`;
		return code;
	  };

	Blockly.Python["json_reference"] = function(block: Blockly.BlockSvg): Array<string | number> {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const input: string = Blockly.Python.valueToCode(block, "input", 0);
		const code: string = `${requests}.json()[${input}]`;
		return [code, 0];
	};

	Blockly.Python["requests_head"] = function (block: Blockly.BlockSvg): string {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `${requests} = requests.head(${parameters})\n`;
		return code;
	};

	Blockly.Python["requests_options"] = function (block: Blockly.BlockSvg): string {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `${requests} = requests.options(${parameters})\n`;
		return code;
	};

	Blockly.Python["requests_url"] = function (block: Blockly.BlockSvg): Array<string | number> {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const type: string = block.getFieldValue("NAME");
		const code: string = `${requests}.${type}`;
		return [code, 0];
	};

	Blockly.Python["requests_url_func"] = function (block: Blockly.BlockSvg): string {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const type: string = block.getFieldValue("NAME");
		const code: string = `${requests}.${type}()\n`;
		return code;
	};

	Blockly.Python["requests_cookies"] = function (block: Blockly.BlockSvg): string {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "text", 0);
		const code: string = `${requests}.cookies[${parameters}]\n`;
		return code;
	};

	Blockly.Python["requests_rjar"] = function (block: Blockly.BlockSvg): string {
		const jar: string = Blockly.Python.variableDB_.getName(block.getFieldValue("jar"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${jar} = requests.cookies.RequestsCookieJar()\n`;
		return code;
	};

	Blockly.Python["requests_jset"] = function (block: Blockly.BlockSvg): string {
		const jar: string = Blockly.Python.variableDB_.getName(block.getFieldValue("jar"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "NAME", 0);
		const code: string = `${jar}.set(${parameters})\n`;
		return code;
	};

	Blockly.Python["requests_hget"] = function (block: Blockly.BlockSvg): string {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "NAME", 0);
		const code: string = `${requests}.headers.get(${parameters})\n`;
		return code;
	};

	Blockly.Python["requests_raise"] = function (block: Blockly.BlockSvg): string {
		const requests: string = Blockly.Python.variableDB_.getName(block.getFieldValue("r"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${requests}.raise_for_status()\n`;
		return code;
	};
}