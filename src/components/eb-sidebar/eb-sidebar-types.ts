/**
 * Sidebar item for the sidebar component.
 */
export interface EbSidebarItem {
	key: string;
	title?: string;
	icon?: Array<string>; 
	href?: string;
	action?: VoidFunction;
}