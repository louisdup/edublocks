import { PlatformModelBase } from "@/platforms/base-classes/platform-model-base";
import { circuitpython } from "@/platforms/circuitpython";
import { html } from "@/platforms/html";
import { microbit } from "@/platforms/microbit";
import { python } from "@/platforms/python";
import { raspberryPi } from "@/platforms/raspberry-pi";

/**
 * Utility functions for platforms.
 */
export class PlatformUtilities {
	/**
	 * Returns a list of available platforms.
	 */
	public static getPlatforms(): Array<PlatformModelBase> {
		return [
			python,
			html,
			microbit,
			circuitpython,
			raspberryPi
		];
	}

	/**
	 * Returns a platform from its key.
	 */
	public static getPlatformFromKey(key: string): PlatformModelBase {
		return this.getPlatforms().filter((platform: PlatformModelBase) => {
			return platform.config.key === key;
		})[0];
	}
}