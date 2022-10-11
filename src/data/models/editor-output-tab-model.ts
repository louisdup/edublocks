import { Component } from "vue";

/**
 * Data model for an editor output tab.
 */
export interface EditorOutputTabModel {
	label?: string;
	key: string;
	component: Component;
	visible?: boolean;
	active?: boolean;
	action?: VoidFunction;
}