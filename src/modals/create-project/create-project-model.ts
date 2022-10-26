import { EbRadioGroupOption } from "@/components/eb-radio-group/eb-radio-group-types";
import { EbSelectOption } from "@/components/eb-select/eb-select-types";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import router from "@/router";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { FilenameUtilities } from "@/utilities/filename-utilities";
import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { ModeUtilities } from "@/utilities/mode-utilities";
import { reactive, watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { CreateProjectState } from "./create-project-state";
import * as yup from "yup";

/**
 * Modal model for the create project modal.
 */
class CreateProjectModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "create-project";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: CreateProjectState = reactive(new CreateProjectState());

	/**
	 * Initialise the modal model.
	 */
	public init(): void {
		this.watchForFormChanges();
		this.setInitialValues();
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
	 * Sets initial form values.
	 */
	public setInitialValues(): void {
		this.state.placeholderName = FilenameUtilities.generateRandomFilename();
		this.state.data["type"] = "blocks";
		this.state.data["mode"] = this.getModeOptions()[0].value;
	}

	/**
	 * Returns validation schema for the create project form.
	 */
	public getValidationSchema(): ValidationSchema {
		return {
			name: yup
				.string(),
			mode: yup
				.string(),
			type: yup
				.string()
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
	 * Returns a list of project types to populate the type radio group input.
	 */
	public getTypeOptions(): Array<EbRadioGroupOption> {
		return [
			{
				key: "blocks",
				title: this.getText("blocks"),
				subtitle: this.getText("great-for-beginners"),
			},
			{
				key: "text",
				title: this.getText("text-only"),
				subtitle: this.getText("ideal-for-advanced-users"),
			},
		];
	}

	/**
	 * Returns a list of modes to populate the mode select box.
	 */
	public getModeOptions(): Array<EbSelectOption> {
		const modeOptions: Array<EbSelectOption> = [];

		ModeUtilities.getModes().forEach((mode: ModeModelBase) => {
			modeOptions.push({
				label: mode.config.name,
				value: mode.config.key
			});
		});

		return modeOptions;
	}

	/**
	 * Called when the user clicks the create button.
	 * Sets the current project to what the user has defined and then redirects to the editor.
	 */
	public onCreateClicked(): void {
		if (this.state.isValid) {
			const mode: ModeModelBase = ModeUtilities.getModeFromKey(this.state.data["mode"]);
			let name: string = this.state.placeholderName;

			if (this.state.data["name"]) {
				name = this.state.data["name"];
			}

			EditorUtilities.setCurrentProject({
				name,
				mode,
				type: this.state.data["type"],
				code: "",
				blocks: ""
			});

			router.push("/editor");
		}
	}

	/**
	 * True if the create project form is not valid. 
	 */
	public isCreateButtonDisabled(): boolean {
		return !this.state.isValid;
	}
}

// Export the modal model.
export const modal: CreateProjectModel = new CreateProjectModel();