import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the HTML platform.
 */
export class HTMLModel extends PlatformModelBase {
	/**
	 * Returns config/information about the HTML platform.
	 */
	public config: PlatformConfigModel = {
		name: "HTML",
		key: "HTML",
		color: "orange",
		logo: "/images/platforms/html/logo.svg"
	};
}

// Export the platform model.
export const html: HTMLModel = new HTMLModel();