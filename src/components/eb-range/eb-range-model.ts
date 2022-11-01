import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the range component.
 */
class EbRangeModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "range";
	}
	
	/**
	 * Returns the value of the input.
	 */
	public getInputValue(event: Event): string {
		return (event.target as HTMLInputElement).value;
	}

	/**
	 * Returns text to display the unit.
	 */
	public getUnitText(unit?: string): string | undefined {
		return unit ? ` ${unit}` : undefined;
	}
}

// Export the component model
export const component: EbRangeModel = new EbRangeModel();