import { ModalModelBase } from "../base-classes/modal-model-base";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { ContentUtilities } from "@/utilities/content-utilities";

/**
 * Modal model for the delete project modal.
 */
class DeleteProjectModal extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "delete-project";
	}

	/**
	 * Called when the delete button is clicked and deletes the project.
	 */
	public async onDeleteClicked(project: FirestoreProjectModel): Promise<void> {
		await ProjectsProvider.deleteProjectAsync(project.id);
		ContentUtilities.triggerContentRefresh();
	}
}

// Export the modal model.
export const modal: DeleteProjectModal = new DeleteProjectModal();