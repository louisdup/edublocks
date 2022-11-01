import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the table component.
 */
class EbTableModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "table";
	}
	
	/**
	 * True if there are items or the table is loading.
	 */
	public isTableVisible(items: Array<any>, isLoading?: boolean): boolean | undefined {
		return items.length > 0 || isLoading;
	}
	
	/**
	 * True if there are no items and the table isn't loading.
	 */
	public isEmptyStateVisible(items: Array<any>, isLoading?: boolean): boolean {
		return items.length === 0 && !isLoading;
	}
}

// Export the component model
export const component: EbTableModel = new EbTableModel();