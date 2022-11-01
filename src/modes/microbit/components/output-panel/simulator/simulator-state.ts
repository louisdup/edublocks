import { FormData } from "@/utilities/form-utilities";

/**
 * View state for the simulator component.
 */
export class SimulatorState {
	/**
	 * Stores data from the simulator controls.
	 */
	public data: FormData = {};

	/**
	 * True if the simulator is running.
	 */
	public isRunning: boolean = false;
}