import { ModalUtilities } from "@/utilities/modal-utilities";
import { WebUSBUtilities } from "@/utilities/webusb-utilities";
import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { ConnectMicrobitState } from "./connect-microbit-state";

/**
 * Modal model for the connect micro:bit modal.
 */
class ConnectMicrobitModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "connect-microbit";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: ConnectMicrobitState = reactive(new ConnectMicrobitState());

	/**
	 * Initialise the modal model.
	 */
	public init(): void {
		this.state.currentStep = 0;
	}

	/**
	 * Returns a title for the connect micro:bit modal.
	 */
	public getTitle(): string {
		switch (this.state.currentStep) {
			case 0:
				return this.getText("connect-cable");
			case 1:
				return this.getText("select-microbit");
			default:
				return "";
		}
	}

	/**
	 * Called when the user clicks the back button.
	 * Decreases the current step by 1.
	 */
	public onBackButtonClicked(): void {
		if (this.state.currentStep > 0) {
			this.state.currentStep--;
		}
	}

	/**
	 * True if the step is 0.
	 */
	public isBackButtonDisabled(): boolean {
		return this.state.currentStep === 0;
	}

	/**
	 * Called when the user clicks the next button.
	 */
	public onNextButtonClicked(): void {
		switch (this.state.currentStep) {
			case 0:
				this.state.currentStep++;
				break;
			case 1:
				this.connectMicrobit();
				break;
		}
	}

	/**
	 * Closes the modal and prompts the user to choose their micro:bit.
	 */
	private async connectMicrobit(): Promise<void> {
		ModalUtilities.closeModal();

		await WebUSBUtilities.chooseDevice([
			{ vendorId: 0x0d28, productId: 0x0204 }
		]);
	}
}

// Export the modal model.
export const modal: ConnectMicrobitModel = new ConnectMicrobitModel();