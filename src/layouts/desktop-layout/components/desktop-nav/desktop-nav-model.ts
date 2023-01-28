import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EbSidebarItem } from "@/components/eb-sidebar/eb-sidebar-types";
import router from "@/router";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { ScreenUtilities } from "@/utilities/screen-utilities";

/**
 * Component model for the desktop navigation component.
 */
export class DesktopNavModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "navigation";
	}
		
	/**
	 * Returns a list of navigation items for the sidebar.
	 */
	public getItems(): Array<EbSidebarItem> {
		return [
			{
				key: "home",
				title: this.getText("home"),
				icon: ["far", "home"],
				href: "/"
			},
			{
				key: "editor",
				title: this.getText("editor"),
				icon: ["far", "code"],
				action: (): void => {
					ModalUtilities.showModal({
						modal: "CreateProject"
					});
				}
			},
			{
				key: "projects",
				title: this.getText("projects"),
				icon: ["far", "folder-open"],
				href: "/projects"
			},
			{
				key: "showcase",
				title: this.getText("showcase"),
				icon: ["far", "film"],
				href: "/showcase"
			},
			{
				key: "learn",
				title: this.getText("learn"),
				icon: ["far", "book-open"],
				href: "/learn"
			},
			{
				key: "classroom",
				title: this.getText("classroom"),
				icon: ["far", "users"],
				href: "/classroom"
			},
			{
				key: "settings",
				title: this.getText("settings"),
				icon: ["far", "cog"],
				href: "/settings"
			},
		];
	}

	/**
	 * Returns the current active item based on the current route.
	 */
	public getActiveItem(): string {
		return router.currentRoute.value.meta.key as string;
	}

	/**
	 * Returns if the sidebar should be in minimized mode because current device is a tablet (Width 1024px) or the user has specified that it should be minimized.
	 */
	public shouldSidebarBeMinimized(minimize?: boolean): boolean {
		if (ScreenUtilities.size.value <= 1024) {
			return true;
		}
		else if (minimize) {
			return true;
		}
		else {
			return false;
		}
	}
	
}

// Export the component model.
export const component: DesktopNavModel = new DesktopNavModel();