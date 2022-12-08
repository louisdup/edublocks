import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EbDropdownOption } from "@/components/eb-dropdown/eb-dropdown-types";
import router from "@/router";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";

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
	 * True if the editor is not in embed mode.
	 */
	public isMenuVisible(): boolean {
		return router.currentRoute.value.query.embed ? false : true;
	}

	/**
	 * Adds margin to the left of the project button if the editor is in embed mode.
	 */
	public getProjectButtonClass(): string {
		return router.currentRoute.value.query.embed ? "ml-2" : "";
	}

	/**
	 * Returns an image file path for the logo of the current mode.
	 */
	public getCurrentModeLogo(): string | undefined {
		if (EditorUtilities.currentProject.value) {
			return EditorUtilities.currentProject.value.mode.config.logo;
		}
		else {
			return undefined;
		}	
	}

	/**
	 * Returns the name of the current project.
	 */
	public getCurrentProjectName(): string | undefined {
		if (EditorUtilities.currentProject.value) {
			return EditorUtilities.currentProject.value.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns a list of dropdown options for the menu.
	 */
	public getMenuDropdownOptions(): Array<Array<EbDropdownOption>> {
		return [
			[
				{ 
					title: this.getText("new-project"),
					icon: ["fas", "plus"],
					action: (): void => {
						ModalUtilities.showModal({
							modal: "CreateProject"
						});
					}
				},
			],
			[
				{
					title: this.getText("home"),
					icon: ["far", "home"],
					action: (): void => {
						router.push("/");
					}
				},
				{
					title: this.getText("projects"),
					icon: ["far", "folder-open"],
					action: (): void => {
						router.push("/projects");
					}
				},
				{
					title: this.getText("showcase"),
					icon: ["far", "film"],
					action: (): void => {
						router.push("/showcase");
					}
				},
				{
					title: this.getText("learn"),
					icon: ["far", "book-open"],
					action: (): void => {
						router.push("/learn");
					}
				},
				{
					title: this.getText("classroom"),
					icon: ["far", "users"],
					action: (): void => {
						router.push("/classroom");
					}
				},
			]
		];
	}
}

// Export the component model.
export const component: EditorDesktopHeaderModel = new EditorDesktopHeaderModel();