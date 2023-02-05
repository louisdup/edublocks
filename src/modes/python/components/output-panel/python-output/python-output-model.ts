import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { ExtensionCodeFileModel } from "@/data/models/extension-code-file";
import { ExtensionModel } from "@/data/models/extension-model";
import { EditorUtilities } from "@/utilities/editor-utilities";

/**
 * Component model for the python output component.
 */
export class PythonOutputModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "python-output";
	}

	private getCodeToRun(): string {
		const code: Array<string> = [];
		const extensionModules: Array<string> = [];

		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.code) {
			if (EditorUtilities.currentProject.value.extensions) {
				EditorUtilities.currentProject.value.extensions.forEach((extension: ExtensionModel) => {
					extension.code.forEach((codeFile: ExtensionCodeFileModel) => {
						code.push(...codeFile.content.split("\n"));
						extensionModules.push(codeFile.name.replace(".py", ""));
					});
				});
			}

			code.push(...EditorUtilities.currentProject.value.code.split("\n"));

			code.filter((line: string, index: number) => {
				const hasModuleName: boolean = extensionModules.some((moduleName: string) => {
					return line.split(" ").includes(moduleName);
				});

				if (hasModuleName) {
					delete code[index];
				}
			});
		}

		return encodeURIComponent(`#!/usr/bin/python3\n${code.join("\n")}`);
	}

	/**
	 * Returns trinket link for iframe source tag.
	 */
	public getIframeSrc(): string | undefined {
		if (EditorUtilities.currentProject.value) {
			const code: string = this.getCodeToRun();
			return `https://trinket.io/tools/1.0/jekyll/embed/${code.includes("requests") ? "python3" : "python"}?runOption=run&outputOnly=true&start=result#code=${code}`;
		}
		else {
			return undefined;
		}
	}
}

// Export the component model.
export const component: PythonOutputModel = new PythonOutputModel();