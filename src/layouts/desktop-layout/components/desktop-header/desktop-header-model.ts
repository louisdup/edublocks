import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
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
	 * Returns an image file path for the logo of the current mode.
	 */
	public getCurrentModeLogo(): string | undefined {
		if (EditorUtilities.currentProject) {
			return EditorUtilities.currentProject.mode.config.logo;
		}
		else {
			return undefined;
		}	
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