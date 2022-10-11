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
				"xs": "text-xs",
				"sm": "text-sm",
				"normal": "text-base",
				"md": "text-md",
				"lg": "text-lg",
				"xl": "text-xl",
				"2xl": "text-2xl",
				"3xl": "text-3xl",
				"4xl": "text-4xl",
				"5xl": "text-5xl",
				"6xl": "text-6xl",
				"7xl": "text-7xl",
				"8xl": "text-8xl",
				"9xl": "text-9xl"
			},
			weight: {
				light: "font-light",
				normal: "font-normal",
				medium: "font-medium",
				semibold: "font-semibold",
				bold: "font-bold",
				black: "font-black"
			},
			color: {
				gray: "text-gray-700",
				black: "text-gray-900",
				white: "text-white"
			},
			isFullWidth: {
				true: "w-full"
			}
		},
		defaultVariants: {
			align: "left",
			size: "xl",
			weight: "semibold",
			color: "black",
			isFullWidth: false
		}
	});
}

// Export the component model
export const component: EbHeadingModel = new EbHeadingModel();