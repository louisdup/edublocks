import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the python platform.
 */
export class PythonModel extends PlatformModelBase {
	/**
	 * Returns config/information about the Python platform.
	 */
	public config: PlatformConfigModel = {
		name: "Python 3",
		key: "Python",
		color: "blue",
		logo: "/images/platforms/python/logo.svg",
		image: "/images/platforms/python/thumbnail.svg"
	};
}

// Export the platform model.
export const python: PythonModel = new PythonModel();