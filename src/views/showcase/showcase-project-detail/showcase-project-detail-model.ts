import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { ShowcaseProjectDetailState } from "./showcase-project-detail-state";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import * as UsersProvider from "@/data/providers/users-provider";
import router from "@/router";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { UserModel } from "@/data/models/user-model";
import { UsersUtilities } from "@/utilities/users-utilities";

/**
 * View model for the showcase project detail view.
 */
class ShowcaseProjectDetailModel extends ViewModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "showcase-project-detail";
	}
            
	/**
	 * Reactive instance of the view state.
	 */
	public state: ShowcaseProjectDetailState = reactive(new ShowcaseProjectDetailState());

	/**
	 * Initialise the view model.
	 */
	public init(): void {
		this.loadInitialData();
	}

	/**
	 * Load the initial set of data required by the view.
	 */
	private async loadInitialData(): Promise<void> {
		await this.loadShowcaseProject();
		await this.loadShowcaseProjectAuthor();
	}

	/**
	 * Loads the requested showcase project and saves it in state.
	 */
	private async loadShowcaseProject(): Promise<void> {
		const id: string = router.currentRoute.value.params.id as string;

		this.state.isLoadingShowcaseProject = true;
		
		await ShowcaseProvider.getShowcaseProjectAsync(id).then((response: FirestoreFetchResponseModel<ShowcaseProjectModel>) => {
			if (response.wasSuccessful && response.data) {
				this.state.showcaseProject = response.data;
			}
			this.state.isLoadingShowcaseProject = false;
		});
	}

	/**
	 * Loads information about a user.
	 */
	private async loadShowcaseProjectAuthor(): Promise<void> {
		if (this.state.showcaseProject) {
			await UsersProvider.getUserAsync(this.state.showcaseProject.uid).then((response: FirestoreFetchResponseModel<UserModel>) => {
				if (response.wasSuccessful && response.data) {
					this.state.showcaseProjectAuthor = response.data;
				}
			});
		}
	}

	/**
	 * True if the showcase project is not loading.
	 */
	public isShowcaseProjectDetailVisible(): boolean {
		return !this.state.isLoadingShowcaseProject;
	}
	
	/**
	 * True if the showcase project is loading.
	 */
	public isLoadingVisible(): boolean {
		return this.state.isLoadingShowcaseProject;
	}

	/**
	 * Called when the user clicks the "back" button.
	 * Returns them to the showcase landing page.
	 */
	public onBackButtonClicked(): void {
		router.push(`/showcase`);
	}

	/**
	 * Returns the text to display in the page title of the view.
	 * Returns the showcase project title.
	 */
	public getPageTitle(): string | undefined {
		return this.state.showcaseProject?.title;
	}

	/**
	 * Returns the url of the showcase project for the iframe.
	 */
	public getIframeURL(): string | undefined {
		return `http://localhost:8080/project/${this.state.showcaseProject?.uid}/${this.state.showcaseProject?.project}?embed=true`;
	}

	/**
	 * Returns the profile picture of the showcase project author.
	 */
	public getShowcaseProjectAuthorProfilePicture(): string | undefined {
		if (this.state.showcaseProjectAuthor) {
			return UsersUtilities.getProfilePictureForEmail(this.state.showcaseProjectAuthor.email);
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the description of the showcase project.
	 */
	public getShowcaseProjectDescription(): string | undefined {
		if (this.state.showcaseProject?.description) {
			return this.state.showcaseProject?.description;
		}
		else {
			return this.getText("no-description");
		}
	}
}

// Export the view model.
export const view: ShowcaseProjectDetailModel = new ShowcaseProjectDetailModel();