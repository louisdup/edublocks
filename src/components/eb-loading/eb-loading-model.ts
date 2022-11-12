import { ComponentModelBase } from "../base-classes/component-model-base";
import { cva } from "class-variance-authority";

/**
 * Component model for the loading component.
 */
export class EbLoadingModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "loading";
	}

	/**
	 * Returns list of classes for the loading component.
	 */
	public variants: Function = cva(["h-full", "w-full", "flex", "items-center", "justify-center", "absolute", "inset-0", "z-[100]"], {
		variants: {
			backgroundColor: {
				white: ["bg-white", "brightness-100"],
				gray: ["brightness-95"],
			}
		},
		defaultVariants: {
			backgroundColor: "gray"
		}
	});
}

// Export the component model.
export const component: EbLoadingModel = new EbLoadingModel();