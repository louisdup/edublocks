import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the tabs component.
 */
class EbTabsModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "tabs";
	}

	/**
	 * Returns button color based on active prop.
	 */
	public getButtonColor(active: string, key: string): string | undefined {
		return active === key ? "pink" : "white";
	}
}

// Export the component model
export const component: EbTabsModel = new EbTabsModel();