import { TextToBlocksDefinitionModel } from "@/data/models/text-to-blocks-definition-model";

/**
 * Text to blocks definitions for the loops category.
 */
const loopsDefinitions: Array<TextToBlocksDefinitionModel> = [
	{
		name: "webwhileout",
		code: "while {1}:",
		inputs: ["cond"]
	}
];

export default loopsDefinitions;