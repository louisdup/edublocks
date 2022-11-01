import { ComponentModelBase } from "@/components/base-classes/component-model-base";

/**
 * Base class exposing common functionality to all component models.
 */
export class SimulatorModelBase extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "simulator";
	}
    
	/**
	 * Returns the simulator iframe element.
	 */
	public getSimulator(): Window {
		const simulator: HTMLIFrameElement = document.getElementById("simulator") as HTMLIFrameElement;
		const simulatorContentWindow: Window = simulator.contentWindow as Window;
		return simulatorContentWindow;
	}

	/**
	 * Sets a sensor value in the simulator.
	 */
	public setSimulatorValue(id: string, value: string | number): void {
		this.getSimulator().postMessage({
			kind: "set_value",
			id,
			value
		}, "*");
	}
}