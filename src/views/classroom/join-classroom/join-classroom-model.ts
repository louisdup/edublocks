import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { JoinClassroomState } from "./join-classroom-state";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import * as UsersProvider from "@/data/providers/users-provider";
import router from "@/router";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";

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

			const classroomUsersCountResponse: FirestoreFetchResponseModel<number> = await ClassroomProvider.getClassroomUsersCountAsync(classroomId, AuthenticationUtilities.currentUser.value.uid);

			if (classroomUsersCountResponse.wasSuccessful && classroomUsersCountResponse.data === 0) {
				const classroomUserBody: object = {
					uid: AuthenticationUtilities.currentUser.value.uid,
					created: new Date().toISOString(),
					enrolled: true,
					role: "student"
				};
	
				const classroomUserResponse: FirestoreFetchResponseModel<string> = await ClassroomProvider.createClassroomUserAsync(classroomId, AuthenticationUtilities.currentUser.value.uid, classroomUserBody);
	
				if (classroomUserResponse.wasSuccessful) {
					const userClassroomBody: object = {
						id: classroomId
					};

					const userClassroomResponse: FirestoreFetchResponseModel<string> = await UsersProvider.createUserClassroomAsync(AuthenticationUtilities.currentUser.value.uid, classroomId, userClassroomBody);

					if (userClassroomResponse.wasSuccessful && userClassroomResponse.data) {
						router.push("/classroom");
					}
				}
			}
			else {
				this.state.isUserAlreadyAMember = true;
			}

			this.state.isJoiningClassroom = false;
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