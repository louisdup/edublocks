import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { ProjectModel } from "@/data/models/project-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { Ref } from "vue";

/**
 * Component model for the html code component.
 */
export class PreviewModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "preview";
	}

	/**
	 * Returns the current project.
	 */
	public getCurrentProject(): Ref<ProjectModel> {
		return EditorUtilities.currentProject as Ref<ProjectModel>;
	}
}

// Export the component model.
export const component: PreviewModel = new PreviewModel();