import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the container component.
 */
class EbContainerModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "container";
	}

	/**
	 * Returns list of classes for the container component.
	 */
	public variants: Function = cva(["bg-gray-100", "border", "border-gray-300", "rounded-md", "h-full", "overflow-hidden", "inline-flex", "flex-col", "flex-none"], {
		variants: {
			padding: {
				0: "p-0",
				2: "p-2",
				4: "p-4",
				6: "p-6",
				8: "p-8",
			},
			isFullWidth: {
				true: "w-full"
			}
		},
		defaultVariants: {
			padding: 4
		}
	});
}

// Export the component model
export const component: EbContainerModel = new EbContainerModel();