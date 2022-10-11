import { ComponentModelBase } from "../base-classes/component-model-base";
import { Options } from "@splidejs/vue-splide";
import { cva } from "class-variance-authority";

/**
 * Component model for the slider component.
 */
export class EbSliderModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "slider";
	}

	/**
	 * Returns a list of options for the slider.
	 */
	public getSliderOptions(spacing?: number): Options {
		return {
			autoWidth: true,
			gap: this.convertSpacingToRem(spacing), 
			pagination: false
		};
	}

	/**
	 * Returns list of classes for the slider component.
	 */
	public variants: Function = cva(undefined, {
		variants: {
			margin: {
				"-3": "-m-3",
				"-2": "-m-2",
				"-1": "-m-1",
				"0": "m-0",
				"2": "m-2",
				"4": "m-4",
				"6": "m-6",
				"8": "m-8"
			}
		}
	});

	/**
	 * Converts a spacing prop value to rem for the slider.
	 */
	private convertSpacingToRem(spacing?: number): string {
		let rem: number = 0;

		switch (spacing) {
			case 1:
				rem = 0.25;
				break;
			case 2:
				rem = 0.5;
				break;
			case 4:
				rem = 1;
				break;
			case 6:
				rem = 1.5;
				break;
			case 8:
				rem = 2;
				break;
		}

		return `${rem}rem`;
	}
}

// Export the component model.
export const component: EbSliderModel = new EbSliderModel();