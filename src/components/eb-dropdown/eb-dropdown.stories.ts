import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbDropdown from "./eb-dropdown.vue";
import { EbDropdownOption } from "./eb-dropdown-types";

export default {
	title: "Dropdown",
	component: EbDropdown,
	argTypes: {
		placement: {
			options: [
				"auto",
				"auto-start",
				"auto-end",
				"top",
				"top-start",
				"top-end",
				"bottom",
				"bottom-start",
				"bottom-end",
				"right",
				"right-start",
				"right-end",
				"left",
				"left-start",
				"left-end"
			],
			control: {
				type: "select"
			}
		}
	}
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbDropdown
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `
			<eb-dropdown v-bind="args">
				<eb-button label="Open Dropdown" />
			</eb-dropdown>
		`
	};
};

const dropdownOptions: Array<Array<EbDropdownOption>> = [
	[
		{
			title: "Option 1",
			icon: ["fas", "plus"],
			action: (): void => {
				//
			}
		},
		{
			title: "Option 2",
			icon: ["fas", "plus"],
			action: (): void => {
				//
			}
		},
	],
	[
		{
			title: "Option 3",
			icon: ["fas", "plus"],
			action: (): void => {
				//
			}
		}
	]
];

export const primary: Story = template.bind({});

primary.args = {
	options: dropdownOptions
};