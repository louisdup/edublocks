import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { state } from "@/data/state";
import { ModalUtilities } from "./modal-utilities";

/**
 * Utility functions for the showcase.
 */
export class ShowcaseUtilities {
	/**
	 * Returns a list of options for showcase project dropdowns.
	 */
	public static getShowcaseProjectDropdownOptions(project: ShowcaseProjectModel): Array<Array<EbDropdownOption>> {
		return [
			[
				{
					title: "Delete",
					icon: ["far", "trash"],
					action: (): void => {
						ModalUtilities.showModal({
							modal: "DeleteShowcaseProject",
							options: {
								project
							}
						});
						console.log(state.modal);
					}
				}
			]
		];
	}
}