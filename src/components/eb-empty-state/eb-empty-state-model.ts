import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the empty state component.
 */
class EbEmptyStateModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "empty-state";
	}

	/**
	 * Returns list of classes for the empty state component.
	 */
	public variants: Function = cva(["flex", "items-center", "justify-center", "rounded-lg"], {
		variants: {
			backgroundColor: {
				lightGray: "bg-gray-100",
				gray: "bg-gray-200"
			},
			isFullHeight: {
				true: "h-full"
			},
			isFullWidth: {
				true: "w-full"
			},
		}
	});
}

// Export the component model
export const component: EbEmptyStateModel = new EbEmptyStateModel();