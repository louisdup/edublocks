import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the select component.
 */
class EbSelectModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "select";
	}
	
	/**
	 * Returns the value of the select box.
	 */
	public getSelectValue(event: Event): string {
		return (event.target as HTMLInputElement).value;
	}
}

// Export the component model
export const component: EbSelectModel = new EbSelectModel();