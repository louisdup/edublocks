import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";
import { ModalModelBase } from "../base-classes/modal-model-base";

/**
 * Modal model for the assignment teacher feedback modal.
 */
class AssignmentTeacherFeedback extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "assignment-teacher-feedback";
	}

	/**
	 * True if feedback exists.
	 */
	public isFeedbackVisible(assignmentSubmission: ClassroomAssignmentSubmissionModel): boolean {
		return assignmentSubmission.feedback !== undefined;
	}
}

// Export the modal model.
export const modal: AssignmentTeacherFeedback = new AssignmentTeacherFeedback();