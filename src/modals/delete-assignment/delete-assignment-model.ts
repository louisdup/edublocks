import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { DeleteAssignmentState } from "./delete-assignment-state";
import { Data } from "@/components/types";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { ContentUtilities } from "@/utilities/content-utilities";

/**
 * Modal model for the delete assignment modal.
 */
class DeleteAssignmentModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "delete-assignment";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: DeleteAssignmentState = reactive(new DeleteAssignmentState());

	/**
	 * Initialise the modal model.
	 */
	public init(props: Data): void {
		this.setStateValues(props);
	}

	/**
	 * Sets state values.
	 */
	private setStateValues(props: Data): void {
		this.state.classroomId = props.classroomId as string;
		this.state.assignmentId = props.assignmentId as string;
	}

	/**
	 * True if the assignment is being deleted.
	 */
	public isDeleteButtonLoading(): boolean {
		return this.state.isDeletingAssignment;
	}

	/**
	 * Called when the user clicks the delete button.
	 * Deletes the assignment.
	 */
	public async onDeleteButtonClicked(): Promise<void> {
		if (this.state.classroomId && this.state.assignmentId) {
			this.state.isDeletingAssignment = true;

			const response: FirestoreFetchResponseModel<void> = await ClassroomProvider.deleteAssignmentAsync(this.state.classroomId, this.state.assignmentId);

			if (response.wasSuccessful) {
				ModalUtilities.closeModal();
				ContentUtilities.triggerContentRefresh();
			}

			this.state.isDeletingAssignment = false;
		}
	}
}

// Export the modal model.
export const modal: DeleteAssignmentModel = new DeleteAssignmentModel();