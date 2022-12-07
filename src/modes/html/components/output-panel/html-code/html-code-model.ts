import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { CSSProperties, Ref } from "vue";
import { Extension } from "@codemirror/state";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import { ProjectModel } from "@/data/models/project-model";

/**
 * Component model for the HTML code component.
 */
export class HTMLCodeModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "html-code";
	}

	/**
	 * Returns a list of extensions to configure the text editor.
	 */
	public getExtensions(): Array<Extension> {
		return [
			html(),
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
	 * Returns the current project.
	 */
	public getCurrentProject(): Ref<ProjectModel> {
		return EditorUtilities.currentProject as Ref<ProjectModel>;
	}
}

// Export the component model.
export const component: HTMLCodeModel = new HTMLCodeModel();