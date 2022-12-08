import { FormUtilities, ValidationSchema } from "@/utilities/form-utilities";
import { ModeUtilities } from "@/utilities/mode-utilities";
import { reactive, watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { PublishToShowcaseState } from "./publish-to-showcase-state";
import * as yup from "yup";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { Data } from "@/components/types";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { ShowcaseUtilities } from "@/utilities/showcase-utilities";

/**
 * Modal model for the publish to showcase modal.
 */
class PublishToShowcaseModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "publish-to-showcase";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: PublishToShowcaseState = reactive(new PublishToShowcaseState());

	/**
	 * Initialise the modal model.
	 */
	public init(props: Data): void {
		this.watchForFormChanges();
		this.setInitialValues(props);
	}

	/**
	 * Returns the title for the publish to showcase modal.
	 */
	public getTitle(): string {
		return this.getText("publish-to-showcase");
	}

	/**
	 * Watches for changes on the form and checks if it's valid 
	 */
	private watchForFormChanges(): void {
		watchEffect(async () => {
			this.state.isValid = await FormUtilities.isFormValid(this.getValidationSchema(), this.state.data);
		});
	}

	/**
	 * Sets initial form values.
	 */
	private setInitialValues(props: Data): void {
		this.state.project = props.project as FirestoreProjectModel;
		this.state.data["name"] = this.state.project.name;
	}

	/**
	 * Returns validation schema for the publish to showcase form.
	 */
	private getValidationSchema(): ValidationSchema {
		return {
			name: yup
				.string()
				.required(FormUtilities.getValidationMessage("required", [this.getText("name")])),
			description: yup
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
	 * Returns the mode color based on the project.
	 */
	public getShowcaseProjectPreviewThumbnailColor(): string | undefined {
		if (this.state.project) {
			return ModeUtilities.getModeFromKey(this.state.project.mode).config.color;
		}
		else {
			return undefined;
		}
	}
	
	/**
	 * Returns the mode logo based on the project.
	 */
	public getShowcaseProjectPreviewThumbnailIcon(): string | undefined {
		if (this.state.project) {
			return ModeUtilities.getModeFromKey(this.state.project.mode).config.logo;
		}
		else {
			return undefined;
		}
	}
	
	/**
	 * Returns the mode name based on the showcase project.
	 */
	public getShowcaseProjectPreviewModeName(): string | undefined {
		if (this.state.project) {
			return ModeUtilities.getModeFromKey(this.state.project.mode).config.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the publish to showcase form is not valid. 
	 */
	public isPublishButtonDisabled(): boolean {
		return !this.state.isValid;
	}

	/**
	 * True if the project is being published. 
	 */
	public isPublishButtonLoading(): boolean {
		return this.state.isPublishingProject;
	}

	/**
	 * Called when the user clicks the publish button.
	 * Publishes the project to the showcase and updates the project to a reference to the showcase post.
	 * Once complete, the user is redirected to the showcase project detail page.
	 */
	public async onPublishButtonClicked(): Promise<void> {
		if (AuthenticationUtilities.currentUser.value && this.state.project && this.state.isValid) {
			this.state.isPublishingProject = true;

			const showcaseProjectBody: object = {
				title: this.state.data["name"],
				description: this.state.data["description"],
				uid: AuthenticationUtilities.currentUser.value.uid,
				project: this.state.project.id,
				mode: this.state.project.mode,
				created: new Date().toISOString()
			};

			const showcaseProjectResponse: FirestoreFetchResponseModel<string> = await ShowcaseProvider.createShowcaseProjectAsync(showcaseProjectBody);

			if (showcaseProjectResponse.wasSuccessful && showcaseProjectResponse.data) {
				const projectBody: object = {
					showcaseProject: showcaseProjectResponse.data,
					updated: new Date().toISOString()
				};

				const projectResponse: FirestoreFetchResponseModel<void> = await ProjectsProvider.updateProjectAsync(this.state.project.id, projectBody);

				if (projectResponse.wasSuccessful) {
					ModalUtilities.closeModal();
					ShowcaseUtilities.openShowcaseProject(showcaseProjectResponse.data);
				}
			}

			this.state.isPublishingProject = false;
		}
	}
}

// Export the modal model.
export const modal: PublishToShowcaseModel = new PublishToShowcaseModel();