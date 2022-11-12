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
	public getOptionActiveClassList(active: string, key: string, pageBackground?: string): string {
		const classes: Array<string> = [];

		switch (pageBackground) {
			case "gray":
				if (active === key) {
					classes.push("bg-gray-200");
				}
				else {
					classes.push("hover:bg-gray-200");
				}
				break;
			default:
				if (active === key) {
					classes.push("bg-gray-100");
				}
				else {
					classes.push("hover:bg-gray-100");
				}
				break;
		}

		if (active === key) {
			classes.push("text-gray-700", "cursor-default");
		}
		else {
			classes.push("text-gray-500", "cursor-pointer");
		}

		return classes.join(" ");
	}
	
}

// Export the component model
export const component: EbTabsModel = new EbTabsModel();