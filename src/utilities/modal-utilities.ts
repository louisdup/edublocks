import { state } from "@/data/state";

/**
 * Data model for a modal.
 */
export interface ModalModel {
	modal: string;
	options?: ModalOptions;
}

/**
 * Data model for modal options.
 */
export interface ModalOptions {
	[key: string]: any;
}

/**
 * Utility functions for screen size.
 */
export class ModalUtilities {
	/**
	 * Shows a modal by setting the current modal in the application state.
	 */
	public static showModal(modal: ModalModel): void {
		state.modal = modal;
	}
	
	/**
	 * Closes a modal by setting the current modal to undefined.
	 */
	public static closeModal(): void {
		state.modal = undefined;
	}
}