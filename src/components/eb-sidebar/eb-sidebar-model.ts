import { ComponentModelBase } from "../base-classes/component-model-base";
import { Data } from "@/components/types";
import { LogoUtilities } from "@/utilities/logo-utilities";
import { EbSidebarItem } from "./eb-sidebar-types";
import router from "@/router";

/**
 * Component model for the sidebar component.
 */
export class EbSidebarModel extends ComponentModelBase {
	private props: Data;

	constructor(props: Data) {
		super();
		this.props = props;
	}
    
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "sidebar";
	}

	/**
	 * Returns an image file for the sidebar logo based on whether the sidebar is minimized.
	 */
	public getSidebarLogoImage(): string {
		return this.props.minimize ? LogoUtilities.getMiniLogoPath() : LogoUtilities.getFullLogoPath();
	}

	/**
	 * Returns dynamic class list based on whether the item is active.
	 */
	 public getItemActiveClassList(item: EbSidebarItem): string {
		return this.props.active === item.key ? "bg-white/10" : "focus:ring-2 focus:ring-navy-400 focus:ring-offset-2 focus:ring-offset-navy-500 cursor-pointer hover:bg-white/10 transition-all";
	}

	/**
	 * Called when the user clicks an item and either pushes to a route or runs an action, based on what is specified against the item.
	 */
	public onItemClick(item: EbSidebarItem): void {
		if (item.href) {
			router.push(item.href);
		}
		if (item.action) {
			item.action();
		}
	}
}