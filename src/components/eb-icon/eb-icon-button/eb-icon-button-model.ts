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
	public variants: Function = cva(["h-12", "w-12", "rounded-lg", "flex", "flex-none", "items-center", "justify-center", "hover:bg-gray-100", "cursor-pointer", "transition-all"], {
		variants: {
			isActive: {
				true: "bg-gray-100"
			}
		}
	});

	/**
	 * Returns a color for the icon based on whether the button is active or not.
	 */
	public getIconColor(active?: boolean, color?: string): string | undefined {
		return active ? "blue" : color;
	}
}

// Export the component model
export const component: EbIconButtonModel = new EbIconButtonModel();