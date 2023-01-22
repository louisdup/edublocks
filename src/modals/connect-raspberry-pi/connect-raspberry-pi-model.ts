import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { reactive, watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { ConnectRaspberryPiState } from "./connect-raspberry-pi-state";
import * as yup from "yup";
import router from "@/router";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { LinkUtilities } from "@/utilities/link-utilities";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { raspberryPi } from "@/modes/raspberry-pi";

/**
 * Modal model for the connect raspberry pi modal.
 */
class ConnectRaspberryPiModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "connect-raspberry-pi";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: ConnectRaspberryPiState = reactive(new ConnectRaspberryPiState());

	/**
	 * Initialise the modal model.
	 */
	public init(): void {
		this.watchForFormChanges();
	}

	/**
	 * Watches for changes on the form and checks if it's valid.
	 */
	private watchForFormChanges(): void {
		watchEffect(async () => {
			this.state.isValid = await FormUtilities.isFormValid(this.getValidationSchema(), this.state.data);
		});
	}

	/**
	 * Returns validation schema for the connect raspberry pi form.
	 */
	public getValidationSchema(): ValidationSchema {
		return {
			ip_address: yup
				.string()
				.matches(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/, FormUtilities.getValidationMessage("ip-address"))
				.required(FormUtilities.getValidationMessage("required", [this.getText("ip-address")]))
		};
	}

	/**
	 * Validates a specified field and then updates the value of isValid to true if all fields are valid.
	 */
	public async validateField(field: string): Promise<void> {
		FormUtilities.validateField(field, this.getValidationSchema(), this.state.data, this.state.errors);
		this.state.isValid = await FormUtilities.isFormValid(this.getValidationSchema(), this.state.data);
	}

	/**
	 * True if the connect raspberry pi form is not valid. 
	 */
	public isConnectButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * True if the app is trying to connect to a raspberry pi. 
	 */
	public isConnectButtonLoading(): boolean {
		return this.state.isConnecting;
	}

	/**
	 * Called when the cancel button is clicked.
	 * Sends the user back to the homepage and closes the modal. 
	 */
	public onCancelButtonClicked(): void {
		ModalUtilities.closeModal();
		router.push("/");
	}

	/**
	 * Shows the connect modal again when the connection is closed.
	 */
	private showModalOnConnectionClosed(): void {
		LinkUtilities.onClose(() => {
			if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.mode.config.key === raspberryPi.config.key) {
				ModalUtilities.showModal({
					modal: "ConnectRaspberryPi"
				});
			}
		});
	}

	/**
	 * Called when the connect button is clicked.
	 * Attempts to connect to the specified IP Address. 
	 */
	public async onConnectButtonClicked(): Promise<void> {
		if (this.state.isValid) {
			this.state.isConnecting = true;

			LinkUtilities.ipAddress.value = this.state.data["ip_address"];

			try {
				await LinkUtilities.connect();
				this.showModalOnConnectionClosed();
				ModalUtilities.closeModal();
			}
			catch {
				this.state.errors["ip_address"] = this.getText("error-connecting");
			}

			this.state.isConnecting = false;
		}
	}
}

// Export the modal model.
export const modal: ConnectRaspberryPiModel = new ConnectRaspberryPiModel();