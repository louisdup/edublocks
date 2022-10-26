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
	 * True if the form is not valid. 
	 */
	public isUpdateButtonDisabled(): boolean {
		return !this.state.isValid;
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
	 * Takes a screenshot of the blockly workspace and exports a PNG image.
	 */
	public exportBlocksScreenshot(): void {
		if (EditorUtilities.blocklyInstance) {
			const svgBlockCanvas: SVGGraphicsElement = EditorUtilities.blocklyInstance.svgBlockCanvas_.cloneNode(true) as SVGGraphicsElement;
			svgBlockCanvas.removeAttribute("transform");
			
			const blocklyCssContent: string = `${Blockly.Css.CONTENT.join("")} .blocklyConnectionIndicator{display:none;} .blocklyEditableText text.blocklyText{fill: #575E75;}`;
			const svgCss: string = `<defs><style type="text/css" xmlns="http://www.w3.org/1999/xhtml"><![CDATA[${blocklyCssContent}]]></style></defs>`;

			const blocklyBlockCanvas: SVGGraphicsElement = document.getElementsByClassName("blocklyBlockCanvas")[0] as SVGGraphicsElement;
			const bbox: DOMRect = blocklyBlockCanvas.getBBox();
			const canvasContent: string = new XMLSerializer().serializeToString(svgBlockCanvas);

			let svg: string = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${bbox.width}" height="${bbox.height}" viewBox="${bbox.x-5} ${bbox.y-5} ${bbox.width+5} ${bbox.height+6}">${svgCss}>${canvasContent}</svg>`;

			const image: HTMLImageElement = new Image();

			image.src = URL.createObjectURL(new Blob([svg], {
				type: "image/svg+xml;base64"
			}));

			image.onload = function() {
				const canvas: HTMLCanvasElement = document.createElement("canvas");
				canvas.style.padding = "20px";
				canvas.width = bbox.width * 5 + 20;
				canvas.height = bbox.height * 5 + 20;
				canvas.getContext("2d")?.scale(5,5);
				canvas.getContext("2d")?.drawImage(image, 0, 0);
	
				if (EditorUtilities.currentProject.value){
					const fileName: string = `${EditorUtilities.currentProject.value.name}.png`;
					saveAs(canvas.toDataURL("image/png"), fileName);
				}
			}
		}
	}
}

// Export the component model
export const component: ProjectSettingsModel = new ProjectSettingsModel();