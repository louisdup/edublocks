import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "../../base-classes/simulator-model-base";
import { ButtonsState } from "./buttons-state";

/**
 * Component model for the buttons component.
 */
export class ButtonsModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: ButtonsState = reactive(new ButtonsState());

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
			if (this.state.data["hold_a"] !== undefined) {
				this.sendButtonHoldValue("A");
			}
			if (this.state.data["hold_b"] !== undefined) {
				this.sendButtonHoldValue("B");
			}
		});
	}

	/**
	 * Sends a button click to the simulator.
	 */
	public onButtonClicked(button: "A" | "B"): void {
		const buttonName: string = `button${button}`;
		const holdDataAttribute: string = `hold_${button.toLowerCase()}`;

		this.setSimulatorValue(buttonName, 1);
		this.state.data[holdDataAttribute] = true;

		setTimeout(() => {
			this.setSimulatorValue(buttonName, 0);
			this.state.data[holdDataAttribute] = false;
		}, 100);
	}

	/**
	 * Sends a button hold value to the simulator.
	 */
	private sendButtonHoldValue(button: "A" | "B"): void {
		const buttonName: string = `button${button}`;
		const holdDataAttribute: string = `hold_${button.toLowerCase()}`;
		let value: number = 0;

		if (this.state.data[holdDataAttribute]) {
			value = 1;
		}

		this.setSimulatorValue(buttonName, value);
	}
}

// Export the component model.
export const component: ButtonsModel = new ButtonsModel();