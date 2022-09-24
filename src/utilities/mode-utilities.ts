import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { circuitpython } from "@/modes/circuitpython";
import { html } from "@/modes/html";
import { microbit } from "@/modes/microbit";
import { python } from "@/modes/python";
import { raspberryPi } from "@/modes/raspberry-pi";

/**
 * Utility functions for modes.
 */
export class ModeUtilities {
	/**
	 * Returns a list of available modes.
	 */
	public static getModes(): Array<ModeModelBase> {
		return [
			python,
			html,
			microbit,
			circuitpython,
			raspberryPi
		];
	}

	/**
	 * Returns a mode from its key.
	 */
	public static getModeFromKey(key: string): ModeModelBase {
		return this.getModes().filter((mode: ModeModelBase) => {
			return mode.config.key === key;
		})[0];
	}
}