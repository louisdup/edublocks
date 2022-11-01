import { EbSelectOption } from "@/components/eb-select/eb-select-types";
import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "../../base-classes/simulator-model-base";
import { AccelerometerState } from "./accelerometer-state";

/**
 * Component model for the accelerometer component.
 */
export class AccelerometerModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: AccelerometerState = reactive(new AccelerometerState());

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
		this.state.data["gesture"] = "up";
		this.state.data["x"] = "0";
		this.state.data["y"] = "0";
		this.state.data["z"] = "0";
	}

	/**
	 * Watches for changes on any of the inputs then sends them to the simulator.
	 */
	private watchForChanges(): void {
		watchEffect(() => {
			if (this.state.data["x"]) {
				this.sendAccelerometerAxisValue("X");
			}
			if (this.state.data["y"]) {
				this.sendAccelerometerAxisValue("Y");
			}
			if (this.state.data["z"]) {
				this.sendAccelerometerAxisValue("Z");
			}
		});
	}

	/**
	 * Returns a list for the gesture select box.
	 */
	public getGestureOptions(): Array<EbSelectOption> {
		return [
			{
				label: this.getText("up"),
				value: "up"
			},
			{
				label: this.getText("down"),
				value: "down"
			},
			{
				label: this.getText("left"),
				value: "left"
			},
			{
				label: this.getText("right"),
				value: "right"
			},
			{
				label: this.getText("face-up"),
				value: "face up"
			},
			{
				label: this.getText("face-down"),
				value: "face down"
			},
			{
				label: this.getText("freefall"),
				value: "freefall"
			},
			{
				label: this.getText("3g"),
				value: "3g"
			},
			{
				label: this.getText("6g"),
				value: "6g"
			},
			{
				label: this.getText("8g"),
				value: "8g"
			},
			{
				label: this.getText("shake"),
				value: "shake"
			}
		];
	}

	/**
	 * Called when the send button is clicked.
	 * Sends the accelerometer action to the simulator.
	 */
	public onSendClicked(): void {
		this.setSimulatorValue("gesture", this.state.data["gesture"]);
	}

	/**
	 * Sends an accelerometer axis value to the simulator.
	 */
	private sendAccelerometerAxisValue(axis: "X" | "Y" | "Z"): void {
		this.setSimulatorValue(`accelerometer${axis}`, this.state.data[axis.toLowerCase()]);
	}
}

// Export the component model.
export const component: AccelerometerModel = new AccelerometerModel();