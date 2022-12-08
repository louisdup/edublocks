import { ModalModelBase } from "../base-classes/modal-model-base";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { ContentUtilities } from "@/utilities/content-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { DeleteShowcaseProjectState } from "./delete-showcase-project-state";
import { reactive } from "vue";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";

/**
 * Modal model for the delete showcase project modal.
 */
class DeleteShowcaseProjectModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "delete-showcase-project";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: DeleteShowcaseProjectState = reactive(new DeleteShowcaseProjectState());

	/**
	 * True if the project is being deleted. 
	 */
	public isDeleteButtonLoading(): boolean {
		return this.state.isDeletingProject;
	}

	/**
	 * Called when the delete button is clicked and deletes the project from the showcase.
	 */
	public async onDeleteClicked(project: ShowcaseProjectModel): Promise<void> {
		this.state.isDeletingProject = true;

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

		this.state.isDeletingProject = false;
	}
}

// Export the modal model.
export const modal: DeleteShowcaseProjectModel = new DeleteShowcaseProjectModel();