import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbTable from "./eb-table.vue";
import { EbTableItem } from "./eb-table-types";

export default {
	title: "Table",
	component: EbTable
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbTable
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-table v-bind="args"/>`
	};
};

const tableItems: Array<EbTableItem> = [
	{
		title: "Item 1",
		thumbnail: "/images/modes/html/logo.svg",
		meta: [
			{
				key: "meta-1",
				label: "Meta Item 1"
			},
			{
				key: "meta-2",
				label: "Meta Item 2"
			},
			{
				key: "meta-3",
				label: "Meta Item 3"
			},
		],
		action: (): void => {
			//
		}
	},
	{
		title: "Item 2",
		thumbnail: "/images/modes/html/logo.svg",
		meta: [
			{
				key: "meta-1",
				label: "Meta Item 1"
			},
			{
				key: "meta-2",
				label: "Meta Item 2"
			},
			{
				key: "meta-3",
				label: "Meta Item 3"
			},
		],
		action: (): void => {
			//
		}
	},
	{
		title: "Item 3",
		thumbnail: "/images/modes/html/logo.svg",
		meta: [
			{
				key: "meta-1",
				label: "Meta Item 1"
			},
			{
				key: "meta-2",
				label: "Meta Item 2"
			},
			{
				key: "meta-3",
				label: "Meta Item 3"
			},
		],
		action: (): void => {
			//
		}
	}
];

export const primary: Story = template.bind({});

primary.args = {
	label: "Heading",
	items: tableItems
};