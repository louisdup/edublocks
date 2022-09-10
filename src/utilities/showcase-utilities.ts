import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import router from "@/router";
import { AuthenticationUtilities } from "./authentication-utilities";
import { LocalizationUtilities } from "./localization-utilities";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for the showcase.
 */
export class ShowcaseUtilities {
	/**
	 * Lookup localized text and get a localized value.
	 */
	public static getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText("showcase", key, placeholderValues);
	}
		
	/**
	 * True if the current user is the author of a showcase project.
	 */
	public static isAuthor(uid: string): boolean {
		if (AuthenticationUtilities.currentUser.value) {
			return AuthenticationUtilities.currentUser.value.uid === uid;
		}
		else {
			return false;
		}
	}

	/**
	 * Redirect to a showcase project page.
	 */
	public static openShowcaseProject(id: string): void {
		router.push(`/showcase/${id}`);
	}

	/**
	 * Returns a list of options for showcase project dropdowns.
	 */
	public static getShowcaseProjectDropdownOptions(project: ShowcaseProjectModel): Array<Array<EbDropdownOption>> {
		return [
			[
				{
					title: this.getText("open-project"),
					icon: ["far", "file"],
					action: (): void => {
						this.openShowcaseProject(project.id);
					}
				}
			],
			[
				{
					title: this.getText("delete-project"),
					icon: ["far", "trash"],
					visible: this.isAuthor(project.uid),
					action: (): void => {
						ModalUtilities.showModal({
							modal: "DeleteShowcaseProject",
							options: {
								project
							}
						});
					}
				}
			]
		];
	}
}