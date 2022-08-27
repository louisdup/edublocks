import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import router from "@/router";
import { AuthenticationUtilities } from "./authentication-utilities";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for the showcase.
 */
export class ShowcaseUtilities {
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
					title: "Open Project",
					icon: ["far", "file"],
					action: (): void => {
						this.openShowcaseProject(project.id);
					}
				}
			],
			[
				{
					title: "Delete",
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