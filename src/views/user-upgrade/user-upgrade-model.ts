import router from "@/router";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { ViewModelBase } from "@/views/base-classes/view-model-base";
import * as UsersProvider from "@/data/providers/users-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";

/**
 * View model for the not found view.
 */
class NotFoundModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "user-upgrade";
	}

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		if (AuthenticationUtilities.isCurrentUserCompatible()) {
			router.push("/");
		}
		else {
			this.upgradeCurrentUserAccount();
		}
	}

	/**
	 * Upgrades the current users account so that it's compatible with this version of EduBlocks.
	 */
	private async upgradeCurrentUserAccount(): Promise<void> {
		if (AuthenticationUtilities.currentUser.value) {
			const response: FirestoreFetchResponseModel<void> = await UsersProvider.updateCurrentUserDetailsAsync(AuthenticationUtilities.currentUser.value.uid, {
				version: 5
			});

			if (response.wasSuccessful) {
				// 10 seconds should be enough for cloud function to be automatically started and new projects added.
				setTimeout(() => {
					router.push("/");
				}, 10000);
			}
		}
	}
}

// Export the view model.
export const view: NotFoundModel = new NotFoundModel();