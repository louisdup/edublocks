import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the icon component.
 */
class EbIconModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "icon";
	}
		
	/**
	 * Returns list of classes for a specific icon variant.
	 */
	public variants: Function = cva(undefined, {
		variants: {
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
			color: {
				black: "text-gray-900",
				gray: "text-gray-400",
				darkGray: "text-gray-700",
				white: "text-white",
				red: "text-red-500",
				blue: "text-blue-500",
				green: "text-green-500",
				orange: "text-orange-500"
			},
			backgroundColor: {
				red: "bg-red-100",
				blue: "bg-blue-50",
				green: "bg-green-100",
				orange: "bg-orange-100",
				transparent: "bg-transparent"
			}
		},
		defaultVariants: {
			color: "black"
		}
	});

	/**
	 * Returns list of classes for the icon component.
	 */
	public getClassesForIcon(size?: string, color?: string, backgroundColor?: string): Array<unknown> {
		return [this.variants({ size, color, backgroundColor }), backgroundColor ? "p-3 h-7 w-7 rounded-full" : ""];
	}
}

// Export the component model
export const component: EbIconModel = new EbIconModel();