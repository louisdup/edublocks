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
	 * Reactive instance of the component state.
	 */
	public state: EbDropdownState = reactive(new EbDropdownState());

	/**
	 * Closes the dropdown by setting isOpen to false and then setting isOpen to undefined so it can be reopened by the user.
	 */
	private closeDropdown(): void {
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

	/**
	 * Returns a filtered list of dropdown options based on whether they're visible or not.
	 */
	public getFilteredDropdownOptions(options: Array<Array<EbDropdownOption>>): Array<Array<EbDropdownOption>> {
		const filteredOptions: Array<Array<EbDropdownOption>> = [];

		options.forEach((optionsGroup: Array<EbDropdownOption>) => {
			const filteredGroup: Array<EbDropdownOption> = optionsGroup.filter((option: EbDropdownOption) => {
				return option.visible !== false;
			});
			
			if (filteredGroup.length) {
				filteredOptions.push(filteredGroup);
			}
		});

		return filteredOptions;
	}
}

// Export the component model
export const component: EbDropdownModel = new EbDropdownModel();