import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the banner component.
 */
class EbBannerModel extends ComponentModelBase {    
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "banner";
	}
    
	/**
	 * Returns list of classes for a specific banner variant
	 */
	public variants: Function = cva(["p-6", "rounded-lg", "shadow-lg", "flex", "items-center", "space-x-8"], {
		variants: {
			color: {
				blue: "bg-blue-500",
				white: "bg-white",
				green: "bg-green-500",
				navy: "bg-navy-500",
				red: "bg-red-500",
				gray: "bg-gray-200"
			}
		},
		defaultVariants: {
			color: "blue"
		}
	});
}

// Export the component model
export const component: EbBannerModel = new EbBannerModel();
