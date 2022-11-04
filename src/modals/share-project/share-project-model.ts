import { Data } from "@/components/types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { reactive, watchEffect } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { ShareProjectState } from "./share-project-state";
import { EbRadioGroupOption } from "@/components/eb-radio-group/eb-radio-group-types";
import * as ProjectsProvider from "@/data/providers/projects-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";

/**
 * Modal model for the share project modal.
 */
class ShareProjectModal extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "share-project";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: ShareProjectState = reactive(new ShareProjectState());

	/**
	 * Initialise the modal model.
	 */
	public init(props: Data): void {
		let project: FirestoreProjectModel | undefined;

		if (props.project) {
			project = props.project as FirestoreProjectModel;
		}
		else if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject) {
			project = EditorUtilities.currentProject.value.firestoreProject;
		}

		if (project) {
			this.setAccessRadioGroupValue(project);
			this.setLinkInputValueToProjectLink(project);
			this.doesProjectBelongToCurrentUser(project);
			this.onAccessChanged(project);
		}
	}

	/**
	 * Sets the value of the link input to that of the current project.
	 */
	public setLinkInputValueToProjectLink(project: FirestoreProjectModel): void {
		this.state.data["link"] = `https://${location.host}/project/${project.uid}/${project.id}`;
	}

	/**
	 * Sets the value of the access radio group to the access level of the current project.
	 */
	public setAccessRadioGroupValue(project: FirestoreProjectModel): void {
		this.state.data["access"] = project.access;
	}

	/**
	 * Checks if the project belongs to the current user.
	 */
	public doesProjectBelongToCurrentUser(project: FirestoreProjectModel): void {
		if (AuthenticationUtilities.currentUser.value) {
			this.state.isCurrentUserAuthor = project.uid === AuthenticationUtilities.currentUser.value.uid;
		}
	}

	/**
	 * True if the project is public.
	 */
	public isCopyLinkVisible(): boolean {
		return this.state.data["access"] === "public-read";
	}

	/**
	 * True if the project belongs to the current user.
	 */
	public isAccessInputVisible(): boolean {
		return this.state.isCurrentUserAuthor;
	}

	/**
	 * Watches for when the user changes the value of the access radio group.
	 * Updates the project access level.
	 */
	public onAccessChanged(project: FirestoreProjectModel): void {
		watchEffect(async () => {
			if (this.state.data["access"] && this.state.data["access"] !== project.access) {
				this.state.isBusy = true;
				const body: object = {
					access: this.state.data["access"],
					updated: new Date().toISOString()
				};
				await ProjectsProvider.updateProjectAsync(project.id, body).then((response: FirestoreFetchResponseModel<void>) => {
					if (response.wasSuccessful) {
						project.access = this.state.data["access"];
						this.state.isBusy = false;
					}
				});
			}
		});
	}

	/**
	 * Returns a list of access levels to populate the access radio group input.
	 */
	public getAccessOptions(): Array<EbRadioGroupOption> {
		return [
			{
				key: "private",
				title: this.getText("private"),
				subtitle: this.getText("only-you-can-view-edit"),
			},
			{
				key: "public-read",
				title: this.getText("public"),
				subtitle: this.getText("anyone-with-link"),
			},
		];
	}

	/**
	 * Returns the appropriate text for the copy button depending on whether the link has been copied to the clipboard or not.
	 */
	public getCopyButtonText(): string {
		return this.state.hasCopied ? this.getText("copied") : this.getText("copy");
	}

	/**
	 * Returns the appropriate icon for the copy button depending on whether the link has been copied to the clipboard or not.
	 */
	public getCopyButtonIcon(): Array<string> {
		return this.state.hasCopied ? ["far", "check"] : ["far", "link"];
	}

	/**
	 * Returns the appropriate color for the copy button depending on whether the link has been copied to the clipboard or not.
	 */
	public getCopyButtonColor(): string {
		return this.state.hasCopied ? "green" : "blue";
	}

	/**
	 * Called when the user clicks the copy button.
	 * Copies the project link to the clipboard.
	 * Sets hasCopied to true for 3 seconds to change the button state to tell the user the link has been copied.
	 */
	public async onCopyClicked(): Promise<void> {
		await navigator.clipboard.writeText(this.state.data["link"]);
		this.state.hasCopied = true;
		setTimeout(() => {
			this.state.hasCopied = false;
		}, 3000);
	}
}

// Export the modal model.
export const modal: ShareProjectModal = new ShareProjectModal();