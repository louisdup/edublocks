import { reactive, nextTick } from "vue";
import { ComponentModelBase } from "../base-classes/component-model-base";
import { EbDropdownState } from "./eb-dropdown-state";
import { EbDropdownOption } from "./eb-dropdown-types";

/**
 * Component model for the dropdown component.
 */
class EbDropdownModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "dropdown";
	}

	/**
	 * Reactive instance of the view state.
	 */
	public state: EbDropdownState = reactive(new EbDropdownState());

	/**
	 * Opens the dropdown.
	 */
	public openDropdown(): void {
		this.state.isOpen = true;
	}

	/**
	 * Closes the dropdown by setting isOpen to false and then setting isOpen to undefined so it can be reopened by the user.
	 */
	public closeDropdown(): void {
		this.state.isOpen = false;
		nextTick(() => {
			this.state.isOpen = undefined;
		});
	}
	
	/**
	 * Called when an option is clicked and runs the linked action and closes the dropdown.
	 */
	public onOptionClicked(option: EbDropdownOption): void {
		option.action();
		this.closeDropdown();
	}
}

// Export the component model
export const component: EbDropdownModel = new EbDropdownModel();