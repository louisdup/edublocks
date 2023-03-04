import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { ClassroomDetailState } from "./classroom-detail-state";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import * as UsersProvider from "@/data/providers/users-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { ClassroomModel } from "@/data/models/classroom-model";
import router from "@/router";
import { ClassroomUserModel } from "@/data/models/classroom-user-model";
import { EbTabsOption } from "@/components/eb-tabs/eb-tabs-types";
import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";
import { OtherUserModel } from "@/data/models/other-user-model";
import { CloudFunctionsResponseModel } from "@/data/models/cloud-functions-fetch-response-model";

/**
 * View model for the classroom list view.
 */
class ClassroomDetailModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "classroom-detail";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: ClassroomDetailState = reactive(new ClassroomDetailState());

	/**
	 * Returns the text to display in the page title of the view.
	 */
	public getPageTitle(): string | undefined {
		if (this.state.classroom) {
			return this.state.classroom.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Initialise the view model.
	 */
	public async init(): Promise<void> {
		// Load the initial data.
		await this.loadInitialData();

		// Reload the initial set of data if a content refresh is triggered.
		this.observeContentRefresh(() => {
			this.loadInitialData();
		});

		// Set the initally active tab.
		this.setInitialActiveTab();
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private async loadInitialData(): Promise<void> {
		await this.loadClassroom();
		await this.loadClassroomUsers();
		await this.loadClassroomAssignments();
	}

	/**
	 * Loads the requested classroom.
	 */
	private async loadClassroom(): Promise<void> {
		const classroomId: string = router.currentRoute.value.params.id as string;

		if (this.isCurrentUserLoggedIn() && classroomId) {
			this.state.isLoadingClassroom = true;
	
			await ClassroomProvider.getClassroomAsync(classroomId).then((response: FirestoreFetchResponseModel<ClassroomModel>) => {
				if (response.wasSuccessful && response.data) {
					this.state.classroom = response.data;
				}
				else {
					ModalUtilities.closeModal();
					router.push("/404");
				}
				this.state.isLoadingClassroom = false;
			});
		}
		else {
			this.state.classroom = undefined;
		}
	}

	/**
	 * Loads information about a user.
	 */
	private async loadUserInfo(id: string): Promise<OtherUserModel | undefined> {
		const response: CloudFunctionsResponseModel<OtherUserModel> = await UsersProvider.getUserAsync(id);
		
		if (response.wasSuccessful && response.data) {
			return response.data;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Loads users belonging to the classroom.
	 */
	private async loadClassroomUsers(): Promise<void> {
		if (this.isCurrentUserLoggedIn() && this.state.classroom) {
			this.state.isLoadingClassroomUsers = true;
	
			await ClassroomProvider.getClassroomUsersAsync(this.state.classroom.id).then(async (response: FirestoreFetchResponseModel<Array<ClassroomUserModel>>) => {
				if (response.wasSuccessful && response.data) {
					this.state.classroomUsers = response.data;

					// Checks if the current user is an admin.
					this.checkIfCurrentUserIsAdmin();
					
					// Load data about each classroom user.
					if (this.state.isCurrentUserAdmin) {
						for await (const classroomUser of this.state.classroomUsers) {
							classroomUser.user = await this.loadUserInfo(classroomUser.id);
						}
					}
				}
				this.state.isLoadingClassroomUsers = false;
			});
		}
		else {
			this.state.classroomUsers = [];
		}
	}

	/**
	 * Loads assignments belonging to the classroom.
	 */
	private async loadClassroomAssignments(): Promise<void> {
		if (this.isCurrentUserLoggedIn() && this.state.classroom) {
			this.state.isLoadingClassroomAssignments = true;
	
			await ClassroomProvider.getClassroomAssignmentsAsync(this.state.classroom.id, 20).then(async (response: FirestoreFetchResponseModel<Array<ClassroomAssignmentModel>>) => {
				if (response.wasSuccessful && response.data && this.state.classroom) {
					for await (const assignment of response.data) {
						// Get Submissions Count
						if (this.state.isCurrentUserAdmin) {
							const submissionsCountResponse: FirestoreFetchResponseModel<number> = await ClassroomProvider.getClassroomAssignmentSubmissionsCountAsync(this.state.classroom.id, assignment.id);		
							if (submissionsCountResponse.wasSuccessful && submissionsCountResponse.data) {
								assignment.submissionsCount = submissionsCountResponse.data;
							}
						}
						// Get submission for assignment if the current user is not an admin
						else {
							const submissionResponse: FirestoreFetchResponseModel<ClassroomAssignmentSubmissionModel> = await ClassroomProvider.getClassroomAssignmentSubmissionAsync(this.state.classroom.id, assignment.id);		
							if (submissionResponse.wasSuccessful && submissionResponse.data) {
								assignment.submission = submissionResponse.data;
							}
						}
					}
					this.state.classroomAssignments = response.data;
				}
				this.state.isLoadingClassroomAssignments = false;
			});
		}
		else {
			this.state.classroomAssignments = [];
		}
	}

	/**
	 * Checks if the current user is a classroom admin.
	 */
	private checkIfCurrentUserIsAdmin(): void {
		this.state.isCurrentUserAdmin = ClassroomUtilities.isCurrentUserAdmin(this.state.classroomUsers);
	}

	/**
	 * Sets the initally active tab.
	 */
	private setInitialActiveTab(): void {
		if (this.state.isCurrentUserAdmin) {
			this.state.activeTab = "assignments";
		}
		else {
			this.state.activeTab = "all";
		}
	}

	/**
	 * True if the classroom is not loading.
	 */
	public isClassroomDetailVisible(): boolean {
		return !this.state.isLoadingClassroom && !this.state.isLoadingClassroomUsers && !this.state.isLoadingClassroomAssignments && !ClassroomUtilities.isBusy.value;
	}

	/**
	 * True if the classroom is loading.
	 */
	public isLoadingVisible(): boolean {
		return this.state.isLoadingClassroom || this.state.isLoadingClassroomUsers || this.state.isLoadingClassroomAssignments || ClassroomUtilities.isBusy.value;
	}

	/**
	 * Called when the user clicks the "back" button.
	 * Returns them to the classroom list.
	 */
	public onBackButtonClicked(): void {
		router.push("/classroom");
	}

	/**
	 * True if the current user is an admin.
	 */
	public isNewAssignmentButtonVisible(): boolean | undefined {
		return this.state.isCurrentUserAdmin;
	}

	/**
	 * True if the current user is not an admin.
	 */
	public isAssignmentsHeadingVisible(): boolean | undefined {
		return !this.state.isCurrentUserAdmin;
	}

	/**
	 * Called when the user clicks the "New Assignment" button.
	 * Opens the create assignment modal.
	 */
	public onNewAssignmentButtonClicked(): void {
		ModalUtilities.showModal({
			modal: "CreateAssignment",
			options: {
				classroom: this.state.classroom
			}
		});
	}

	/**
	 * Returns a list of tabs to display on the classroom detail page.
	 */
	public getTabs(): Array<EbTabsOption> {
		if (this.state.isCurrentUserAdmin) {
			return [
				{
					label: this.getText("assignments"),
					key: "assignments"
				},
				{
					label: this.getText("settings"),
					key: "settings"
				}
			];
		}
		else {
			return [
				{
					label: this.getText("all"),
					key: "all"
				},
				{
					label: this.getText("not-started"),
					key: "not-started"
				},
				{
					label: this.getText("work-in-progress"),
					key: "work-in-progress"
				},
				{
					label: this.getText("waiting-to-be-marked"),
					key: "waiting-to-be-marked"
				},
				{
					label: this.getText("marked"),
					key: "marked"
				},
			];
		}

	}

	/**
	 * Called when a tab is clicked.
	 */
	public onTabClicked(tab: EbTabsOption): void {
		this.state.activeTab = tab.key;
	}

	/**
	 * Returns a list of assignments for displaying in the assignments table.
	 */
	public getAssignments(): Array<EbTableItem> {
		if (this.state.classroom) {
			let assignments: Array<ClassroomAssignmentModel> = [];

			if (this.state.isCurrentUserAdmin) {
				assignments = this.state.classroomAssignments;
			}
			else {
				switch (this.state.activeTab) {
					case "all":
						assignments = this.state.classroomAssignments;
						break;
					case "not-started":
						assignments = this.state.classroomAssignments.filter((assignment: ClassroomAssignmentModel) => {
							return !assignment.submission;
						});
						break;
					case "work-in-progress":
						assignments = this.state.classroomAssignments.filter((assignment: ClassroomAssignmentModel) => {
							return assignment.submission && !assignment.submission.submitted;
						});
						break;
					case "waiting-to-be-marked":
						assignments = this.state.classroomAssignments.filter((assignment: ClassroomAssignmentModel) => {
							return assignment.submission && assignment.submission.submitted && !assignment.submission.marked;
						});
						break;
					case "marked":
						assignments = this.state.classroomAssignments.filter((assignment: ClassroomAssignmentModel) => {
							return assignment.submission && assignment.submission.marked;
						});
						break;
				}
			}

			return ClassroomUtilities.remapAssignmentsForTable(this.state.classroom, assignments, this.state.classroomUsers);
		}
		else {
			return [];
		}
	}

	/**
	 * True if the active tab is "assignments" or the user is not an admin.
	 */
	public isAssignmentsTableVisible(): boolean {
		if (this.state.isCurrentUserAdmin) {
			return this.state.activeTab === "assignments";
		}
		else {
			return true;
		}
	}

	/**
	 * True if classroom assignments are loading.
	 */
	public isAssignmentsTableLoading(): boolean {
		return this.state.isLoadingClassroomAssignments;
	}

	/**
	 * Returns a list of classroom users for the users table.
	 */
	public getUsers(): Array<EbTableItem> {
		if (this.state.classroom) {
			return ClassroomUtilities.remapClassroomUsersForTable(this.state.classroom, this.state.classroomUsers);
		}
		else {
			return [];
		}
	}

	/**
	 * True if the active tab is "settings".
	 */
	public isUsersTableVisible(): boolean {
		return this.state.activeTab === "settings";
	}
	
	/**
	 * True if classroom users are loading.
	 */
	public isUsersTableLoading(): boolean {
		return this.state.isLoadingClassroomUsers;
	}

	/**
	 * Called when the add users button is clicks.
	 * Opens the "add classroom users" modal.
	 */
	public onAddUsersButtonClicked(): void {
		if (this.state.classroom) {
			ModalUtilities.showModal({
				modal: "AddClassroomUsers",
				options: {
					classroomId: this.state.classroom.id
				}
			});
		}
	}

	/**
	 * True if the active tab is "settings".
	 */
	public isDangerZoneVisible(): boolean {
		return this.state.activeTab === "settings";
	}

	/**
	 * Called when the user clicks the delete classroom button.
	 * Opens the delete classroom modal.
	 */
	public onDeleteClassroomButtonClicked(): void {
		if (this.state.classroom) {
			ModalUtilities.showModal({
				modal: "DeleteClassroom",
				options: {
					classroomId: this.state.classroom.id
				}
			});
		}
	}
}

// Export the view model.
export const view: ClassroomDetailModel = new ClassroomDetailModel();