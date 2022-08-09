export interface EbBottombarItem {
	key: string;
	title?: string;
	icon?: Array<string>; 
	href?: string;
	action?: VoidFunction;
	component?: string;
	componentProps?: EbBottomBarItemComponentProps;
}

interface EbBottomBarItemComponentProps {
	[key: string]: any;
}