import { ModalModel } from "@/utilities/modal-utilities";
import { reactive } from "vue";

/**
 * Class for application state
 */
class State {
	/**
	 * Returns application language for localization. Assumes english by default.
	 */
	public language: string = "en";

	/**
	 * Returns current modal for the active view.
	 */
	public modal: ModalModel | undefined;

	/**
	 * Returns layout for data tables based on users choice. Assumes list by default.
	 */
	public dataLayout: "list" | "grid" = "list";
}

/**
 * Export application state for storing settings such as language and layouts
 */
export const state: State = reactive(new State());