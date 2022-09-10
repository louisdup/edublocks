import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the h-stack component.
 */
class EbHStackModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "h-stack";
	}

	/**
	 * Returns list of classes for the h-stack component.
	 */
	public variants: Function = cva(["flex", "items-center"], {
		variants: {
			spacing: {
				0: "space-x-0",
				2: "space-x-2",
				4: "space-x-4",
				6: "space-x-6",
				8: "space-x-8",
			}
		},
		defaultVariants: {
			spacing: 0
		}
	});
}

// Export the component model
export const component: EbHStackModel = new EbHStackModel();