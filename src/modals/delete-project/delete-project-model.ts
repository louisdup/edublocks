import { ModalModelBase } from "../base-classes/modal-model-base";

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
}

// Export the modal model.
export const modal: DeleteProjectModal = new DeleteProjectModal();