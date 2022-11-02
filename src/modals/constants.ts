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
	Progress = "Progress"
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