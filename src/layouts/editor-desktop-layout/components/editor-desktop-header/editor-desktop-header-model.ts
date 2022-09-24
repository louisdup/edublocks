import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { LogoUtilities } from "@/utilities/logo-utilities";

/**
 * Component model for the editor desktop header component.
 */
export class EditorDesktopHeaderModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "editor-desktop-header";
	}

	/**
	 * Returns an image file path for the logo.
	 */
	public getLogoPath(): string {
		return LogoUtilities.getMiniLogoPath();
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
	 * Returns the name of the current project.
	 */
	public getCurrentProjectName(): string | undefined {
		if (EditorUtilities.currentProject) {
			return EditorUtilities.currentProject.name;
		}
		else {
			return undefined;
		}
	}
}

// Export the component model.
export const component: EditorDesktopHeaderModel = new EditorDesktopHeaderModel();