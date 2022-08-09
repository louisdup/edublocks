import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the heading component.
 */
class EbHeadingModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "heading";
	}
		
	/**
	 * Returns list of classes for a specific button variant
	 */
	public variants: Function = cva(undefined, {
		variants: {
			size: {
				small: "text-lg",
				normal: "text-3xl",
				large: "text-4xl"
			},
			weight: {
				light: "font-base",
				medium: "font-medium",
				semibold: "font-semibold",
				bold: "font-bold"
			},
			color: {
				gray: "text-gray-700",
				black: "text-gray-900"
			},
		},
		defaultVariants: {
			size: "normal",
			weight: "semibold",
			color: "black"
		}
	});
}

// Export the component model
export const component: EbHeadingModel = new EbHeadingModel();