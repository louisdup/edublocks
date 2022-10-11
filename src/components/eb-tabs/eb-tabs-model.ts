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
	 * Returns dynamic class list based on whether the option is active.
	 */
	public getOptionActiveClassList(active: string, key: string): string {
		return active === key ? "bg-gray-100 text-gray-700 cursor-default" : "hover:bg-gray-100 text-gray-500 cursor-pointer";
	}
}

// Export the component model
export const component: EbTabsModel = new EbTabsModel();