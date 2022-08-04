import { ComponentModelBase } from "../base-classes/component-model-base";
import { Data } from "@/components/types";
import { LogoUtilities } from "@/utilities/logo-utilities";

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
}