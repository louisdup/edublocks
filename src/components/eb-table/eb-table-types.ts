import { EbDropdownOption } from "../eb-dropdown/eb-dropdown-types";

/**
 * Item for the table component.
 */
export interface EbTableItem {
	title: string;
	meta: Array<EbTableItemMeta>;
	action: VoidFunction;
	thumbnail?: string;
	dropdownOptions?: Array<Array<EbDropdownOption>>;
}

/**
 * Metadata for a table item.
 */
export interface EbTableItemMeta {
	key: string;
	label: string;
}