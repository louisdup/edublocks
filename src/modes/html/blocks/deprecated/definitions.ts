/* eslint-disable */

export default function getDefinitions(): void {
	Blockly.Blocks["textinline"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldTextInput(""), "text");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#FFFFFF");
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setTooltip("Text input for inline input");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["sliderinline"] = {
		init: function (): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldSlider("1", "1", "6", "1", "1", "Heading Size"), "slider");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
			this.setColour("#FFFFFF");
			this.setTooltip("Heading Size Slider");
			this.setHelpUrl("");
		},
	};
	
	Blockly.Blocks["attributes"] = {
		init: function() {
			const inputsC = 1;    
			this.setOutput(true, "FOO");
			this.setColour("#00CA4D");
			this.setInputsInline(true);
          
			this.appendValueInput("in1");
		},
        
		mutationToDom: function () {
			const container = Blockly.utils.xml.createElement("mutation");
			container.setAttribute("inputCount", this.inputsC);
			return container;
		},
       
		domToMutation: function (xmlElement: HTMLElement) {
			this.inputsC = parseInt(xmlElement.getAttribute("inputCount") as string, 10) || 1;
			this.updateShape_();
		},
        
		updateShape_: function() {
			this.removeInput("in1");
              
			if (this.inputsC == 1) {
				this.appendValueInput("in1")
					.appendField(new Blockly.FieldImage(
						"https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
						15,
						15,
						"*", () => {
							this.getSourceBlock().plus_();
						} ));
			}
			else if (this.inputsC == 20) {
				this.appendValueInput("in1")
					.appendField(new Blockly.FieldImage(
						"https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
						15,
						15,
						"*", () => {
							this.getSourceBlock().minus_();
						} ));
			}
			else {
				this.appendValueInput("in1")
					.appendField(new Blockly.FieldImage(
						"https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
						15,
						15,
						"*", () => {
							this.getSourceBlock().minus_();
						} ))
					.appendField(new Blockly.FieldImage(
						"https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
						15,
						15,
						"*", () => {
							this.getSourceBlock().plus_();
						} ));
			}
              
			let i = 2;
			while (this.getInput("in" + i)) {
				this.removeInput("in" + i);
				i++;
			}
            
			for (let x = 2; x <= this.inputsC; x++) {
				this.appendValueInput("in" + x);
			}
		},
       
		plus_: function () {
			this.inputsC = (this.inputsC + 1);
			this.updateShape_();
		},
        
		minus_: function () {
			this.inputsC = (this.inputsC - 1);
			this.updateShape_();
		}
	};

	Blockly.Blocks["iframe"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<iframe src=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("></iframe>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ED2CD5");
			this.setTooltip("Embed a webpage or video");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["video"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<video src=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("></video>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ED2CD5");
			this.setTooltip("Embed a video");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["audio"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<audio src=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("></audio>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ED2CD5");
			this.setTooltip("Embed an audio file");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["image"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<img src=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#ED2CD5");
			this.setTooltip("Display an image");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["id"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("id=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["class"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("class=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["style"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("style=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["height"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("height=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["width"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("width=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Element ID");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["value"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("value=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Set Value");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["src"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("src=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Set Src of a media element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["for"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("for=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Link labels and inputs together");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["placeholder"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("placeholder=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Set Placeholder");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["type"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("type=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Set Type");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["onclick"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("onclick=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"");
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour("#00CA4D");
			this.setTooltip("Run function on click");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["input"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<input type=\"")
				.appendField(new Blockly.FieldDropdown([["text","text"], ["number","number"], ["date","date"], ["datetime-local","datetime-local"], ["email","email"], ["checkbox","checkbox"], ["color","color"], ["password","password"], ["radio","radio"], ["range","range"], ["search","search"], ["url","url"], ["tel","tel"]]), "options")
				.appendField("\" ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#00C0EA");
			this.setTooltip("Create an input element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["label"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<label for=\"");
			this.appendValueInput("for")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\" ");
			this.appendValueInput("attributes")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(">");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</label>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#00C0EA");
			this.setTooltip("Create a label element");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks["link"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<a href=\"");
			this.appendValueInput("url")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\">");
			this.appendStatementInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("</a>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#448EFF");
			this.setTooltip("Add a link to an element");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["stylesheet_link"] = {
		init: function(): void {
			this.appendDummyInput() 
				.appendField("<link rel=\"stylesheet\" href=\"");
			this.appendValueInput("content")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\">");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#AD40FF");
			this.setTooltip("Add a link to an external stylesheet");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["script_link"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField("<script src=\"");
			this.appendValueInput("link")
				.setCheck(null);
			this.appendDummyInput()
				.appendField("\"></script>");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FFAA00");
			this.setTooltip("Add an external script");
			this.setHelpUrl("");
		}
	};
}
