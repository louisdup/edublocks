import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { TextToBlocksUtilities } from "@/utilities/text-to-blocks-utilities";
import { CSSProperties, Ref } from "vue";
import { Extension } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

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
	 * Returns a list of extensions to configure the text editor.
	 */
	public getExtensions(): Array<Extension> {
		return [
			python(),
			oneDark,
		];
	}

	/**
	 * Returns a list of styles for the text editor.
	 */
	public getStyles(): CSSProperties {
		return {
			height: "100%"
		};
	}

	/**
	 * Returns a tab size for the text editor.
	 */
	public getTabSize(): number {
		return 4;
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
	public onInput(): void {
		TextToBlocksUtilities.convertTextToBlocks();
	}

	/**
	 * Called when the user is focused on the text editor.
	 * Used for stopping blockly from overwriting the text editor value.
	 */
	public onFocus(): void {
		TextToBlocksUtilities.isTextEditorFocused.value = true;
	}

	/**
	 * Called when the user is focused on the text editor.
	 * Allows blockly to overwrite the text editor value.
	 */
	public onBlur(): void {
		TextToBlocksUtilities.isTextEditorFocused.value = false;
	}
}

// Export the component model.
export const component: PythonCodeModel = new PythonCodeModel();