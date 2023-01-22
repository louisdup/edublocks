import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * View state for the connect raspberry pi modal.
 */
export class ConnectRaspberryPiState {
	/**
	 * Stores data from the connect raspberry pi form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the connect raspberry pi form.
	 */
	public errors: FormErrors = {};

	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;

	/**
	 * True if the app is trying to connect to a raspberry pi.
	 */
	public isConnecting: boolean = false;
}