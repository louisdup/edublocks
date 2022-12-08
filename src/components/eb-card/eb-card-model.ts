import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../base-classes/component-model-base";

/**
 * Component model for the card component.
 */
class EbCardModel extends ComponentModelBase {    
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "card";
	}
    
	/**
	 * Returns list of classes for a specific thumbnail variant
	 */
	public thumbnailVariants: Function = cva(["h-40", "w-60", "overflow-hidden", "relative", "rounded-md", "border", "py-2"], {
		variants: {
			color: {
				blue: "bg-blue-500",
				orange: "bg-orange-500",
				purple: "bg-purple-500",
				green: "bg-green-500",
				navy: "bg-navy-500",
				red: "bg-red-500",
				gray: "bg-gray-400"
			}
		},
		defaultVariants: {
			color: "gray"
		}
	});

	/**
	 * Returns the first line for the thumbnail background, based on the title.
	 */
	public getThumbnailBackgroundFirstLine(title: string): string {
		return title.toUpperCase().split(" ")[0];
	}

	/**
	 * Returns the second line for the thumbnail background, based on the title.
	 */
	public getThumbnailBackgroundSecondLine(title: string): string {
		const splitTitle: Array<string> = title.toUpperCase().split(" ");

		if (splitTitle.length > 1) {
			return splitTitle[1];
		}
		else {
			return splitTitle[0];
		}
	}
}

// Export the component model
export const component: EbCardModel = new EbCardModel();
