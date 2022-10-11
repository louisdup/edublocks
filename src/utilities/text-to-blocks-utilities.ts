import { TextToBlocksArgumentModel } from "@/data/models/text-to-blocks-argument-model";
import { TextToBlocksBlockInputModel } from "@/data/models/text-to-blocks-block-input-model";
import { TextToBlocksBlockModel } from "@/data/models/text-to-blocks-block-model";
import { TextToBlocksDefinitionModel } from "@/data/models/text-to-blocks-definition-model";
import Sk from "skulpt";
import { ref, Ref } from "vue";
import { EditorUtilities } from "./editor-utilities";

/**
 * Utility functions for converting text code to blocks.
 */
export class TextToBlocksUtilities {
	/**
	 * True if a text editor component is focused.
	 */
	public static isTextEditorFocused: Ref<boolean> = ref(false);

	/**
	 * Configures skulpt for use in converting text to blocks.
	 */
	public static configureSkulpt(): void {
		Sk.configure({
			__future__: Sk.python3
		});
	}

	/**
	 * Returns a list of block definitions for the current mode that can be used for translating text to blocks.
	 */
	public static getTextToBlocksDefinitions(): Array<TextToBlocksDefinitionModel> {
		if (EditorUtilities.currentProject.value) {
			return EditorUtilities.currentProject.value.mode.getTextToBlocksDefinitions();
		}
		else {
			return [];
		}
	}

	/**
	 * Returns a list of blocks currently in the workspace.
	 */
	public static getAllBlocksInWorkspace(): Array<Blockly.Block> | undefined {
		if (EditorUtilities.blocklyInstance) {
			return EditorUtilities.blocklyInstance.getAllBlocks(true).filter((block: Blockly.Block) => {
				return !block.getSurroundParent() && !block.isShadow();
			});
		}
		else {
			return undefined;
		}
	}

	/**
	 * Add a block to the blockly workspace.
	 */
	public static addBlock(name?: string, line?: any, inputs?: Array<TextToBlocksBlockInputModel>, variables?: Array<string>, parentStatement?: Blockly.BlockSvg): Blockly.BlockSvg | undefined {
		if (EditorUtilities.blocklyInstance && name) {
			const block: Blockly.BlockSvg = EditorUtilities.blocklyInstance.newBlock(name) as Blockly.BlockSvg;

			if (inputs) {
				inputs.forEach((input: TextToBlocksBlockInputModel) => {
					if (EditorUtilities.blocklyInstance) {
						let shadowBlockName: string;
						
						switch (input.type) {
							case "string":
								shadowBlockName = "stringinline";
								break;
							case "text":
								shadowBlockName = "textinline";
								break;
						}

						const shadowBlock: Blockly.BlockSvg = EditorUtilities.blocklyInstance.newBlock(shadowBlockName) as Blockly.BlockSvg;
						shadowBlock.setShadow(true);
						shadowBlock.setFieldValue(input.value, "text");
						shadowBlock.initSvg();
						shadowBlock.render();
						
						const blockInput: Blockly.Input = block.getInput(input.name);
						blockInput.connection.connect(shadowBlock.outputConnection);
					}
				});
			}

			if (variables) {
				variables.forEach((variable: string, variableIndex: number) => {
					if (EditorUtilities.blocklyInstance) {
						const newVariable: Blockly.VariableModel = EditorUtilities.blocklyInstance.createVariable(variable);
						const oldVariable: string = block.getVars()[variableIndex];
						block.renameVarById(oldVariable, newVariable.getId());
						EditorUtilities.blocklyInstance.deleteVariableById(oldVariable);
					}
				});
			}

			block.initSvg();
			block.render();

			if (parentStatement) {
				parentStatement.getFirstStatementConnection().connect(block.previousConnection);
			}
			else if (line.lineno > 1) {
				const allBlocks: Array<Blockly.Block> | undefined = this.getAllBlocksInWorkspace();
				if (allBlocks) {
					const lastBlock: Blockly.Block = allBlocks[allBlocks.length - 2];
					lastBlock.nextConnection.connect(block.previousConnection);
				}
			}

			return block;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Creates a placeholder block.
	 * Can be used if an existing block cannot be found, so the line is represented in the blocks view.
	 */
	public static createPlaceholderBlock(value: string, line: any, parentStatement?: Blockly.BlockSvg): void {
		const inputs: Array<TextToBlocksBlockInputModel> = [
			{
				name: "value",
				type: "text",
				value
			}
		];
		this.addBlock("placeholder", line, inputs, undefined, parentStatement);
	} 

	/**
	 * Create a block for an import.
	 */
	public static createImportBlock(line: any): TextToBlocksBlockModel | undefined {
		const libraryName: string = line.names[0].name.v;
		const importBlock: TextToBlocksDefinitionModel = this.getTextToBlocksDefinitions().filter((blockDefinition: TextToBlocksDefinitionModel) => {
			return blockDefinition.code === `import ${libraryName}`;
		})[0];

		if (importBlock) {
			return {
				name: importBlock.name
			};
		}
		else {
			return undefined;
		}
	}

	/**
	 * Create a block for an import from statement (eg: import * from x).
	 */
	public static createImportFromBlock(line: any): TextToBlocksBlockModel | undefined {
		const libraryName: string = line.module.v;
		const importBlock: TextToBlocksDefinitionModel = this.getTextToBlocksDefinitions().filter((blockDefinition: TextToBlocksDefinitionModel) => {
			return blockDefinition.code === `from ${libraryName} import *`;
		})[0];

		if (importBlock) {
			return {
				name: importBlock.name
			};
		}
		else {
			return undefined;
		}
	}

	/**
	 * Create a block for an expression statement.
	 */
	public static createExpressionBlock(line: any): TextToBlocksBlockModel | undefined {
		if (line.value.func) {
			let block: TextToBlocksBlockModel | undefined;
			let expressionFunction: string;
			let expressionAttribute: string;
			const expressionArguments: Array<TextToBlocksArgumentModel> = [];
			const placeholderArguments: Array<string> = [];
			let matchedBlockDefinition: TextToBlocksDefinitionModel | undefined;

			if (line.value.func.id) {
				expressionFunction = line.value.func.id.v;
			}

			if (line.value.func.value) {
				expressionFunction = line.value.func.value.id.v;
			}

			if (line.value.func.attr) {
				expressionAttribute = line.value.func.attr.v;
			}

			line.value.args.forEach((arg: any) => {
				const argType: string = arg._astname;
				switch (argType) {
					case "Str":
						expressionArguments.push({
							value: arg.s.v,
							type: "string"
						});
						break;
					case "Num":
						expressionArguments.push({
							value: arg.n.v,
							type: "text"
						});
						break;
					default:
						expressionArguments.push({
							value: arg.id.v,
							type: "text"
						});
						break;
				}
			});

			expressionArguments.forEach((arg: TextToBlocksArgumentModel, argIndex: number) => {
				placeholderArguments.push(`{${argIndex+1}}`);
			});

			this.getTextToBlocksDefinitions().forEach((block: TextToBlocksDefinitionModel) => {
				if (expressionAttribute) {
					if (block.code === `${expressionFunction}.${expressionAttribute}(${placeholderArguments.join(",")})`) {
						matchedBlockDefinition = block;
					}
					else if (block.code === `${placeholderArguments[0]}.${expressionAttribute}(${placeholderArguments.slice(1).join(",")})`) {
						matchedBlockDefinition = block;
					}
				}
				else {
					if (block.code === `${expressionFunction}(${placeholderArguments.join(",")})`) {
						matchedBlockDefinition = block;
					}
					else if (block.code === `${placeholderArguments[0]}(${placeholderArguments.slice(1).join(",")}))`) {
						matchedBlockDefinition = block;
					}
				}
			});

			if (matchedBlockDefinition) {
				const inputs: Array<TextToBlocksBlockInputModel> = [];
				if (matchedBlockDefinition.inputs) {
					matchedBlockDefinition.inputs.forEach((name: string, inputIndex: number) => {
						const argument: TextToBlocksArgumentModel = expressionArguments[inputIndex];
						inputs.push({
							name,
							type: argument.type,
							value: argument.value
						});
					});
				}
				block = {
					name: matchedBlockDefinition.name,
					inputs
				};
			}

			return block;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Create a block for while loop.
	 */
	public static createWhileBlock(line: any, type: string, lines: Array<string>, parentStatement?: Blockly.BlockSvg): void {
		if (EditorUtilities.blocklyInstance) {
			let argument: TextToBlocksArgumentModel;

			if (line.test.value) {
				if (line.test.value.v === 1) {
					argument = {
						value: "True",
						type: "text"
					};
				}
				else {
					argument = {
						value: "False",
						type: "text"
					};
				}
			}
			else {
				argument = {
					value: line.test.id.v,
					type: type === "Str" ? "string" : "text"
				};
			}

			const inputs: Array<TextToBlocksBlockInputModel> = [
				{
					name: "cond",
					value: argument.value,
					type: argument.type
				}
			];

			const whileBlock: Blockly.BlockSvg | undefined = this.addBlock("webwhileout", line, inputs, undefined, parentStatement);

			line.body.reverse().forEach((bodyLine: any) => {
				if (EditorUtilities.blocklyInstance && whileBlock) {
					this.generateBlocks(bodyLine, bodyLine.lineno, lines, whileBlock);
				}
			});
		}
	}

	/**
	 * Create a block for a for loop.
	 */
	public static createForBlock(line: any, lines: Array<string>, parentStatement?: Blockly.BlockSvg): void {
		if (EditorUtilities.blocklyInstance) {
			let forBlock: Blockly.BlockSvg | undefined;
			let inputs: Array<TextToBlocksBlockInputModel> | undefined;
			const target: string = line.target.id.v;

			if (line.iter.func) {
				const range: any = Object.values(line.iter.args[0])[0];

				inputs = [
					{
						name: "letter",
						type: "text",
						value: target
					},
					{
						name: "no",
						type: "text",
						value: range.v
					}
				];

				forBlock = this.addBlock("webfor", line, inputs, undefined, parentStatement);
			}
			else {
				const inter: any = line.iter.id.v;

				inputs = [
					{
						name: "x",
						type: "text",
						value: target
					},
					{
						name: "y",
						type: "text",
						value: inter
					}
				];

				forBlock = this.addBlock("webadvancedforloops", line, inputs, undefined, parentStatement);
			}

			line.body.reverse().forEach((bodyLine: any) => {
				if (EditorUtilities.blocklyInstance && forBlock) {
					this.generateBlocks(bodyLine, bodyLine.lineno, lines, forBlock);
				}
			});
		}
	}

	/**
	 * Create a variable (assign block.
	 */
	public static createAssignBlock(line: any): TextToBlocksBlockModel {
		const type: string = line.value._astname;
		const name: string = line.targets[0].id.v;
		let inputs: Array<TextToBlocksBlockInputModel> | undefined;

		if (type === "Str") {
			inputs = [
				{
					name: "varset",
					type: "string",
					value: line.value.s.v
				}
			];
		}
		else {
			inputs = [
				{
					name: "varset",
					type: "text",
					value: line.value.id.v
				}
			];
		}

		const block: TextToBlocksBlockModel = {
			name: "variables_set",
			inputs,
			variables: [name]
		};
		
		return block;
	}

	/**
	 * Generate blocks in the blockly workspace from code.
	 */
	public static generateBlocks(line: any, lineNo: number, lines: Array<string>, parentStatement?: Blockly.BlockSvg): void {
		const type: string = line._astname;
		let block: TextToBlocksBlockModel | undefined;

		const banPlaceholders: Array<string> = ["While", "For"];

		switch (type) {
			case "Import":
				block = this.createImportBlock(line);
				break;
			case "ImportFrom":
				block = this.createImportFromBlock(line);
				break;
			case "Expr":
				block = this.createExpressionBlock(line);
				break;
			case "While":
				this.createWhileBlock(line, type, lines, parentStatement);
				break;
			case "For":
				this.createForBlock(line, lines, parentStatement);
				break;
			case "Assign":
				block = this.createAssignBlock(line);
				break;
		}
		if (block) {
			this.addBlock(block.name, line, block.inputs, block.variables, parentStatement);
		}
		else if (!banPlaceholders.includes(type)) {
			this.createPlaceholderBlock(lines[lineNo - 1].trim(), line, parentStatement);
		}
	}

	/**
	 * Convert text-based code to blocks-based code.
	 */
	public static convertTextToBlocks(): void {
		if (EditorUtilities.currentProject.value && EditorUtilities.blocklyInstance) {
			const code: string | undefined = EditorUtilities.currentProject.value.code;

			if (code) {
				const lines: Array<string> = code.split("\n");
			
				const parse: any = Sk.parse("", code);
				const ast: any = Sk.astFromParse(parse.cst, "", parse.flags);
				const parsedLines: Array<any> = ast.body;
			
				EditorUtilities.blocklyInstance.clear();

				parsedLines.forEach((line: any) => {
					if (EditorUtilities.blocklyInstance) {
						this.generateBlocks(line, line.lineno, lines);
					}
				});
			}
		}
	}
}