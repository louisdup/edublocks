import { QueryDocumentSnapshot } from "firebase/firestore";
import { ClassroomAssignmentProjectModel } from "./classroom-assignment-project-model";
import { ClassroomAssignmentSubmissionModel } from "./classroom-assignment-submission-model";

/**
 * Data model for a classroom assignment.
 */
export interface ClassroomAssignmentModel {
	id: string;
	name: string;
	description: string;
	due: string;
	project: ClassroomAssignmentProjectModel;
	snapshot: QueryDocumentSnapshot;
	submissionsCount?: number;
	submission?: ClassroomAssignmentSubmissionModel;
}