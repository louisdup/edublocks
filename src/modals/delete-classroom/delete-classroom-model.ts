import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { DeleteClassroomState } from "./delete-classroom-state";
import { Data } from "@/components/types";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { ModalUtilities } from "@/utilities/modal-utilities";
import router from "@/router";

/**
 * Modal model for the delete classroom modal.
 */
class DeleteClassroomModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "delete-classroom";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: DeleteClassroomState = reactive(new DeleteClassroomState());

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
	}

	/**
	 * True if the classroom is being deleted.
	 */
	public isDeleteButtonLoading(): boolean {
		return this.state.isDeletingClassroom;
	}

	/**
	 * Called when the user clicks the delete button.
	 * Deletes the classroom.
	 */
	public async onDeleteButtonClicked(): Promise<void> {
		if (this.state.classroomId) {
			this.state.isDeletingClassroom = true;

			const response: FirestoreFetchResponseModel<void> = await ClassroomProvider.deleteClassroomAsync(this.state.classroomId);

			if (response.wasSuccessful) {
				ModalUtilities.closeModal();
				router.push("/classroom");
			}

			this.state.isDeletingClassroom = false;
		}
	}
}

// Export the modal model.
export const modal: DeleteClassroomModel = new DeleteClassroomModel();