import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { LogoUtilities } from "@/utilities/logo-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";

/**
 * Component model for the editor desktop header component.
 */
export class DesktopHeaderModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "desktop-header";
	}

	/**
	 * Returns an image file path for the logo.
	 */
	public getLogoPath(): string {
		return LogoUtilities.getFullLogoPath();
	}

	/**
	 * Called when the new button is clicked.
	 * Opens the "Create Project" modal.
	 */
	public onNewClicked(): void {
		ModalUtilities.showModal({
			modal: "CreateProject"
		});
	}
}

// Export the component model.
export const component: DesktopHeaderModel = new DesktopHeaderModel();