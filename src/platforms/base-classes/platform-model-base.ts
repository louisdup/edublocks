import { PlatformConfigModel } from "@/data/models/platform-config-model";

/**
 * Base class exposing common functionality to all platform models.
 */
export abstract class PlatformModelBase {
	/**
	 * Stores config/information about a platform.
	 */
	public abstract config: PlatformConfigModel;
}