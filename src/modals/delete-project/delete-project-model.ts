import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { ContentUtilities } from "@/utilities/content-utilities";
import { DeleteProjectState } from "./delete-project-state";
import { ModalUtilities } from "@/utilities/modal-utilities";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";

/**
 * Modal model for the delete project modal.
 */
class DeleteProjectModal extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "delete-project";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: DeleteProjectState = reactive(new DeleteProjectState());

	/**
	 * True if the project is being deleted. 
	 */
	public isDeleteButtonLoading(): boolean {
		return this.state.isDeletingProject;
	}

	/**
	 * Called when the delete button is clicked and deletes the project.
	 */
	public async onDeleteClicked(project: FirestoreProjectModel): Promise<void> {
		this.state.isDeletingProject = true;

		if (project.showcaseProject) {
			await ShowcaseProvider.deleteShowcaseProjectAsync(project.showcaseProject);
		}

		await ProjectsProvider.deleteProjectAsync(project.id);

		ContentUtilities.triggerContentRefresh();

		ModalUtilities.closeModal();

		this.state.isDeletingProject = false;
	}
}

// Export the modal model.
export const modal: DeleteProjectModal = new DeleteProjectModal();