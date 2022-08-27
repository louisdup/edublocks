import { ModalModelBase } from "../base-classes/modal-model-base";

/**
 * Modal model for the error modal.
 */
class ErrorModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "error";
	}
}

// Export the modal model.
export const modal: ErrorModel = new ErrorModel();