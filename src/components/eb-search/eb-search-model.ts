import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the search component.
 */
class EbSearchModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "search";
	}
	
	/**
	 * Returns the value of the search input.
	 */
	public getInputValue(event: Event): string {
		return (event.target as HTMLInputElement).value;
	}
}

// Export the component model
export const component: EbSearchModel = new EbSearchModel();