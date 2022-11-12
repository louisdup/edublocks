import { reactive, watchEffect } from "vue";
import { ComponentModelBase } from "../base-classes/component-model-base";
import { Data } from "../types";
import { EbTextEditorState } from "./eb-text-editor-state";

/**
 * Component model for the text editor component.
 */
class EbTextEditorModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "text-editor";
	}

	/**
	 * Reactive instance of the component state.
	 */
	public state: EbTextEditorState = reactive(new EbTextEditorState());

	/**
	 * Initialize the component model.
	 */
	public init(props: Data, emit: Function): void {
		this.setTextEditorValueToModelValue(props);
		this.watchForTextEditorValueChanges(props, emit);
	}

	/**
	 * Sets the text editor value to that of the text editor.
	 */
	private setTextEditorValueToModelValue(props: Data): void {
		if (props.modelValue) {
			this.state.value = props.modelValue as string;
		}	
		else {
			this.state.value = "";
		}
	}

	/**
	 * Watches for changes to the text editor value and updates the modelValue.
	 */
	private watchForTextEditorValueChanges(props: Data, emit: Function): void {
		watchEffect(() => {
			emit("update:modelValue", this.state.value);
		});
	}

	/**
	 * Returns the TinyMCE API key.
	 */
	public getAPIKey(): string {
		return import.meta.env.VITE_TINY_MCE_KEY;
	}

	/**
	 * Returns setup options for the TinyMCE editor.
	 */
	public getTextEditorOptions(height?: number): object {
		return {
			height,
			menubar: false,
			branding: false,
			plugins: "lists link image media table",
			toolbar: "undo redo | styles | image media link | table numlist bullist"
		};
	}

	/**
	 * Returns the value of the text editor.
	 */
	public getTextEditorValue(): string {
		return this.state.value;
	}
}

// Export the component model
export const component: EbTextEditorModel = new EbTextEditorModel();