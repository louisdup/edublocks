import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the micro:bit platform.
 */
export class MicrobitModel extends PlatformModelBase {
	/**
	 * Returns config/information about the micro:bit platform.
	 */
	public config: PlatformConfigModel = {
		name: "micro:bit",
		key: "microbit",
		color: "green",
		logo: "/images/platforms/microbit/logo.svg"
	};
}

// Export the platform model.
export const microbit: MicrobitModel = new MicrobitModel();