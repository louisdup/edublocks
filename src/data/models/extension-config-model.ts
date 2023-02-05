/**
 * Data model for an extension config file.
 */
export interface ExtensionConfigModel {
	library?: string;
	code: Array<string>;
	mode: string;
}