import { ModalModelBase } from "../base-classes/modal-model-base";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";

/**
 * Modal model for the delete showcase project modal.
 */
class DeleteShowcaseProjectModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "delete-showcase-project";
	}

	/**
	 * Called when the delete button is clicked and deletes the project from the showcase.
	 */
	public onDeleteClicked(project: ShowcaseProjectModel): void {
		ShowcaseProvider.deleteShowcaseProjectAsync(project.id);
	}
}

// Export the modal model.
export const modal: DeleteShowcaseProjectModel = new DeleteShowcaseProjectModel();