import { Component } from "vue";

/**
 * Data model for an editor sidebar tab.
 */
export interface EditorSidebarTabModel {
	key: string;
	icon: Array<string>;
	component: Component;
	visible?: boolean;
	active?: boolean;
	action?: VoidFunction;
}