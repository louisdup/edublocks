import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the chip component.
 */
class EbChipModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "chip";
	}

	/**
	 * Returns list of classes for the chip component.
	 */
	public variants: Function = cva(["bg-white", "px-3", "py-2.5", "rounded-lg", "border-2", "border-transparent", "hover:border-blue-500", "shadow-sm", "mb-0.5", "flex", "items-center", "space-x-3", "justify-between", "text-left", "transition-colors"], {
		variants: {
			isFullWidth: {
				true: "w-full"
			}
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
export const component: EbChipModel = new EbChipModel();