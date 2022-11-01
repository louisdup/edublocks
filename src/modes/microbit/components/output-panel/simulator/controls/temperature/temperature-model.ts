import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "../../base-classes/simulator-model-base";
import { TemperatureState } from "./temperature-state";

/**
 * Component model for the temperature component.
 */
export class TemperatureModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: TemperatureState = reactive(new TemperatureState());

	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForTemperatureChanges();
		this.setInitialValues();
	}

	/**
	 * Sets initial values.
	 */
	private setInitialValues(): void {
		this.state.data["temperature"] = "21";
	}

	/**
	 * Watches for temperature changes then sends them to the simulator.
	 */
	private watchForTemperatureChanges(): void {
		watchEffect(() => {
			if (this.state.data["temperature"]) {
				this.sendTemperatureValue();
			}
		});
	}

	/**
	 * Sends the temperature value to the simulator.
	 */
	private sendTemperatureValue(): void {
		this.setSimulatorValue("temperature", this.state.data["temperature"]);
	}
}

// Export the component model.
export const component: TemperatureModel = new TemperatureModel();