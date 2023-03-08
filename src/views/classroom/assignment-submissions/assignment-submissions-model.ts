import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { AssignmentSubmissionsState } from "./assignment-submissions-state";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import * as UsersProvider from "@/data/providers/users-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import router from "@/router";
import { EbTabsOption } from "@/components/eb-tabs/eb-tabs-types";
import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";
import { CloudFunctionsResponseModel } from "@/data/models/cloud-functions-fetch-response-model";
import { OtherUserModel } from "@/data/models/other-user-model";

/**
 * View model for the assignment submissions view.
 */
class AssignmentSubmissionsModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "assignment-submissions";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: AssignmentSubmissionsState = reactive(new AssignmentSubmissionsState());

	/**
	 * Returns the text to display in the page title of the view.
	 */
	public getPageTitle(): string | undefined {
		if (this.state.assignment) {
			return this.state.assignment.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		// Checks if the current user is allowed to access this page.
		this.checkIfCurrentUserCanAccessPage(); 

		this.observeContentRefresh(() => {
			this.checkIfCurrentUserCanAccessPage(); 
		});

		// Load the initial data.
		this.loadInitialData();
	}

	/**
	 * Checks if the current user is allowed to access this page.
	 */
	private checkIfCurrentUserCanAccessPage(): void {
		if (!this.isCurrentUserLoggedIn()) {
			router.push("/classroom");
		}
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private async loadInitialData(): Promise<void> {
		await this.loadAssignment();
		await this.loadAssignmentSubmissions();
	}

	/**
	 * Loads the requested assignment.
	 */
	private async loadAssignment(): Promise<void> {
		const classroomId: string = router.currentRoute.value.params.classroomId as string;
		const assignmentId: string = router.currentRoute.value.params.assignmentId as string;

		this.state.isLoadingAssignment = true;
	
		await ClassroomProvider.getAssignmentAsync(classroomId, assignmentId).then((response: FirestoreFetchResponseModel<ClassroomAssignmentModel>) => {
			if (response.wasSuccessful && response.data) {
				this.state.assignment = response.data;
			}
			else {
				router.push("/404");
			}
			this.state.isLoadingAssignment = false;
		});
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
	 * Loads the assignment's submissions.
	 */
	private async loadAssignmentSubmissions(): Promise<void> {	
		const classroomId: string = router.currentRoute.value.params.classroomId as string;

		if (this.state.assignment) {
			this.state.isLoadingAssignmentSubmissions = true;
			this.state.assignmentSubmissions = [];
		
			await ClassroomProvider.getClassroomAssignmentSubmissionsAsync(classroomId, this.state.assignment.id).then(async (response: FirestoreFetchResponseModel<Array<ClassroomAssignmentSubmissionModel>>) => {
				if (response.wasSuccessful && response.data) {
					for await (const submission of response.data) {
						submission.user = await this.loadUserInfo(submission.uid);
						this.state.assignmentSubmissions.push(submission);
					}
				}
				this.state.isLoadingAssignmentSubmissions = false;
			});
		}
	}

	/**
	 * True if the assignment is not loading.
	 */
	public isAssignmentSubmissionsVisible(): boolean {
		return !this.state.isLoadingAssignment;
	}

	/**
	 * True if the assignment is loading.
	 */
	public isLoadingVisible(): boolean {
		return this.state.isLoadingAssignment;
	}

	/**
	 * Called when the user clicks the "back" button.
	 * Returns them to the classroom.
	 */
	public onBackButtonClicked(): void {
		const classroomId: string = router.currentRoute.value.params.classroomId as string;
		router.push(`/classroom/${classroomId}`);
	}

	/**
	 * Returns a list of tabs to display on the classroom detail page.
	 */
	public getTabs(): Array<EbTabsOption> {
		return [
			{
				label: this.getText("all"),
				key: "all"
			},
			{
				label: this.getText("not-submitted"),
				key: "not-submitted"
			},
			{
				label: this.getText("submitted"),
				key: "submitted"
			},
			{
				label: this.getText("on-time"),
				key: "on-time"
			},
			{
				label: this.getText("late"),
				key: "late"
			},
			{
				label: this.getText("waiting-to-be-marked"),
				key: "waiting-to-be-marked"
			},
			{
				label: this.getText("marked"),
				key: "marked"
			}
		];
	}

	/**
	 * Called when a tab is clicked.
	 */
	public onTabClicked(tab: EbTabsOption): void {
		this.state.activeTab = tab.key;
	}

	/**
	 * Returns a list of assignment submissions for displaying in the assignment submissions table.
	 */
	public getAssignmentSubmissions(): Array<EbTableItem> {
		if (this.state.assignment) {
			let assignmentSubmissions: Array<ClassroomAssignmentSubmissionModel> = [];

			switch (this.state.activeTab) {
				case "all":
					assignmentSubmissions = this.state.assignmentSubmissions;
					break;
				case "not-submitted":
					assignmentSubmissions = this.state.assignmentSubmissions.filter((submission: ClassroomAssignmentSubmissionModel) => {
						return !submission.submitted;
					});
					break;
				case "submitted":
					assignmentSubmissions = this.state.assignmentSubmissions.filter((submission: ClassroomAssignmentSubmissionModel) => {
						return submission.submitted;
					});
					break;
				case "on-time":
					assignmentSubmissions = this.state.assignmentSubmissions.filter((submission: ClassroomAssignmentSubmissionModel) => {
						if (this.state.assignment) {
							return ClassroomUtilities.isAssignmentSubmissionOnTime(this.state.assignment, submission);
						}
						else {
							return undefined;
						}
					});
					break;
				case "late":
					assignmentSubmissions = this.state.assignmentSubmissions.filter((submission: ClassroomAssignmentSubmissionModel) => {
						if (this.state.assignment) {
							return ClassroomUtilities.isAssignmentSubmissionLate(this.state.assignment, submission);
						}
						else {
							return undefined;
						}
					});
					break;
				case "waiting-to-be-marked":
					assignmentSubmissions = this.state.assignmentSubmissions.filter((submission: ClassroomAssignmentSubmissionModel) => {
						return submission.submitted && !submission.marked;
					});
					break;
				case "marked":
					assignmentSubmissions = this.state.assignmentSubmissions.filter((submission: ClassroomAssignmentSubmissionModel) => {
						return submission.marked;
					});
					break;
			}
		
			return ClassroomUtilities.remapAssignmentSubmissionsForTable(this.state.assignment, assignmentSubmissions);
		}
		else {
			return [];
		}	
	}

	/**
	 * True if the assignment's submissions are loading.
	 */
	public isAssignmentSubmissionsTableLoading(): boolean {
		return this.state.isLoadingAssignmentSubmissions;
	}
}

// Export the view model.
export const view: AssignmentSubmissionsModel = new AssignmentSubmissionsModel();