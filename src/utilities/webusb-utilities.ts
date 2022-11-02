import { ref, Ref } from "vue";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for working with webUSB devices.
 */
export class WebUSBUtilities {
	/**
	 * True if navigator.usb is available.
	 */
	public static isWebUSBSupported(): boolean {
		return navigator.usb !== undefined;
	}

	/**
	 * Returns the users chosen webUSB device if one has been selected.
	 */
	public static device: Ref<USBDevice | undefined> = ref(undefined);

	/**
	 * Asks the user to select a webUSB device.
	 */
	public static async chooseDevice(filters: Array<USBDeviceFilter>): Promise<void> {
		try {
			const device: USBDevice | undefined = await navigator.usb.requestDevice({filters});
			if (device) {
				this.setConnectedDevice();
			}
		}
		catch (error) {
			ModalUtilities.showModal({
				modal: "Error"
			});
		}
	}

	/**
	 * Sets the device value to the currently connected device.
	 */
	public static async setConnectedDevice(): Promise<void> {
		await navigator.usb.getDevices().then(async (devices: Array<USBDevice>) => {
			if (devices.length > 0) {
				const connectedDevice: USBDevice = devices[0];
				await connectedDevice.open();
				this.device.value = connectedDevice;
				this.onDeviceStateChanged();
			}
		});
	}

	/**
	 * Disconnects the connected webUSB Device.
	 */
	public static async disconnectDevice(): Promise<void> {
		if (this.device.value) {
			await this.device.value.close();
			await this.device.value.forget();
			this.device.value = undefined;
		}
	}

	/**
	 * Called when the connected webUSB device is disconnected.
	 */
	private static onDeviceStateChanged(): void {
		navigator.usb.addEventListener("disconnect", () => {
			this.device.value = undefined;
		});
		navigator.usb.addEventListener("connect", () => {
			this.setConnectedDevice();
		});
	}
}