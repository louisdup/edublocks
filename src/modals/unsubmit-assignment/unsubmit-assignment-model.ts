import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { UnsubmitAssignmentState } from "./unsubmit-assignment-state";
import { Data } from "@/components/types";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { ContentUtilities } from "@/utilities/content-utilities";

/**
 * Modal model for the unsubmit assignment modal.
 */
class UnsubmitAssignmentModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "unsubmit-assignment";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: UnsubmitAssignmentState = reactive(new UnsubmitAssignmentState());

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
		this.state.submissionId = props.submissionId as string;
		this.state.isCurrentUserAdmin = props.isCurrentUserAdmin as boolean;
	}

	/**
	 * Returns the title for the modal based on whether the user is an admin.
	 */
	public getModalTitle(): string {
		if (this.state.isCurrentUserAdmin) {
			return this.getText("unsubmit-hand-back");
		}
		else {
			return this.getText("unsubmit-assignment");
		}
	}

	/**
	 * Returns content for the modal based on whether the user is an admin.
	 */
	public getModalContent(): string {
		if (this.state.isCurrentUserAdmin) {
			return this.getText("student-can-make-changes");
		}
		else {
			return this.getText("you-can-make-changes");
		}
	}

	/**
	 * True if the student's work is being unsubmitted.
	 */
	public isUnsubmitButtonLoading(): boolean {
		return this.state.isUnsubmittingAssignment;
	}

	/**
	 * Called when the user clicks the unsubmit button.
	 * Unsubmits the assignment.
	 */
	public async onUnsubmitButtonClicked(): Promise<void> {
		if (this.state.classroomId && this.state.assignmentId && this.state.submissionId) {
			this.state.isUnsubmittingAssignment = true;
	
			const body: object = {
				submitted: null,
				marked: null,
				feedback: null
			};

			const response: FirestoreFetchResponseModel<void> = await ClassroomProvider.updateAssignmentSubmissionAsync(this.state.classroomId, this.state.assignmentId, this.state.submissionId, body);
	
			if (response.wasSuccessful) {
				ModalUtilities.closeModal();
				ContentUtilities.triggerContentRefresh();
			}

			this.state.isUnsubmittingAssignment = false;
		}
	}
}

// Export the modal model.
export const modal: UnsubmitAssignmentModel = new UnsubmitAssignmentModel();