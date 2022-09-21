import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { Ref } from "vue";

/**
 * Component model for the python code component.
 */
export class PythonCodeModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "python-code";
	}

	/**
	 * Returns a list of options to configure the monaco text editor.
	 */
	public getMonacoEditorOptions(): unknown {
		return {
			minimap: {
				enabled: false
			},
			lineHeight: 27,
			fontSize: 14
		};
	}

	/**
	 * Returns the code for the current project.
	 */
	public getCurrentProjectCode(): Ref<string | undefined> {
		return EditorUtilities.currentProject.code;
	}

	/**
	 * Called when the user starts typing in the code editor.
	 */
	public onCodeInput(event: Event): void {
		const value: string = (event.target as HTMLInputElement).value;
		EditorUtilities.currentProject.code.value = value;
	}
}

// Export the component model.
export const component: PythonCodeModel = new PythonCodeModel();