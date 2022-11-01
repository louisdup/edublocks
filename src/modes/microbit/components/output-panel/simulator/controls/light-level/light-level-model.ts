import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "../../base-classes/simulator-model-base";
import { LightLevelState } from "./light-level-state";

/**
 * Component model for the light level component.
 */
export class LightLevelModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: LightLevelState = reactive(new LightLevelState());

	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForLightLevelChanges();
		this.setInitialValues();
	}

	/**
	 * Sets initial values.
	 */
	private setInitialValues(): void {
		this.state.data["light_level"] = "127";
	}

	/**
	 * Watches for light level changes then sends them to the simulator.
	 */
	private watchForLightLevelChanges(): void {
		watchEffect(() => {
			if (this.state.data["light_level"]) {
				this.sendLightLevelValue();
			}
		});
	}

	/**
	 * Sends the light level value to the simulator.
	 */
	private sendLightLevelValue(): void {
		this.setSimulatorValue("lightLevel", this.state.data["light_level"]);
	}
}

// Export the component model.
export const component: LightLevelModel = new LightLevelModel();