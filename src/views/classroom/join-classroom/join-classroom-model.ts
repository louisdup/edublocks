import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { JoinClassroomState } from "./join-classroom-state";
import router from "@/router";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";

/**
 * View model for the join classroom view.
 */
class JoinClassroomModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "join-classroom";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: JoinClassroomState = reactive(new JoinClassroomState());

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		this.joinClassroom();
	}

	/**
	 * Adds a user record to the specified classroom 
	 */ 
	private async joinClassroom(): Promise<void> {
		if (AuthenticationUtilities.currentUser.value) {
			this.state.isJoiningClassroom = true;

			const classroomId: string = router.currentRoute.value.params.id as string;

			await ClassroomUtilities.addClassroomUser(classroomId, AuthenticationUtilities.currentUser.value.uid, "student");

			this.state.isJoiningClassroom = false;
		}
		else {
			router.push("/classroom");
			ModalUtilities.showModal({
				modal: "SignIn"
			});
		}
	}

	/**
	 * True if the user is being added to the classroom and they're not already a member. 
	 */
	public isLoadingVisible(): boolean {
		return this.state.isJoiningClassroom && !this.state.isUserAlreadyAMember;
	}

	/**
	 * True if the current user is already a member of the classroom. 
	 */
	public isCantJoinEmptyStateVisible(): boolean {
		return this.state.isUserAlreadyAMember;
	}
}

// Export the view model.
export const view: JoinClassroomModel = new JoinClassroomModel();