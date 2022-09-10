/**
 * List of modal names.
 */
export enum ModalName {
	DeleteProject = "DeleteProject",
	RenameProject = "RenameProject",
	DeleteShowcaseProject = "DeleteShowcaseProject",
	Error = "Error",
	Login = "Login"
}

/**
 * List of available modals.
 */
export type Modal = 
 | "DeleteProject"
 | "RenameProject"
 | "DeleteShowcaseProject"
 | "Error"
 | "Login"