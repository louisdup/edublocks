/**
 * Data model for an editor button.
 */
export interface EditorButtonModel {
	label?: string;
	key: string;
	icon?: Array<string>;
	color: string;
	action: VoidFunction;
	visible?: boolean;
}