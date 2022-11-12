import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { SubmitAssignmentState } from "./submit-assignment-state";
import { Data } from "@/components/types";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { ModalUtilities } from "@/utilities/modal-utilities";
import router from "@/router";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { ContentUtilities } from "@/utilities/content-utilities";

/**
 * Modal model for the submit assignment modal.
 */
class SubmitAssignmentModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "submit-assignment";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: SubmitAssignmentState = reactive(new SubmitAssignmentState());

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
	}

	/**
	 * True if the student's work is being submitted.
	 */
	public isSubmitButtonLoading(): boolean {
		return this.state.isSubmittingAssignment;
	}

	/**
	 * Called when the user clicks the submit button.
	 * Submits the assignment.
	 */
	public async onSubmitButtonClicked(): Promise<void> {
		if (this.state.classroomId && this.state.assignmentId && this.state.submissionId) {
			this.state.isSubmittingAssignment = true;

			// Save the current project before submitting.
			await EditorUtilities.saveCurrentProject();

			const body: object = {
				submitted: new Date().toISOString()
			};

			// Submit the student's work.
			const response: FirestoreFetchResponseModel<void> = await ClassroomProvider.updateAssignmentSubmissionAsync(this.state.classroomId, this.state.assignmentId, this.state.submissionId, body);
			if (response.wasSuccessful) {
				// Go back to the main classroom page.
				ModalUtilities.closeModal();
				ContentUtilities.triggerContentRefresh();
				router.push(`/classroom/${this.state.classroomId}`);
			}

			this.state.isSubmittingAssignment = false;
		}
	}
}

// Export the modal model.
export const modal: SubmitAssignmentModel = new SubmitAssignmentModel();