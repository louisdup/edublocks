import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "../../base-classes/simulator-model-base";
import { PinsState } from "./pins-state";

/**
 * Component model for the pins component.
 */
export class PinsModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: PinsState = reactive(new PinsState());

	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForChanges();
	}

	/**
	 * Watches for changes on any of the inputs then sends them to the simulator.
	 */
	private watchForChanges(): void {
		watchEffect(() => {
			if (this.state.data["hold_0"] !== undefined) {
				this.sendPinHoldValue("0");
			}
			if (this.state.data["hold_1"] !== undefined) {
				this.sendPinHoldValue("1");
			}
			if (this.state.data["hold_2"] !== undefined) {
				this.sendPinHoldValue("2");
			}
			if (this.state.data["hold_logo"] !== undefined) {
				this.sendPinHoldValue("Logo");
			}
		});
	}

	/**
	 * Sends a pin touched event to the simulator.
	 */
	public onPinButtonClicked(pin: "0" | "1" | "2" | "Logo"): void {
		const pinName: string = `pin${pin}`;
		const holdDataAttribute: string = `hold_${pin.toLowerCase()}`;

		this.setSimulatorValue(pinName, 1);
		this.state.data[holdDataAttribute] = true;

		setTimeout(() => {
			this.setSimulatorValue(pinName, 0);
			this.state.data[holdDataAttribute] = false;
		}, 100);
	}

	/**
	 * Sends a pin hold value to the simulator.
	 */
	private sendPinHoldValue(pin: "0" | "1" | "2" | "Logo"): void {
		const pinName: string = `pin${pin}`;
		const holdDataAttribute: string = `hold_${pin.toLowerCase()}`;
		let value: number = 0;

		if (this.state.data[holdDataAttribute]) {
			value = 1;
		}

		this.setSimulatorValue(pinName, value);
	}
}

// Export the component model.
export const component: PinsModel = new PinsModel();