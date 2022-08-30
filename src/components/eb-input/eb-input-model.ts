import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the input component.
 */
class EbInputModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "input";
	}
	
	/**
	 * Returns the value of the input.
	 */
	public getInputValue(event: Event): string {
		return (event.target as HTMLInputElement).value;
	}
}

// Export the component model
export const component: EbInputModel = new EbInputModel();