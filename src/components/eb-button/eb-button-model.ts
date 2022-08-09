import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";
import { Data } from "../types";

/**
 * Component model for the button component.
 */
export class EbButtonModel extends ComponentModelBase {
	private props: Data;

	constructor(props: Data) {
		super();
		this.props = props;
	}
    
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "button";
	}

	/**
	 * Returns width variant based on isFullWidth prop.
	 */
	public getWidthVariant(): string {
		return this.props.isFullWidth ? "full" : "";
	}
    
	/**
	 * Returns list of classes for a specific button variant
	 */
	public variants: Function = cva(["inline-flex", "items-center", "justify-center", "border", "border-transparent", "text-sm", "font-medium", "rounded-md", "shadow-sm", "focus:ring-2", "focus:ring-offset-2", "focus:outline-none", "transition-all"], {
		variants: {
			size: {
				normal: ["text-sm", "py-3", "px-5"]
			},
			color: {
				pink: ["bg-pink-500", "text-gray-100", "focus:ring-pink-400", "hover:bg-pink-400"],
				green: ["bg-green-500", "text-gray-100", "focus:ring-green-400", "hover:bg-green-400"],
				navy: ["bg-navy-500", "text-gray-100", "focus:ring-navy-400", "hover:bg-navy-400"],
			},
			width: {
				full: "w-full",
			},
		},
		defaultVariants: {
			size: "normal",
			color: "pink"
		}
	});
}