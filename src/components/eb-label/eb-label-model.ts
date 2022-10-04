import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the label component.
 */
class EbLabelModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "label";
	}

	/**
	 * Returns list of classes for the label component.
	 */
	public variants: Function = cva(["text-sm"], {
		variants: {
			align: {
				left: "text-left",
				center: "text-center",
				right: "text-right"
			},
			color: {
				gray: "text-gray-500",
				black: "text-gray-900"
			},
			isFullWidth: {
				true: "w-full"
			}
		},
		defaultVariants: {
			color: "black"
		}
	});
}

// Export the component model
export const component: EbLabelModel = new EbLabelModel();