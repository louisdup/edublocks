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
			color: {
				black: "text-gray-900",
				gray: "text-gray-500",
				white: "text-gray-200",
				red: "text-red-500",
				blue: "text-blue-500",
				green: "text-green-500",
				orange: "text-orange-500",
				pink: "text-pink-500"
			},
			backgroundColor: {
				red: "bg-red-100",
				blue: "bg-blue-100",
				green: "bg-green-100",
				orange: "bg-orange-100",
				pink: "bg-pink-100",
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
	public getClassesForIcon(color: string, backgroundColor: string): Array<unknown> {
		return [this.variants({ color, backgroundColor }), backgroundColor ? "p-3 h-7 w-7 rounded-full" : ""];
	}
}

// Export the component model
export const component: EbIconModel = new EbIconModel();