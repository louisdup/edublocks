import * as DAPjs from "dapjs";
import { ref, Ref } from "vue";
import { WebUSBUtilities } from "./webusb-utilities";

/**
 * Utility functions for working with DAPLink.
 */
export class DAPLinkUtilities {
	/**
	 * Returns a DAPLink transport method.
	 */
	private static transport: Ref<DAPjs.Transport | undefined> = ref(undefined);

	/**
	 * Returns a DAPLink instance.
	 */
	public static daplinkInstance: Ref<DAPjs.DAPLink | undefined> = ref(undefined);

	/**
	 * Setup the DAPLink instance.
	 */
	public static setupDAPLink(): void {
		if (WebUSBUtilities.device.value) {
			this.transport.value = new DAPjs.WebUSB(WebUSBUtilities.device.value);
			this.daplinkInstance.value = new DAPjs.DAPLink(this.transport.value);

			// Disconnect the DAPLink device & stop serial connection when users leaves page.
			// Ensures user can reconnect via serial if they visit the page again.
			window.addEventListener("beforeunload", () => {
				if (this.daplinkInstance.value && this.daplinkInstance.value.connected) {
					this.daplinkInstance.value.disconnect();
					this.daplinkInstance.value.stopSerialRead();
				}
			});
		}
	}
}