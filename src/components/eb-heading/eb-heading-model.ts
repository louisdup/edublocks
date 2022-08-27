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
			align: {
				left: "text-left",
				center: "text-center",
				right: "text-right"
			},
			size: {
				small: "text-lg",
				medium: "text-2xl",
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
			fullWidth: {
				true: "w-full"
			}
		},
		defaultVariants: {
			align: "left",
			size: "normal",
			weight: "semibold",
			color: "black",
			fullWidth: false
		}
	});
}

// Export the component model
export const component: EbHeadingModel = new EbHeadingModel();