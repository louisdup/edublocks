import { Data } from "@/components/types";
import { reactive } from "vue";
import { ModalModelBase } from "../base-classes/modal-model-base";
import { AddClassroomUsersState } from "./add-classroom-users-state";
import * as DynamicLinksProvider from "@/data/providers/dynamic-links-provider";
import { FetchResponseModel } from "@/data/models/fetch-response-model";
import { DynamicLinkModel } from "@/data/models/dynamic-link-model";
import { ClassroomUtilities } from "@/utilities/classroom-utilities";

/**
 * Modal model for the add classroom users modal.
 */
class AddClassroomUsersModel extends ModalModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "add-classroom-users";
	}

	/**
	 * Reactive instance of the modal state.
	 */
	public state: AddClassroomUsersState = reactive(new AddClassroomUsersState());

	/**
	 * Initialise the modal model.
	 */
	public init(props: Data): void {
		this.createJoinLink(props.classroomId as string);
	}

	/**
	 * Creates a dynamic short link for the classroom join link.
	 */
	private async createJoinLink(classroomId: string): Promise<void> {
		const link: string = `https://${location.host}/classroom/${classroomId}/join`;
		const body: object = {
			dynamicLinkInfo: {
				domainUriPrefix: ClassroomUtilities.joinUrl,
				link
			},
			suffix: {
				option: "SHORT"
			}
		};

		const response: FetchResponseModel<DynamicLinkModel> = await DynamicLinksProvider.createDynamicLinkAsync(body);

		if (response.wasSuccessful && response.data) {
			this.state.joinClassroomLink = response.data.shortLink;
		}
	}

	/**
	 * Returns the classroom join code.
	 * Removes the URL from the link to get the code.
	 */
	public getClassroomCode(): string | undefined {
		return this.state.joinClassroomLink?.split(`${ClassroomUtilities.joinUrl}/`).pop();
	}

	/**
	 * Returns the appropriate text for the copy button depending on whether the link has been copied to the clipboard or not.
	 */
	public getCopyButtonText(): string {
		return this.state.hasCopied ? this.getText("copied") : this.getText("copy-link");
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
	 * Copies the classroom join link to the clipboard.
	 * Sets hasCopied to true for 3 seconds to change the button state to tell the user the link has been copied.
	 */
	public async onCopyClicked(): Promise<void> {
		if (this.state.joinClassroomLink) {
			await navigator.clipboard.writeText(this.state.joinClassroomLink);
			this.state.hasCopied = true;
			setTimeout(() => {
				this.state.hasCopied = false;
			}, 3000);
		}
	}
}

// Export the modal model.
export const modal: AddClassroomUsersModel = new AddClassroomUsersModel();