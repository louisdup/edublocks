import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the Raspberry Pi platform.
 */
export class RaspberryPiModel extends PlatformModelBase {
	/**
	 * Returns config/information about the Raspberry Pi platform.
	 */
	public config: PlatformConfigModel = {
		name: "Raspberry Pi",
		key: "RPi",
		color: "pink",
		logo: "/images/platforms/raspberry-pi/logo.svg",
		image: "/images/platforms/raspberry-pi/thumbnail.svg"
	};
}

// Export the platform model.
export const raspberryPi: RaspberryPiModel = new RaspberryPiModel();