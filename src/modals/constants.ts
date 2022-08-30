/**
 * List of modal names.
 */
export enum ModalName {
	DeleteProject = "DeleteProject",
	DeleteShowcaseProject = "DeleteShowcaseProject",
	Error = "Error",
	Login = "Login"
}

/**
 * List of available modals.
 */
export type Modal = 
 | "DeleteProject"
 | "DeleteShowcaseProject"
 | "Error"
 | "Login"