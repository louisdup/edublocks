export interface ShareOption {
	title: string;
	subtitle?: string;
	icon?: Array<string>;
	thumbnail?: string;
	visible?: boolean;
	action: VoidFunction;
}