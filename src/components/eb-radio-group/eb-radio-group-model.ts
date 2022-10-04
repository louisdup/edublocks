import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the radio group component.
 */
class EbRadioGroupModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "radio-group";
	}

	/**
	 * Returns class for a radio button based on active prop.
	 */
	public getRadioButtonActiveClass(active: string, key: string): string | undefined {
		return active === key ? "ring-2 ring-pink-500 border-transparent" : "border-gray-300";
	}
}

// Export the component model
export const component: EbRadioGroupModel = new EbRadioGroupModel();