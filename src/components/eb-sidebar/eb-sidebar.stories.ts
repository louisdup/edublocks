import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbSidebar from "./eb-sidebar.vue";
import { EbSidebarItem } from "./eb-sidebar-types";

export default {
	title: "Sidebar",
	component: EbSidebar
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbSidebar
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-sidebar v-bind="args" />`
	};
};

const sidebarItems: Array<EbSidebarItem> = [
	{
		title: "Item 1",
		key: "1",
		icon: ["fas", "plus"]
	},
	{
		title: "Item 2",
		key: "2",
		icon: ["fas", "plus"]
	},
	{
		title: "Item 3",
		key: "3",
		icon: ["fas", "plus"]
	},
	{
		title: "Item 4",
		key: "4",
		icon: ["fas", "plus"]
	},
	{
		title: "Item 5",
		key: "5",
		icon: ["fas", "plus"]
	}
];

export const primary: Story = template.bind({});

primary.args = {
	items: sidebarItems,
	active: "1"
};