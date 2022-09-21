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
	 * Returns list of classes for a specific button variant
	 */
	public variants: Function = cva(["inline-flex", "items-center", "justify-center", "border", "text-sm", "font-medium", "rounded-md", "shadow-sm", "focus:ring-2", "focus:ring-offset-2", "focus:outline-none", "transition-all"], {
		variants: {
			size: {
				"sm": ["text-xs", "py-2", "px-4"],
				"normal": ["text-sm", "py-3", "px-5"]
			},
			color: {
				pink: ["bg-pink-500", "text-gray-100", "focus:ring-pink-400", "hover:bg-pink-400", "border-transparent"],
				white: ["bg-white", "text-gray-700", "focus:ring-gray-300", "hover:bg-gray-50", "border-gray-300"],
				green: ["bg-green-500", "text-gray-100", "focus:ring-green-400", "hover:bg-green-400", "border-transparent"],
				navy: ["bg-navy-500", "text-gray-100", "focus:ring-navy-400", "hover:bg-navy-400", "border-transparent"],
				red: ["bg-red-500", "text-gray-100", "focus:ring-red-400", "hover:bg-red-400", "border-transparent"],
				semiTransparent: ["bg-white", "bg-opacity-10", "text-gray-100", "focus:ring-transparent", "hover:bg-opacity-20", "border-transparent"],
				transparent: ["bg-transparent", "text-gray-100", "focus:ring-transparent", "hover:bg-white/10", "border-transparent"]
			},
			isFullWidth: {
				true: "w-full"
			},
			isDisabled: {
				true: "!bg-gray-300 !cursor-not-allowed focus:!ring-gray-300"
			}

		},
		defaultVariants: {
			size: "normal",
			color: "pink"
		}
	});
}