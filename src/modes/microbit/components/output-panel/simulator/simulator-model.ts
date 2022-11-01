import { EditorUtilities } from "@/utilities/editor-utilities";
import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "./base-classes/simulator-model-base";
import { SimulatorState } from "./simulator-state";

/**
 * Component model for the simulator component.
 */
export class SimulatorModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: SimulatorState = reactive(new SimulatorState());
		 
	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForCodeChanges();
		this.watchForSimulatorMessages();
	}

	/**
	 * Watches for code changes and stops the current simulator program from running.
	 */
	private watchForCodeChanges(): void {
		watchEffect(() => {
			if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.code !== undefined) {
				this.stopSimulator();
			}
		});
	}

	/**
	 * Returns the URL for the simulator.
	 */
	public getSimulatorUrl(): string {
		return "https://python-simulator.usermbit.org/v/0.1/simulator.html?color=%230ea5e9";
	}

	/**
	 * True if the advanced switch is toggled.
	 */
	public isAdvancedModeEnabled(): boolean {
		return this.state.data["advanced"];
	}

	/**
	 * Watches for messages from the simulator and runs the relevant action.
	 */
	private watchForSimulatorMessages(): void {
		window.addEventListener("message", (event: MessageEvent) => {
			if (event.source === this.getSimulator()) {
				switch (event.data.kind) {
					case "request_flash":
						this.sendCodeToSimulator();
						break;
				}
			}
		});
	}

	/**
	 * Sends current project code to the simulator.
	 */
	private sendCodeToSimulator(): void {
		if (EditorUtilities.currentProject.value) {
			this.getSimulator().postMessage({
				kind: "flash",
				filesystem: {
					"main.py": new TextEncoder().encode(EditorUtilities.currentProject.value.code)
				}
			}, "*");
			this.state.isRunning = true;
		}
	}

	/**
	 * Stops the current code running on the simulator.
	 */
	private stopSimulator(): void {
		this.getSimulator().postMessage({
			kind: "stop"
		}, "*");
		this.state.isRunning = false;
	}

	/**
	 * Resets the simulator.
	 */
	private resetSimulator(): void {
		this.getSimulator().postMessage({
			kind: "reset"
		}, "*");
	}

	/**
	 * Mutes the simulator.
	 */
	private muteSimulator(): void {
		this.state.data["muted"] = true;
		this.getSimulator().postMessage({
			kind: "mute"
		}, "*");
	}

	/**
	 * Unmutes the simulator.
	 */
	private unmuteSimulator(): void {
		this.state.data["muted"] = false;
		this.getSimulator().postMessage({
			kind: "unmute"
		}, "*");
	}

	/**
	 * True if the simulator is not ready.
	 */
	public isStopButtonDisabled(): boolean {
		return !this.state.isRunning;
	}

	/**
	 * Called when the user clicks the stop button.
	 */
	public onStopButtonClicked(): void {
		if (this.state.isRunning) {
			this.stopSimulator();
		}
	}

	/**
	 * True if the simulator is not ready.
	 */
	public isResetButtonDisabled(): boolean {
		return !this.state.isRunning;
	}

	/**
	 * Called when the user clicks the reset button.
	 */
	public onResetButtonClicked(): void {
		if (this.state.isRunning) {
			this.resetSimulator();
		}	
	}

	/**
	 * Returns an icon for the volume button.
	 */
	public getVolumeButtonIcon(): Array<string> {
		return this.state.data["muted"] ? ["fas", "volume-xmark"] : ["fas", "volume"];
	}

	/**
	 * Called when the user clicks the volume button.
	 */
	public onVolumeButtonClicked(): void {
		if (this.state.data["muted"]) {
			this.unmuteSimulator();
		}	
		else {
			this.muteSimulator();
		}
	}
}

// Export the component model.
export const component: SimulatorModel = new SimulatorModel();