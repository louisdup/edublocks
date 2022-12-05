import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { ClassroomListState } from "./classroom-list-state";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { ClassroomModel } from "@/data/models/classroom-model";
import { EbTableItem } from "@/components/eb-table/eb-table-types";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";

/**
 * View model for the classroom list view.
 */
class ClassroomListModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "classroom-list";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: ClassroomListState = reactive(new ClassroomListState());

	/**
	 * Returns the text to display in the page title of the view.
	 */
	public getPageTitle(): string {
		return this.getText("classroom");
	}

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		// Load the initial data.
		this.loadInitialData();

		// Reload the initial set of data if a content refresh is triggered.
		this.observeContentRefresh(() => {
			this.loadInitialData();
		});
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private loadInitialData(): void {
		this.loadClassrooms();
	}

	/**
	 * Loads classrooms the user has access to.
	 */
	private loadClassrooms(): void {
		if (this.isCurrentUserLoggedIn()) {
			this.state.isLoadingInitialClassrooms = true;
	
			ClassroomProvider.getClassroomsAsync().then((response: Array<ClassroomModel>) => {
				this.state.classrooms = response;
				this.state.isLoadingInitialClassrooms = false;
			});
		}
		else {
			this.state.classrooms = [];
		}
	}

	/**
	 * Called when the new classroom button is clicked.
	 * Opens the "Create Classroom" modal.
	 */
	public onNewClassroomButtonClicked(): void {
		ModalUtilities.showModal({
			modal: "CreateClassroom"
		});
	}

	/**
	 * Called when the join classroom button is clicked.
	 * Opens the "Join Classroom" modal.
	 */
	public onJoinClassroomButtonClicked(): void {
		ModalUtilities.showModal({
			modal: "JoinClassroom"
		});
	}

	/**
	 * Returns a list of classrooms for the table.
	 */
	public getClassrooms(): Array<EbTableItem> {
		return ClassroomUtilities.remapClassroomsForTable(this.state.classrooms);
	}
	
	/**
	 * True if classrooms are loading.
	 */
	public isClassroomsTableLoading(): boolean {
		return this.state.isLoadingInitialClassrooms;
	}

	/**
	 * Returns a title for the classrooms table empty state.
	 */
	public getClassroomsTableEmptyStateTitle(): string {
		return AuthenticationUtilities.currentUser.value ? this.getText("no-classrooms-found") : this.getText("login-to-view-classrooms");
	}
	
	/**
	 * Returns a title for the classrooms table empty state.
	 */
	public getClassroomsTableEmptyStateSubtitle(): string {
		if (AuthenticationUtilities.currentUser.value) {
			return this.getText("get-started-by-joining-creating");
		}
		else {
			return this.getText("you-need-to-be-logged-in");
		}
	}
}

// Export the view model.
export const view: ClassroomListModel = new ClassroomListModel();