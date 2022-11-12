import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { EbBottombarItem } from "@/components/eb-bottombar/eb-bottombar-types";
import router from "@/router";
import { ModalUtilities } from "@/utilities/modal-utilities";

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
	public getItems(): Array<EbBottombarItem> {
		return [
			{
				key: "home",
				title: this.getText("home"),
				icon: ["far", "home"],
				href: "/"
			},
			{
				key: "new-project",
				component: "EbButton",
				componentProps: {
					icon: ["fas", "plus"]
				},
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
			}
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