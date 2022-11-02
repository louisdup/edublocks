import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { WebUSBUtilities } from "@/utilities/webusb-utilities";

/**
 * Component model for the webUSB settings component.
 */
class WebUSBSettingsModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "webusb-settings";
	}

	/**
	 * Returns the title for the project settings component.
	 */
	public getTitle(): string {
		return this.getText("webusb");
	}

	/**
	 * Returns the name of the connected webUSB device.
	 */
	public getDeviceName(): string | undefined {
		if (WebUSBUtilities.device.value) {
			return WebUSBUtilities.device.value.productName;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Called when the user clicks the disconnect & forget button.
	 * Disconnects & forgets the connected webUSB device.
	 */
	public onDisconnectForgetButtonClicked(): void {
		WebUSBUtilities.disconnectDevice();
	}
}

// Export the component model
export const component: WebUSBSettingsModel = new WebUSBSettingsModel();