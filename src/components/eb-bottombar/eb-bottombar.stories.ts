import { Meta, Story, ArgTypes } from "@storybook/vue3";
import { EbBottombarItem } from "./eb-bottombar-types";
import EbBottombar from "./eb-bottombar.vue";

export default {
	title: "Bottombar",
	component: EbBottombar
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbBottombar
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-bottombar v-bind="args" />`
	};
};

const bottombarItems: Array<EbBottombarItem> = [
	{
		title: "Item 1",
		key: "1",
		icon: ["fas", "plus"],
	},
	{
		title: "Item 2",
		key: "2",
		icon: ["fas", "plus"],
	},
	{
		title: "Item 3",
		key: "3",
		icon: ["fas", "plus"],
	},
	{
		title: "Item 4",
		key: "4",
		icon: ["fas", "plus"],
	}
];

export const primary: Story = template.bind({});

primary.args = {
	items: bottombarItems,
	active: "1"
};