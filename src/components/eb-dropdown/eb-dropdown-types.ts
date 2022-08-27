export interface EbDropdownOption {
	title: string;
	icon?: Array<string>;
	action: VoidFunction;
	visible?: boolean;
}