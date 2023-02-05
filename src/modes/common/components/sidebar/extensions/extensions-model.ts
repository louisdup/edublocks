import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { reactive, watchEffect } from "vue";
import { ExtensionsState } from "./extensions-state";
import * as ExtensionsProvider from "@/data/providers/extensions-provider";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { ApprovedExtensionModel } from "@/data/models/approved-extension-model";
import { ExtensionsUtilities } from "@/utilities/extensions-utilities";
import { ExtensionModel } from "@/data/models/extension-model";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import * as yup from "yup";

/**
 * Component model for the extensions component.
 */
class ExtensionsModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "extensions";
	}

	/**
	 * Reactive instance of the component state.
	 */
	public state: ExtensionsState = reactive(new ExtensionsState());

	/**
	 * Initialise the component model.
	 */
	public init(): void {
		this.loadInitialData();
		this.watchForFormChanges();
	}

	/**
	 * Returns the title for the extensions component.
	 */
	public getTitle(): string {
		return this.getText("extensions");
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private loadInitialData(): void {
		this.loadApprovedExtensions();
	}

	/**
	 * Loads approved extensions for the current project mode.
	 */
	private async loadApprovedExtensions(): Promise<void> {
		if (EditorUtilities.currentProject.value) {
			this.state.isLoadingApprovedExtensions = true;
		
			const response: FirestoreFetchResponseModel<Array<ApprovedExtensionModel>> = await ExtensionsProvider.getApprovedExtensionsAsync(EditorUtilities.currentProject.value.mode.config.key);
			
			if (response.wasSuccessful && response.data) {
				this.state.approvedExtensions = response.data;
			}

			this.state.isLoadingApprovedExtensions = false;
		}
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
	 * Returns validation schema.
	 */
	private getValidationSchema(): ValidationSchema {
		return {
			url: yup
				.string()
				.url(FormUtilities.getValidationMessage("url"))
				.required(FormUtilities.getValidationMessage("required", [this.getText("url")])),
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
	 * True if the form is not valid. 
	 */
	public isImportButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * True if an extension is being imported. 
	 */
	public isImportButtonLoading(): boolean {
		return this.state.isImportingExtension;
	}

	/**
	 * Imports an extension from the URL provided by the user.
	 */
	private async importExtension(): Promise<void> {
		if (EditorUtilities.currentProject.value) {
			this.state.isImportingExtension = true;
			await ExtensionsUtilities.loadExtensionFromUrl(this.state.data["url"]);
			EditorUtilities.currentProject.value.mode.setSidebarTabInactive("extensions");
			this.state.data["url"] = "";
			this.state.isImportingExtension = false;
		}
	}

	/**
	 * Called when the user clicks the import button.
	 * Imports an extension from the URL provided by the user.
	 */
	public onImportButtonClicked(): void {
		if (this.state.isValid) {
			this.importExtension();
		}
	}

	/**
	 * Returns a list of approved extensions filtering out ones that have already been added to the project.
	 */
	public getFilteredApprovedExtensions(): Array<ApprovedExtensionModel> {
		return this.state.approvedExtensions.filter((extension: ApprovedExtensionModel) => {
			if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.extensions) {
				return !EditorUtilities.currentProject.value.extensions.find((activeExtension: ExtensionModel) => {
					return activeExtension.url === extension.url;
				});
			}
			else {
				return extension;
			}
		});
	}

	/**
	 * True if there are no approved extensions to display and no extensions are loading.
	 */
	public isEmptyStateVisible(): boolean {
		return this.getFilteredApprovedExtensions().length === 0 && !this.state.isLoadingApprovedExtensions;
	}

	/**
	 * Called when the user clicks on an approved extension.
	 * Imports the extension into the editor.
	 */
	public onApprovedExtensionClicked(extension: ApprovedExtensionModel): void {
		this.state.data["url"] = extension.url;
		this.importExtension();
	}
}

// Export the component model
export const component: ExtensionsModel = new ExtensionsModel();