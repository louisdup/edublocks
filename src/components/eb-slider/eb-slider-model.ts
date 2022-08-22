import { ComponentModelBase } from "../base-classes/component-model-base";
import { Options } from "@splidejs/vue-splide";

/**
 * Component model for the slider component.
 */
export class EbSliderModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "slider";
	}

	/**
	 * Returns a list of options for the slider.
	 */
	public options: Options = {
		autoWidth: true,
		gap: "0.5rem", 
		pagination: false
	};
}

// Export the component model.
export const component: EbSliderModel = new EbSliderModel();