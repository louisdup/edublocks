import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../../base-classes/component-model-base";

/**
 * Component model for the list item component.
 */
class EbListItemModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "list-item";
	}

	/**
	 * Returns list of classes for the list item component.
	 */
	public variants: Function = cva(["flex", "items-center", "space-x-4", "justify-between", "text-left"], {
		variants: {
			isButton: {
				true: "p-4 hover:bg-gray-200 focus:bg-white/10 transition-colors rounded-md cursor-pointer"
			},
			isFullWidth: {
				true: "w-full",
				false: "w-[16.5rem]"
			}
		}
	});
		
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
	public subtitleVariants: Function = cva(["font-normal"], {
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

	/**
	 * Returns name of component based on isButton prop.
	 */
	public getComponentName(isButton?: boolean): string {
		return isButton ? "button" : "div";
	}
}

// Export the component model
export const component: EbListItemModel = new EbListItemModel();