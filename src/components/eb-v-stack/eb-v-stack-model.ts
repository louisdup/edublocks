import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the v-stack component.
 */
class EbVStackModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "v-stack";
	}

	/**
	 * Returns list of classes for the v-stack component.
	 */
	public variants: Function = cva(undefined, {
		variants: {
			spacing: {
				0: "space-y-0",
				2: "space-y-2",
				4: "space-y-4",
				6: "space-y-6",
				8: "space-y-8",
			},
			isFullHeight: {
				true: ["h-full", "flex", "flex-col"]
			},
			isFullWidth: {
				true: "w-full"
			}
		},
		defaultVariants: {
			spacing: 0
		}
	});
}

// Export the component model
export const component: EbVStackModel = new EbVStackModel();