/**
 * Data model for a text to blocks block input.
 */
export interface TextToBlocksBlockInputModel {
	name: string;
	type: "string" | "text";
	value: string;
}