import { ComponentModelBase } from "../base-classes/component-model-base";
import { Data } from "@/components/types";
import { EbBottombarItem } from "./eb-bottombar-types";
import router from "@/router";

/**
 * Component model for the bottombar component.
 */
export class EbBottombarModel extends ComponentModelBase {
	private props: Data;

	constructor(props: Data) {
		super();
		this.props = props;
	}
    
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "bottombar";
	}

	/**
	 * Returns dynamic class list based on whether the item is active.
	 */
	 public getItemActiveClassList(item: EbBottombarItem): string {
		return this.props.active === item.key ? "bg-navy-400/40" : "opacity-50 hover:opacity-100 transition-opacity";
	}

	/**
	 * Called when the user clicks an item and either pushes to a route or runs an action, based on what is specified against the item.
	 */
	public onItemClick(item: EbBottombarItem): void {
		if (item.href) {
			router.push(item.href);
		}
		if (item.action) {
			item.action();
		}
	}
}