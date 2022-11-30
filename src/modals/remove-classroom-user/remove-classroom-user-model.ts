import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { RemoveClassroomUserState } from "./remove-classroom-user-state";
import { Data } from "@/components/types";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import * as UsersProvider from "@/data/providers/users-provider";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { ContentUtilities } from "@/utilities/content-utilities";

/**
 * Modal model for the remove classroom user modal.
 */
class RemoveClassroomUserModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "remove-classroom-user";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: RemoveClassroomUserState = reactive(new RemoveClassroomUserState());

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
		this.state.userId = props.userId as string;
	}

	/**
	 * True if the classroom user is being removed.
	 */
	public isRemoveButtonLoading(): boolean {
		return this.state.isRemovingClassroomUser;
	}

	/**
	 * Called when the user clicks the remove button.
	 * Removes the classroom user.
	 */
	public async onRemoveButtonClicked(): Promise<void> {
		if (this.state.classroomId && this.state.userId) {
			this.state.isRemovingClassroomUser = true;

			const classroomUserReponse: FirestoreFetchResponseModel<void> = await ClassroomProvider.deleteClassroomUserAsync(this.state.classroomId, this.state.userId);

			if (classroomUserReponse.wasSuccessful) {
				const userClassroomResponse: FirestoreFetchResponseModel<void> = await UsersProvider.deleteUserClassroomAsync(this.state.userId, this.state.classroomId);

				if (userClassroomResponse.wasSuccessful) {
					ModalUtilities.closeModal();
					ContentUtilities.triggerContentRefresh();
				}
			}

			this.state.isRemovingClassroomUser = false;
		}
	}
}

// Export the modal model.
export const modal: RemoveClassroomUserModel = new RemoveClassroomUserModel();