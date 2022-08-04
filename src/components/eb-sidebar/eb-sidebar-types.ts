// Define a sidebar nav item
export interface EbSidebarItem {
	key: string;
	title?: string;
	icon?: Array<string>; 
	href?: string;
	action?: VoidFunction;
}