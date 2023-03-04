import { ViewModelBase } from "@/views/base-classes/view-model-base";
import { reactive } from "vue";
import { ShowcaseProjectDetailState } from "./showcase-project-detail-state";
import * as ShowcaseProvider from "@/data/providers/showcase-provider";
import * as UsersProvider from "@/data/providers/users-provider";
import router from "@/router";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { CloudFunctionsResponseModel } from "@/data/models/cloud-functions-fetch-response-model";
import { OtherUserModel } from "@/data/models/other-user-model";
import { ShowcaseUtilities } from "@/utilities/showcase-utilities";

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

	private async upgradeShowcaseProject(): Promise<void> {
		if (this.state.showcaseProject && !ShowcaseUtilities.isShowcaseProjectCompatible(this.state.showcaseProject)) {
			await ShowcaseProvider.upgradeShowcaseProjectAsync(this.state.showcaseProject);
			this.loadShowcaseProject();
		}
	}

	/**
	 * Loads the requested showcase project and saves it in state.
	 */
	private async loadShowcaseProject(): Promise<void> {
		const id: string = router.currentRoute.value.params.id as string;

		this.state.isLoadingShowcaseProject = true;
		
		await ShowcaseProvider.getShowcaseProjectAsync(id).then(async (response: FirestoreFetchResponseModel<ShowcaseProjectModel>) => {
			if (response.wasSuccessful && response.data) {
				this.state.showcaseProject = response.data;
				await this.upgradeShowcaseProject();
			}
			else {
				router.push("/404");
			}
			this.state.isLoadingShowcaseProject = false;
		});
	}

	/**
	 * Loads information about a user.
	 */
	private async loadShowcaseProjectAuthor(): Promise<void> {
		if (this.state.showcaseProject) {
			this.state.isLoadingShowcaseProjectAuthor = true;

			await UsersProvider.getUserAsync(this.state.showcaseProject.uid).then((response: CloudFunctionsResponseModel<OtherUserModel>) => {
				if (response.wasSuccessful && response.data) {
					this.state.showcaseProjectAuthor = response.data;
				}
				this.state.isLoadingShowcaseProjectAuthor = false;
			});
		}
	}

	/**
	 * True if the showcase project is not loading.
	 */
	public isShowcaseProjectDetailVisible(): boolean {
		return !this.state.isLoadingShowcaseProject && !this.state.isLoadingShowcaseProjectAuthor;
	}
	
	/**
	 * True if the showcase project is loading.
	 */
	public isLoadingVisible(): boolean {
		return this.state.isLoadingShowcaseProject || this.state.isLoadingShowcaseProjectAuthor;
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
		return `${location.origin}/project/${this.state.showcaseProject?.uid}/${this.state.showcaseProject?.project}?embed=true`;
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