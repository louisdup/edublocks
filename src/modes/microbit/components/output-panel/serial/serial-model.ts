import * as DAPjs from "dapjs";
import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { DAPLinkUtilities } from "@/utilities/daplink-utilities";
import { WebUSBUtilities } from "@/utilities/webusb-utilities";
import { reactive } from "vue";
import { SerialState } from "./serial-state";

/**
 * Component model for the serial component.
 */
export class SerialModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "serial";
	}
		
	/**
	 * Reactive instance of the component state.
	 */
	public state: SerialState = reactive(new SerialState());
		 
	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForSerialOutput();
	}

	/**
	 * Watches for any serial output from the connected webUSB device.
	 */
	private async watchForSerialOutput(): Promise<void> {
		if (WebUSBUtilities.device.value && DAPLinkUtilities.daplinkInstance.value) {
			if (!DAPLinkUtilities.daplinkInstance.value.connected) {
				await DAPLinkUtilities.daplinkInstance.value.connect();
			}
			await DAPLinkUtilities.daplinkInstance.value.setSerialBaudrate(115200);
			DAPLinkUtilities.daplinkInstance.value.on(DAPjs.DAPLink.EVENT_SERIAL_DATA, (data: string) => {
				this.state.data.push(data);
			});
			await DAPLinkUtilities.daplinkInstance.value.startSerialRead(1);
		}
	}

	/**
	 * Writes data to the connected webUSB device when the user types in the terminal.
	 */
	public onInput(data: string): void {
		if (WebUSBUtilities.device.value && DAPLinkUtilities.daplinkInstance.value) {
			DAPLinkUtilities.daplinkInstance.value.serialWrite(data);
		}
	}
}

// Export the component model.
export const component: SerialModel = new SerialModel();