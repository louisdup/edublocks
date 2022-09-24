import { TextToBlocksBlockInputModel } from "./text-to-blocks-block-input-model";

/**
 * Data model for a text to blocks block.
 */
export interface TextToBlocksBlockModel {
	name: string;
	inputs?: Array<TextToBlocksBlockInputModel>;
	variables?: Array<string>;
}