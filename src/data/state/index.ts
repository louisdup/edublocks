import { PlatformModelBase } from "@/platforms/base-classes/platform-model-base";
import { ModalModel } from "@/utilities/modal-utilities";
import { reactive } from "vue";

/**
 * Class for application state
 */
class State {
	/**
	 * Store application language for localization. Assumes english by default.
	 */
	public language: string = "en";

	/**
	 * Store current modal for the active view.
	 */
	public modal: ModalModel | undefined;

	/**
	 * Store current active platform.
	 */
	public platform: PlatformModelBase | undefined;
}

/**
 * Application state for storing settings such as language and layouts
 */
export const state: State = reactive(new State());