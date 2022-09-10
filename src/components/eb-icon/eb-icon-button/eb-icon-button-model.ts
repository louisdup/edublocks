import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../../base-classes/component-model-base";

/**
 * Component model for the icon button component.
 */
class EbIconButtonModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "icon-button";
	}
		
	/**
	 * Returns list of classes for a specific icon button variant.
	 */
	public variants: Function = cva(["h-12", "w-12", "rounded-md", "flex", "flex-none", "items-center", "justify-center", "cursor-pointer", "transition-all"], {
		variants: {
			isActive: {
				true: "bg-gray-200",
				false: "hover:bg-gray-200 hover:opacity-100 opacity-70"
			}
		}
	});
}

// Export the component model
export const component: EbIconButtonModel = new EbIconButtonModel();