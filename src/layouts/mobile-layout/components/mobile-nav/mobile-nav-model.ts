import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EbSidebarItem } from "@/components/eb-sidebar/eb-sidebar-types";
import router from "@/router";

/**
 * Component model for the desktop navigation component.
 */
export class MobileNavModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "navigation";
	}
		
	/**
	 * Returns a list of navigation items for the bottombar.
	 */
	public getItems(): Array<EbSidebarItem> {
		return [
			{
				key: "home",
				title: this.getText("home"),
				icon: ["fad", "home"],
				href: "/"
			},
			{
				key: "projects",
				title: this.getText("projects"),
				icon: ["fad", "folder-open"],
				href: "/projects"
			},
			{
				key: "showcase",
				title: this.getText("showcase"),
				icon: ["fad", "film"],
				href: "/showcase"
			},
			{
				key: "classroom",
				title: this.getText("classroom"),
				icon: ["fad", "users"],
				href: "/classroom"
			},
		];
	}

	/**
	 * Returns the current active item based on the current route.
	 */
	public getActiveItem(): string {
		return router.currentRoute.value.meta.key as string;
	}
	
}

// Export the component model.
export const component: MobileNavModel = new MobileNavModel();