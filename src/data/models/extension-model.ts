import { ExtensionCodeFileModel } from "./extension-code-file";
import { ExtensionConfigModel } from "./extension-config-model";

/**
 * Data model for an extension.
 */
export interface ExtensionModel {
	url: string;
	config: ExtensionConfigModel;
	definitions: string;
	generators: string;
	toolbox: string;
	code: Array<ExtensionCodeFileModel>;
}