import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { ProjectModel } from "@/data/models/project-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { saveAs } from "file-saver";
import { reactive, watchEffect } from "vue";
import { ProjectSettingsState } from "./project-settings-state";
import * as yup from "yup";

/**
 * Component model for the project settings component.
 */
class ProjectSettingsModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "project-settings";
	}

	/**
	 * Reactive instance of the component state.
	 */
	public state: ProjectSettingsState = reactive(new ProjectSettingsState());

	/**
	 * Initialise the component model.
	 */
	public init(): void {
		this.watchForFormChanges();
		this.setNameInputValueToProjectName();
	}

	/**
	 * Returns the title for the project settings component.
	 */
	public getTitle(): string {
		return this.getText("project");
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
			name: yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("project-name")])),
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
	 * True if the current project is not read only. 
	 */
	public isUpdateButtonVisible(): boolean | undefined {
		if (EditorUtilities.currentProject.value) {
			if (EditorUtilities.currentProject.value.readOnly) {
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the form is not valid. 
	 */
	public isUpdateButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * True if the current project is not read only. 
	 */
	public isProjectNameInputVisible(): boolean | undefined {
		if (EditorUtilities.currentProject.value) {
			if (EditorUtilities.currentProject.value.readOnly) {
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return undefined;
		}
	}

	/**
	 * Called when the user clicks the update button and updates the project settings. 
	 */
	public onUpdateButtonClicked(): void {
		EditorUtilities.renameCurrentProject(this.state.data["name"]);
	}
	
	/**
	 * Sets the value of the name input to that of the current project name.
	 */
	private setNameInputValueToProjectName(): void {
		if (EditorUtilities.currentProject.value) {
			this.state.data["name"] = EditorUtilities.currentProject.value.name;
		}
	}

	/**
	 * Exports code from the current project.
	 */
	public exportCode(): void {
		const project: ProjectModel | undefined = EditorUtilities.currentProject.value;
		if (project && project.code) {
			const fileName: string = `${project.name}.${project.mode.config.fileExtension}`;
			saveAs(new Blob([project.code]), fileName);
		}
	}

	/**
	 * Exports the current project.
	 */
	public exportProject(): void {
		EditorUtilities.saveCurrentProjectLocally();
	}
}

// Export the component model
export const component: ProjectSettingsModel = new ProjectSettingsModel();