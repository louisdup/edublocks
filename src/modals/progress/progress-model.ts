import { Data } from "@/components/types";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";

/**
 * Modal model for the progress modal.
 */
class ProgressModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "progress";
	}

	/**
	 * Initialise the modal model.
	 */
	public init(props: Data): void {
		this.watchForProgressCompletion(props);
	}

	/**
	 * Watches for progress to reach 100 and then closes the modal.
	 */
	private watchForProgressCompletion(props: Data): void {
		watchEffect(() => {
			if (props.progress === 100) {
				ModalUtilities.closeModal();
			}
		});
	}
}

// Export the modal model.
export const modal: ProgressModel = new ProgressModel();