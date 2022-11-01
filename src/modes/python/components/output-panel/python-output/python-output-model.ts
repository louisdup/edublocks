import { ComponentModelBase } from "@/components/base-classes/component-model-base";
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

	/**
	 * Returns trinket link for iframe source tag.
	 */
	public getIframeSrc(): string | undefined {
		if (EditorUtilities.currentProject.value) {
			const code: string = encodeURIComponent(`#!/usr/bin/python3\n${EditorUtilities.currentProject.value.code}`);
			return `https://trinket.io/tools/1.0/jekyll/embed/python?runOption=run&outputOnly=true&start=result#code=${code}`;
		}
		else {
			return undefined;
		}
	}
}

// Export the component model.
export const component: PythonOutputModel = new PythonOutputModel();