import { TextToBlocksDefinitionModel } from "@/data/models/text-to-blocks-definition-model";

/**
 * Text to blocks definitions for the statements category.
 */
const statementsDefinitions: Array<TextToBlocksDefinitionModel> = [
	{
		name: "webvarprint",
		code: "print({1})",
		inputs: ["var"]
	}
];

export default statementsDefinitions;