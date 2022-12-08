import { ViewModelBase } from "@/views/base-classes/view-model-base";

/**
 * View model for the not found view.
 */
class NotFoundModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "not-found";
	}
}

// Export the view model.
export const view: NotFoundModel = new NotFoundModel();