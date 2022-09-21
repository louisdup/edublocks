import { ComponentModelBase } from "@/components/base-classes/component-model-base";

/**
 * Component model for the editor mobile header component.
 */
export class EditorMobileHeaderModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "editor-mobile-header";
	}
}

// Export the component model.
export const component: EditorMobileHeaderModel = new EditorMobileHeaderModel();