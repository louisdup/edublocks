import { reactive, watchEffect } from "vue";
import { SimulatorModelBase } from "../../base-classes/simulator-model-base";
import { SoundLevelState } from "./sound-level-state";

/**
 * Component model for the sound level component.
 */
export class SoundLevelModel extends SimulatorModelBase {
	/**
	 * Reactive instance of the component state.
	 */
	public state: SoundLevelState = reactive(new SoundLevelState());

	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForSoundLevelChanges();
		this.setInitialValues();
	}

	/**
	 * Sets initial values.
	 */
	private setInitialValues(): void {
		this.state.data["sound_level"] = "127";
	}

	/**
	 * Watches for sound level changes then sends them to the simulator.
	 */
	private watchForSoundLevelChanges(): void {
		watchEffect(() => {
			if (this.state.data["sound_level"]) {
				this.sendSoundLevelValue();
			}
		});
	}

	/**
	 * Sends the sound level value to the simulator.
	 */
	private sendSoundLevelValue(): void {
		this.setSimulatorValue("soundLevel", this.state.data["sound_level"]);
	}
}

// Export the component model.
export const component: SoundLevelModel = new SoundLevelModel();