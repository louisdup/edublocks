import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "../../base-classes/simulator-model-base";
import { CompassState } from "./compass-state";

/**
 * Component model for the compass component.
 */
export class CompassModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: CompassState = reactive(new CompassState());

	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForChanges();
		this.setInitialValues();
	}

	/**
	 * Sets initial values.
	 */
	private setInitialValues(): void {
		this.state.data["heading"] = "0";
		this.state.data["x"] = "0";
		this.state.data["y"] = "0";
		this.state.data["z"] = "0";
	}

	/**
	 * Watches for changes on any of the inputs then sends them to the simulator.
	 */
	private watchForChanges(): void {
		watchEffect(() => {
			if (this.state.data["heading"]) {
				this.sendHeadingValue();
			}
			if (this.state.data["x"]) {
				this.sendMagneticFieldValue("X");
			}
			if (this.state.data["y"]) {
				this.sendMagneticFieldValue("Y");
			}
			if (this.state.data["z"]) {
				this.sendMagneticFieldValue("Z");
			}
		});
	}

	/**
	 * Sends the heading value to the simulator.
	 */
	private sendHeadingValue(): void {
		this.setSimulatorValue("heading", this.state.data["heading"]);
	}

	/**
	 * Sends a magnetic field value to the simulator.
	 */
	private sendMagneticFieldValue(axis: "X" | "Y" | "Z"): void {
		this.setSimulatorValue(`compass${axis}`, this.state.data[axis.toLowerCase()]);
	}
}

// Export the component model.
export const component: CompassModel = new CompassModel();