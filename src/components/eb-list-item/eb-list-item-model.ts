import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the heading component.
 */
class EbListItem extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "list-item";
	}
		
	/**
	 * Returns list of classes for title variants.
	 */
	public titleVariants: Function = cva(["font-medium"], {
		variants: {
			color: {
				black: "text-gray-900",
				white: "text-gray-200"
			}
		},
		defaultVariants: {
			color: "black"
		}
	});
		
	/**
	 * Returns list of classes for subtitle variants.
	 */
	public subtitleVariants: Function = cva(undefined, {
		variants: {
			color: {
				black: "text-gray-500",
				white: "text-gray-200/50"
			}
		},
		defaultVariants: {
			color: "black"
		}
	});
}

// Export the component model
export const component: EbListItem = new EbListItem();