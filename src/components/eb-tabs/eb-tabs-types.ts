export interface EbTabsOption {
	label: string;
	key: string;
	icon?: Array<string>;
	action: VoidFunction;
	visible?: boolean;
}