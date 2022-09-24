import { Meta, Story, ArgTypes } from "@storybook/vue3";
import { EbDropdownOption } from "../eb-dropdown/eb-dropdown-types";
import EbCard from "./eb-card.vue";

export default {
	title: "Card",
	component: EbCard
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbCard
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-card v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	title: "Title",
	subtitle: "Subtitle",
	image: "/images/modes/python/thumbnail.svg"
};

export const loading: Story = template.bind({});

loading.args = {
	isLoading: true
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

export const withDropdown: Story = template.bind({});

withDropdown.args = {
	title: "Title",
	subtitle: "Subtitle",
	image: "/images/modes/python/thumbnail.svg",
	dropdownOptions
};