const requestsColor: string = "#FF69B4";

export default function getDefinitions(): void {
	Blockly.Blocks["requests_request"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("r"), "r")
			  .appendField(" = requests.")
			  .appendField(new Blockly.FieldDropdown([["get","get"], ["post","post"], ["put","put"], ["delete","delete"]]), "type")
			  .appendField("(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["json_reference"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".json()[");
			this.appendValueInput("input")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("]");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_head"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.head(");
		  this.appendValueInput("text")
				.setCheck(null);
		  this.appendDummyInput()
				.appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_options"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(" = requests.options(");
		  this.appendValueInput("text")
				.setCheck(null);
		  this.appendDummyInput()
				.appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_url"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["url", "url"], ["text", "text"], ["encoding", "encoding"], ["content", "content"], ["json", "json"], ["raw", "raw"], ["status_code", "status_code"], ["headers", "headers"], ["history", "history"], ["ok", "ok"]]), "NAME");
		  this.setOutput(true, null);
		  this.setColour(requestsColor);
		  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
		}
	};
	
	Blockly.Blocks["requests_url_func"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".")
				.appendField(new Blockly.FieldDropdown([["url", "url"], ["text", "text"], ["encoding", "encoding"], ["content", "content"], ["json", "json"], ["raw", "raw"], ["status_code", "status_code"], ["headers", "headers"], ["history", "history"], ["ok", "ok"]]), "NAME")
				.appendField("()");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_cookies"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".cookies[");
		  this.appendValueInput("text")
				.setCheck(null);
		  this.appendDummyInput()
				.appendField("]");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_rjar"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("jar"), "jar")
				.appendField(" = requests.cookies.RequestsCookieJar()");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_jset"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("jar"), "jar")
				.appendField(".set(");
		  this.appendValueInput("NAME")
				.setCheck(null);
		  this.appendDummyInput()
				.appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_hget"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".headers.get(");
		  this.appendValueInput("NAME")
				.setCheck(null);
		  this.appendDummyInput()
				.appendField(")");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
	
	Blockly.Blocks["requests_raise"] = {
		init: function(): void {
		  this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("r"), "r")
				.appendField(".raise_for_status()");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(requestsColor);
		}
	};
}