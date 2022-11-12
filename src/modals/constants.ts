/**
 * List of modal names.
 */
export enum ModalName {
	CreateProject = "CreateProject",
	DeleteProject = "DeleteProject",
	RenameProject = "RenameProject",
	ShareProject = "ShareProject",
	DeleteShowcaseProject = "DeleteShowcaseProject",
	Error = "Error",
	Login = "Login",
	ConnectMicrobit = "ConnectMicrobit",
	Progress = "Progress",
	CreateAssignment = "CreateAssignment",
	SubmitAssignment = "SubmitAssignment",
	UnsubmitAssignment = "UnsubmitAssignment",
	DeleteAssignment = "DeleteAssignment",
	AssignmentTeacherFeedback = "AssignmentTeacherFeedback"
}

/**
 * List of available modals.
 */
export type Modal = 
 | "CreateProject"
 | "DeleteProject"
 | "RenameProject"
 | "ShareProject"
 | "DeleteShowcaseProject"
 | "Error"
 | "Login"
 | "ConnectMicrobit"
 | "Progress"
 | "CreateAssignment"
 | "SubmitAssignment"
 | "UnsubmitAssignment"
 | "DeleteAssignment"
 | "AssignmentTeacherFeedback"
