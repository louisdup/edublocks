import { ModalModelBase } from "../base-classes/modal-model-base";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { ContentUtilities } from "@/utilities/content-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { UnpublishShowcaseProjectState } from "./unpublish-showcase-project-state";
import { reactive } from "vue";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";

/**
 * Modal model for the unpublish showcase project modal.
 */
class UnpublishShowcaseProjectModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "unpublish-showcase-project";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: UnpublishShowcaseProjectState = reactive(new UnpublishShowcaseProjectState());

	/**
	 * True if the project is being unpublished. 
	 */
	public isUnpublishButtonLoading(): boolean {
		return this.state.isUnpublishingProject;
	}

	/**
	 * Called when the unpublish button is clicked and deletes the project record from the showcase.
	 */
	public async onUnpublishClicked(project: ShowcaseProjectModel): Promise<void> {
		this.state.isUnpublishingProject = true;

		const deleteShowcaseProjectResponse: FirestoreFetchResponseModel<void> = await ShowcaseProvider.deleteShowcaseProjectAsync(project.id);

		if (deleteShowcaseProjectResponse.wasSuccessful) {
			const projectBody: object = {
				showcaseProject: null,
				updated: new Date().toISOString()
			};

			const projectResponse: FirestoreFetchResponseModel<void> = await ProjectsProvider.updateProjectAsync(project.project, projectBody);

			if (projectResponse.wasSuccessful) {
				ModalUtilities.closeModal();
				ContentUtilities.triggerContentRefresh();
			}
		}

		this.state.isUnpublishingProject = false;
	}
}

// Export the modal model.
export const modal: UnpublishShowcaseProjectModel = new UnpublishShowcaseProjectModel();