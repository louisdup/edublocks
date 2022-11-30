import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomModel } from "@/data/models/classroom-model";
import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";
import { ClassroomUserModel } from "@/data/models/classroom-user-model";
import router from "@/router";
import { AuthenticationUtilities } from "./authentication-utilities";
import { FormatUtilities } from "./format-utilities";
import { LocalizationUtilities } from "./localization-utilities";
import { ModeUtilities } from "./mode-utilities";
import { UsersUtilities } from "./users-utilities";
import { EbSelectOption } from "@/components/eb-select/eb-select-types";
import { EditorUtilities } from "./editor-utilities";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { ProjectsUtilities } from "./projects-utilities";
import { StorageFetchResponseModel } from "@/data/models/storage-fetch-response-model";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { FirestoreProjectAssignmentModel } from "@/data/models/firestore-project-assignment-model";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { EditorButtonModel } from "@/data/models/editor-button-model";
import { ModalUtilities } from "./modal-utilities";
import { ref, Ref } from "vue";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import AssignmentSubmissions from "@/modes/common/components/sidebar/assignment-submissions/assignment-submissions.vue";
import Assignment from "@/modes/common/components/output-panel/assignment/assignment.vue";

/**
 * Utility functions for the classroom.
 */
export class ClassroomUtilities {
	/**
	 * Lookup localized text and get a localized value.
	 */
	public static getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText("classroom", key, placeholderValues);
	}

	/**
	 * True if something is busy within a utility function.
	 */
	public static isBusy: Ref<boolean> = ref(false);

	/**
	 * Returns the url used to join classrooms.
	 */
	public static joinUrl: string = "https://join.edublocks.org";

	/**
	 * Opens a classroom detail page.
	 */
	public static openClassroom(classroom: ClassroomModel): void {
		router.push(`/classroom/${classroom.id}`);
	}

	/**
	 * Opens the assignment submissions page.
	 */
	private static openAssignmentSubmissions(classroom: ClassroomModel, assignment: ClassroomAssignmentModel): void {
		router.push(`/classroom/${classroom.id}/assignment/${assignment.id}/submissions`);
	}

	/**
	 * Checks if the submission should be read only because it's already been submitted.
	 */
	public static async shouldAssignmentSubmissionShouldBeReadOnly(project: FirestoreProjectModel): Promise<boolean> {
		if (AuthenticationUtilities.currentUser.value && project.assignment) {
			if (project.uid === AuthenticationUtilities.currentUser.value.uid) {
				const classroomId: string = project.assignment.classroom;
				const assignmentId: string = project.assignment.id;
				
				const assignmentSubmissionResponse: FirestoreFetchResponseModel<ClassroomAssignmentSubmissionModel> = await ClassroomProvider.getClassroomAssignmentSubmissionAsync(classroomId, assignmentId);
				if (assignmentSubmissionResponse.wasSuccessful && assignmentSubmissionResponse.data) {
					if (assignmentSubmissionResponse.data.submitted) {
						return true;
					}
					else {
						return false;
					}
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}

	/**
	 * If the current project is related to a classroom, configure the editor accordingly.
	 */
	public static initalizeEditorForClassroomProject(): void {
		if (AuthenticationUtilities.currentUser.value && EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {
			// Current project is being viewed by a classroom admin.
			if (EditorUtilities.currentProject.value.firestoreProject.uid !== AuthenticationUtilities.currentUser.value.uid) {
				// Set the assignment submissions tab to be visible.
				EditorUtilities.currentProject.value.mode.setSidebarTabVisible("assignment-submissions");

				// Set the assignment submissions tab to be active.
				EditorUtilities.currentProject.value.mode.setSidebarTabActive("assignment-submissions");
			}
			else {
				// Set the assignment details output panel tab to be visible and active.
				EditorUtilities.currentProject.value.mode.setOutputPanelTabVisible("assignment");
				EditorUtilities.currentProject.value.mode.setOutputPanelTabActive("assignment");

				// If the current project is read only (has been submitted), hide the submit button.
				if (EditorUtilities.currentProject.value.readOnly) {
					EditorUtilities.currentProject.value.mode.setHeaderButtonHidden("assignment-submit");
				}
				else {
					EditorUtilities.currentProject.value.mode.setHeaderButtonVisible("assignment-submit");
				}
			}

			// On all classroom projects, hide the share button because it can't be shared.
			EditorUtilities.currentProject.value.mode.setHeaderButtonHidden("share");
		}
	}

	/**
	 * Returns a list of header buttons relating to the classroom.
	 */
	public static getClassroomHeaderButtons(): Array<EditorButtonModel> {
		return [
			{
				key: "assignment-submit",
				icon: ["far", "check"],
				color: "gray",
				visible: false,
				action: (): void => {
					if (AuthenticationUtilities.currentUser.value && EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.uid === AuthenticationUtilities.currentUser.value.uid && EditorUtilities.currentProject.value.firestoreProject.assignment) {
						ModalUtilities.showModal({
							modal: "SubmitAssignment",
							options: {
								classroomId: EditorUtilities.currentProject.value.firestoreProject.assignment.classroom,
								assignmentId: EditorUtilities.currentProject.value.firestoreProject.assignment.id,
								submissionId: EditorUtilities.currentProject.value.firestoreProject.assignment.submission
							}
						});
					}
				}
			}
		];
	}

	/**
	 * Returns a list of sidebar tabs relating to the classroom.
	 */
	public static getClassroomSidebarTabs(): Array<EditorSidebarTabModel> {
		return [
			{
				key: "assignment-submissions",
				icon: ["far", "users"],
				component: AssignmentSubmissions,
				visible: false
			}
		];
	}

	/**
	 * Returns a list of output panel tabs relating to the classroom.
	 */
	public static getClassroomOutputPanelTabs(): Array<EditorOutputTabModel> {
		return [
			{
				key: "assignment",
				component: Assignment,
				visible: false
			}
		];
	}

	/**
	 * Returns a list of options for project dropdowns.
	 */
	public static getAssignmentDropdownOptions(classroom: ClassroomModel, assignment: ClassroomAssignmentModel, users: Array<ClassroomUserModel>): Array<Array<EbDropdownOption>> {
		if (this.isCurrentUserAdmin(users)) {
			return [
				[
					{
						title: this.getText("view-submissions"),
						icon: ["far", "check"],
						action: (): void => {
							router.push(`/classroom/${classroom.id}/assignment/${assignment.id}/submissions`);
						}
					},
					{
						title: this.getText("edit-assignment"),
						icon: ["far", "cog"],
						action: (): void => {
							ModalUtilities.showModal({
								modal: "CreateAssignment",
								options: {
									classroom,
									assignment
								}
							});
						}
					}
				],
				[
					{
						title: this.getText("edit-starter-project"),
						icon: ["far", "pencil"],
						action: (): void => {
							router.push(`/project/${assignment.project.uid}/${assignment.project.id}`);
						}
					}
				],
				[
					{
						title: this.getText("delete-assignment"),
						icon: ["far", "trash"],
						action: (): void => {
							ModalUtilities.showModal({
								modal: "DeleteAssignment",
								options: {
									classroomId: classroom.id,
									assignmentId: assignment.id
								}
							});
						}
					}
				]
			];
		}
		else {
			return [
				[
					{
						title: this.getText("open-my-code"),
						icon: ["far", "file"],
						action: (): void => {
							if (assignment.submission) {
								router.push(`/project/${assignment.submission.uid}/${assignment.submission.project}`);
							}
							else {
								this.createAssignmentSubmission(classroom, assignment);
							}
						}
					}
				],
				[
					{
						title: this.getText("view-feedback"),
						icon: ["far", "comment-alt"],
						visible: assignment.submission !== undefined && assignment.submission.marked !== undefined && assignment.submission.marked !== null,
						action: (): void => {
							ModalUtilities.showModal({
								modal: "AssignmentTeacherFeedback",
								options: {
									assignmentSubmission: assignment.submission
								}
							});
						}
					},
					{
						title: this.getText("submit"),
						icon: ["far", "check"],
						visible: assignment.submission !== undefined && !assignment.submission.submitted,
						action: (): void => {
							ModalUtilities.showModal({
								modal: "SubmitAssignment",
								options: {
									classroomId: classroom.id,
									assignmentId: assignment.id,
									submissionId: assignment.submission?.id
								}
							});
						}
					},
					{
						title: this.getText("unsubmit"),
						icon: ["far", "rotate-left"],
						visible: assignment.submission !== undefined && assignment.submission.submitted !== undefined && assignment.submission.submitted !== null && !assignment.submission.marked,
						action: (): void => {
							ModalUtilities.showModal({
								modal: "UnsubmitAssignment",
								options: {
									classroomId: classroom.id,
									assignmentId: assignment.id,
									submissionId: assignment.submission?.id,
									isCurrentUserAdmin: false
								}
							});
						}
					}
				],
			];
		}
	}

	/**
	 * Remaps a list of classrooms for displaying in a table.
	 */
	public static remapClassroomsForTable(classrooms: Array<ClassroomModel>): Array<EbTableItem> {
		const tableItems: Array<EbTableItem> = [];
	
		classrooms.forEach((classroom: ClassroomModel) => {
			tableItems.push({
				title: classroom.name,
				icon: ["far", "users"],
				meta: [],
				action: (): void => {
					this.openClassroom(classroom);
				}
			});
		});
	
		return tableItems;
	}

	/**
	 * Remaps a list of assignments for displaying in a table.
	 */
	public static remapAssignmentsForTable(classroom: ClassroomModel, assignments: Array<ClassroomAssignmentModel>, users: Array<ClassroomUserModel>): Array<EbTableItem> {
		const tableItems: Array<EbTableItem> = [];
		const isCurrentUserAdmin: boolean | undefined = this.isCurrentUserAdmin(users);
	
		assignments.forEach((assignment: ClassroomAssignmentModel) => {
			const tableItem: EbTableItem = {
				title: assignment.name,
				thumbnail: ModeUtilities.getModeFromKey(assignment.project.mode).config.logo,
				dropdownOptions: this.getAssignmentDropdownOptions(classroom, assignment, users),
				meta: [
					{
						key: "due",
						label: this.getText("due", [FormatUtilities.formatDate(assignment.due)])
					}
				],
				action: (): void => {
					if (isCurrentUserAdmin) {
						this.openAssignmentSubmissions(classroom, assignment);
					}
					else {
						this.onAssignmentClickedByStudent(classroom, assignment);
					}
				}
			};

			if (isCurrentUserAdmin) {
				if (assignment.submissionsCount !== undefined) {
					tableItem.meta.push({
						label: this.getText("submissions-count", [assignment.submissionsCount.toString()]),
						key: "submissions"
					});
				}
			}
			else {
				if (assignment.submission) {
					if (assignment.submission.submitted) {
						const isOnTime: boolean | undefined = this.isAssignmentSubmissionOnTime(assignment, assignment.submission);
						const isLate: boolean | undefined = this.isAssignmentSubmissionLate(assignment, assignment.submission);

						if (isOnTime) {
							tableItem.meta.unshift({
								key: "on-time",
								label: this.getText("on-time"),
								color: "green"
							});	
						}
						else if (isLate) {
							tableItem.meta.unshift({
								key: "late",
								label: this.getText("late"),
								color: "red"
							});	
						}
		
						tableItem.meta.push({
							key: "submitted",
							label: this.getText("submitted", [FormatUtilities.formatDate(assignment.submission.submitted)])
						});
					}
					else {
						tableItem.meta.push({
							key: "started",
							label: this.getText("started", [FormatUtilities.formatDate(assignment.submission.created)])
						});
					}

					if (assignment.submission.marked) {
						tableItem.meta.push({
							key: "marked",
							label: this.getText("marked", [FormatUtilities.formatDate(assignment.submission.marked)])
						});
					}
				}
			}

			tableItems.push(tableItem);
		});
	
		return tableItems;
	}

	/**
	 * Remaps a list of assignment submissions for displaying in a table.
	 */
	public static remapAssignmentSubmissionsForTable(assignment: ClassroomAssignmentModel, submissions: Array<ClassroomAssignmentSubmissionModel>): Array<EbTableItem> {
		const tableItems: Array<EbTableItem> = [];
		
		submissions.forEach((submission: ClassroomAssignmentSubmissionModel) => {
			if (submission.user) {
				const isOnTime: boolean | undefined = this.isAssignmentSubmissionOnTime(assignment, submission);
				const isLate: boolean | undefined = this.isAssignmentSubmissionLate(assignment, submission);

				const tableItem: EbTableItem = {
					title: submission.user.name,
					thumbnail: UsersUtilities.getProfilePictureForEmail(submission.user.email),
					meta: [],
					action: (): void => {
						router.push(`/project/${submission.uid}/${submission.project}`);
					}
				};

				if (isOnTime) {
					tableItem.meta.unshift({
						key: "on-time",
						label: this.getText("on-time"),
						color: "green"
					});	
				}
				else if (isLate) {
					tableItem.meta.unshift({
						key: "late",
						label: this.getText("late"),
						color: "red"
					});	
				}

				if (submission.submitted) {
					tableItem.meta.push({
						key: "submitted",
						label: this.getText("submitted", [FormatUtilities.formatDate(submission.submitted)])
					});
				}
				else {
					tableItem.meta.push({
						key: "started",
						label: this.getText("started", [FormatUtilities.formatDate(submission.created)])
					});
				}

				if (submission.marked) {
					tableItem.meta.push({
						key: "late",
						label: this.getText("marked", [FormatUtilities.formatDate(submission.marked)])
					});
				}

				tableItems.push(tableItem);
			}
		});
		
		return tableItems;
	}

	/**
	 * Remaps a list of assignment submissions for displaying in a select input.
	 */
	public static remapAssignmentSubmissionsForSelect(submissions: Array<ClassroomAssignmentSubmissionModel>): Array<EbSelectOption> {
		const selectOptions: Array<EbSelectOption> = [];
			
		submissions.forEach((submission: ClassroomAssignmentSubmissionModel) => {
			if (submission.user) {
				let label: string = "";

				if (submission.marked) {
					label = this.getText("submission-marked", [submission.user.name]);
				}
				else if (submission.submitted) {
					label = this.getText("submission-submitted", [submission.user.name]);
				}
				else if (submission.created) {
					label = this.getText("submission-started", [submission.user.name]);
				}					
			
				selectOptions.push({
					label,
					value: submission.id
				});
			}
		});
			
		return selectOptions;
	}

	/**
	 * Returns a list of options for classroom user dropdowns.
	 */
	public static getDropdownOptionsForClassroomUsers(classroom: ClassroomModel, classroomUser: ClassroomUserModel): Array<Array<EbDropdownOption>> | undefined {
		if (classroomUser.role === "student") {
			return [
				[
					{
						title: this.getText("remove-user"),
						icon: ["far", "ban"],
						action: (): void => {
							ModalUtilities.showModal({
								modal: "RemoveClassroomUser",
								options: {
									classroomId: classroom.id,
									userId: classroomUser.id
								}
							});
						}
					}
				]
			];
		}
		else {
			return undefined;
		}
	}

	/**
	 * Remaps a list of users for displaying in a table.
	 */
	public static remapClassroomUsersForTable(classroom: ClassroomModel, users: Array<ClassroomUserModel>): Array<EbTableItem> {
		const tableItems: Array<EbTableItem> = [];
		
		users.forEach((classroomUser: ClassroomUserModel) => {
			if (classroomUser.user) {	
				const tableItem: EbTableItem = {
					title: classroomUser.user.name,
					thumbnail: UsersUtilities.getProfilePictureForEmail(classroomUser.user.email),
					isThumbnailFullWidth: true,
					dropdownOptions: this.getDropdownOptionsForClassroomUsers(classroom, classroomUser),
					meta: [
						{
							key: "joined",
							label: this.getText("joined", [FormatUtilities.formatDate(classroomUser.created)])
						}
					],
					action: (): void => {
						//
					}
				};

				if (classroomUser.role === "admin") {
					tableItem.meta.unshift({
						key: "admin",
						label: this.getText("admin")
					});
				}
				else {
					tableItem.meta.unshift({
						key: "student",
						label: this.getText("student")
					});
				}

				tableItems.push(tableItem);
			}
		});
		
		return tableItems;
	}

	/**
	 * True if submitted date is before the due date.
	 */
	public static isAssignmentSubmissionOnTime(assignment: ClassroomAssignmentModel, submission: ClassroomAssignmentSubmissionModel): boolean | undefined {
		if (submission.submitted) {
			const due: Date = new Date(assignment.due);
			const submitted: Date = new Date(submission.submitted );

			return submitted < due;
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if submitted date is after the due date.
	 */
	public static isAssignmentSubmissionLate(assignment: ClassroomAssignmentModel, submission: ClassroomAssignmentSubmissionModel): boolean | undefined {
		if (submission.submitted) {
			const due: Date = new Date(assignment.due);
			const submitted: Date = new Date(submission.submitted );

			return submitted > due;
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the current user has an admin role.
	 */
	public static isCurrentUserAdmin(users: Array<ClassroomUserModel>): boolean | undefined {
		const currentUser: ClassroomUserModel | undefined = users.filter((user: ClassroomUserModel) => {
			if (AuthenticationUtilities.currentUser.value) {
				return user.id === AuthenticationUtilities.currentUser.value.uid;
			}
			else {
				return undefined;
			}
		})[0];

		if (currentUser) {
			return currentUser.role === "admin";
		}
		else {
			return undefined;
		}

	}

	/**
	 * Called when a student clicks an assignment.
	 * Determines whether the student already has an assignment submission, if so, the project is loaded.
	 * If they don't have a submission, one is created.
	 */
	public static onAssignmentClickedByStudent(classroom: ClassroomModel, assignment: ClassroomAssignmentModel): void {
		if (AuthenticationUtilities.currentUser.value) {
			if (assignment.submission) {
				if (assignment.submission.marked) {
					ModalUtilities.showModal({
						modal: "AssignmentTeacherFeedback",
						options: {
							assignmentSubmission: assignment.submission
						}
					});
				}
				else {
					router.push(`/project/${assignment.submission.uid}/${assignment.submission.project}`);
				}
			}
			else {
				this.createAssignmentSubmission(classroom, assignment);
			}
		}
	}

	/**
	 * Creates a new submission for the current user against an assignment.
	 */
	public static async createAssignmentSubmission(classroom: ClassroomModel, assignment: ClassroomAssignmentModel): Promise<void> {
		if (AuthenticationUtilities.currentUser.value) {
			this.isBusy.value = true;

			// Get the starter project linked to the assignment.
			const assignmentStarterProject: FirestoreFetchResponseModel<FirestoreProjectModel> = await ProjectsProvider.getProjectAsync(assignment.project.uid, assignment.project.id);

			if (assignmentStarterProject.wasSuccessful && assignmentStarterProject.data) {
				// Fetch the code of the assignment's starter project.
				const assignmentProjectCodeResponse: StorageFetchResponseModel = await ProjectsProvider.getProjectCodeAsync(assignmentStarterProject.data.path);

				if (assignmentProjectCodeResponse.wasSuccessful && assignmentProjectCodeResponse.data) {
					// Create a new project for the student's work.
					const projectId: string | undefined = await ProjectsUtilities.createFirestoreProject(
						assignment.name,
						assignmentStarterProject.data.mode,
						"blocks",
						assignmentProjectCodeResponse.data.content
					);

					if (AuthenticationUtilities.currentUser.value && projectId) {
						// Create an assignment submission for the student.
						const assignmentSubmissionBody: object = {
							uid: AuthenticationUtilities.currentUser.value.uid,
							project: projectId,
							created: new Date().toISOString()
						};

						const assignmentSubmissionResponse: FirestoreFetchResponseModel<string> = await ClassroomProvider.createAssignmentSubmissionAsync(classroom.id, assignment.id, assignmentSubmissionBody);

						if (assignmentSubmissionResponse.wasSuccessful && assignmentSubmissionResponse.data) {
							// Update the student's project with details of their assignment submission.
							const projectAssignment: FirestoreProjectAssignmentModel = {
								id: assignment.id,
								classroom: classroom.id,
								submission: assignmentSubmissionResponse.data
							};

							const projectBody: object = {
								assignment: projectAssignment
							};

							const projectResponse: FirestoreFetchResponseModel<void> = await ProjectsProvider.updateProjectAsync(projectId, projectBody);

							if (projectResponse.wasSuccessful) {
								// Redirect the student to their project to start work on the assignment.
								router.push(`/project/${AuthenticationUtilities.currentUser.value.uid}/${projectId}`);
							}
						}
					}
				}
			}

			this.isBusy.value = false;
		}
	}
}