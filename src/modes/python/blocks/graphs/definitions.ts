const graphsColor: string = "#008FD1";

export default function getDefinitions(): void {
	Blockly.Blocks["graph_create"] = {
		init: function(): void {
	  		this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("name"), "graph_name")
				.appendField(" = pygal.")
				.appendField(new Blockly.FieldDropdown([["Line","Line"], ["StackedLine","StackedLine"], ["Bar","Bar"], ["StackedBar","StackedBar"], ["HorizontalBar","HorizontalBar"], ["StackedHorizontalBar","StackedHorizontalBar"], ["XY","XY"],["Pie","Pie"], ["Radar","Radar"]]), "graph_type")
				.appendField("()");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(graphsColor);
		}
	};

	Blockly.Blocks["graph_title"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("name"), "graph_name")
				.appendField(".title = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(graphsColor);
		}
	};

	Blockly.Blocks["graph_add"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("name"), "graph_name")
				.appendField(".add(");
			this.appendValueInput("value")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(", ");
			this.appendValueInput("data")
				.setCheck(null);
			this.appendDummyInput()
				.appendField(")");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(graphsColor);
		}
	};

	Blockly.Blocks["graph_xlabels"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("name"), "graph_name")
				.appendField(".x_labels = ");
			this.appendValueInput("value")
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(graphsColor);
		}
	};

	Blockly.Blocks["graph_render"] = {
		init: function(): void {
			this.appendDummyInput()
				.appendField(new Blockly.FieldVariable("name"), "graph_name")
				.appendField(".render()");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(graphsColor);
		}
	};
}