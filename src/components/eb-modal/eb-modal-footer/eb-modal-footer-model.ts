import { cva } from "class-variance-authority";
import { ComponentModelBase } from "../../base-classes/component-model-base";

/**
 * Component model for the modal footer component.
 */
export class EbModalFooterModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "modal-footer";
	}

	/**
	 * Returns alignment class list.
	 */
	 public variants: Function = cva(["space-x-6"], {
		variants: {
			align: {
				left: "",
				center: "mx-auto",
				right: "ml-auto"
			},
		},
		defaultVariants: {
			align: "left"
		}
	});
}

// Export the component model.
export const component: EbModalFooterModel = new EbModalFooterModel();
