/**
 * List of modal names.
 */
export enum ModalName {
	CreateProject = "CreateProject",
	DeleteProject = "DeleteProject",
	RenameProject = "RenameProject",
	ShareProject = "ShareProject",
	PublishToShowcase = "PublishToShowcase",
	UnpublishShowcaseProject = "UnpublishShowcaseProject",
	Error = "Error",
	SignIn = "SignIn",
	ConnectMicrobit = "ConnectMicrobit",
	Progress = "Progress",
	CreateAssignment = "CreateAssignment",
	SubmitAssignment = "SubmitAssignment",
	UnsubmitAssignment = "UnsubmitAssignment",
	DeleteAssignment = "DeleteAssignment",
	AssignmentTeacherFeedback = "AssignmentTeacherFeedback",
	DeleteClassroom = "DeleteClassroom",
	AddClassroomUsers = "AddClassroomUsers",
	RemoveClassroomUser = "RemoveClassroomUser",
	JoinClassroom = "JoinClassroom",
	CreateClassroom = "CreateClassroom",
	ConnectRaspberryPi = "ConnectRaspberryPi"
}

/**
 * List of available modals.
 */
export type Modal = 
 | "CreateProject"
 | "DeleteProject"
 | "RenameProject"
 | "ShareProject"
 | "PublishToShowcase"
 | "UnpublishShowcaseProject"
 | "Error"
 | "SignIn"
 | "ConnectMicrobit"
 | "Progress"
 | "CreateAssignment"
 | "SubmitAssignment"
 | "UnsubmitAssignment"
 | "DeleteAssignment"
 | "AssignmentTeacherFeedback"
 | "DeleteClassroom"
 | "AddClassroomUsers"
 | "RemoveClassroomUser"
 | "JoinClassroom"
 | "CreateClassroom"
 | "ConnectRaspberryPi"
