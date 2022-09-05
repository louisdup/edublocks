import { PlatformConfigModel } from "@/data/models/platform-config-model";
import { PlatformModelBase } from "../base-classes/platform-model-base";

/**
 * Platform model for the CircuitPython platform.
 */
export class CircuitPythonModel extends PlatformModelBase {
	/**
	 * Returns config/information about the CircuitPython platform.
	 */
	public config: PlatformConfigModel = {
		name: "CircuitPython",
		key: "CircuitPython",
		color: "purple",
		logo: "/images/platforms/circuitpython/logo.svg"
	};
}

// Export the platform model.
export const circuitpython: CircuitPythonModel = new CircuitPythonModel();