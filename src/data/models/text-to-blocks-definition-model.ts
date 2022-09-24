/**
 * Data model for a text to blocks definition.
 */
export interface TextToBlocksDefinitionModel {
	name: string;
	code: string;
	inputs?: Array<string>;
}