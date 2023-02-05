import { ApprovedExtensionModel } from "@/data/models/approved-extension-model";
import { FormData, FormErrors } from "@/utilities/form-utilities";

/**
 * Component state for the extensions sidebar component.
 */
export class ExtensionsState {
	/**
	 * Stores data from the import extension form.
	 */
	public data: FormData = {};
	 
	/**
	 * Stores a list of errors from the import extension form.
	 */
	public errors: FormErrors = {};
	
	/**
	 * True if all fields are valid.
	 */
	public isValid: boolean = false;
		
	/**
	 * True if approved extensions are currently in the process of loading.
	 */
	public isLoadingApprovedExtensions: boolean = false;
 
	/**
	 * The list of approved extensions to display.
	 */
	public approvedExtensions: Array<ApprovedExtensionModel> = [];

	/**
	 * True if an extension is being imported.
	 */
	public isImportingExtension: boolean = false;
}