import { Meta, Story, ArgTypes } from "@storybook/vue3";
import { EbSelectOption } from "./eb-select-types";
import EbSelect from "./eb-select.vue";

export default {
	title: "Select",
	component: EbSelect
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbSelect
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-select v-bind="args" />`
	};
};

const selectOptions: Array<EbSelectOption> = [
	{
		label: "Option 1",
		value: "1"
	},
	{
		label: "Option 2",
		value: "2"
	}
];

export const primary: Story = template.bind({});

primary.args = {
	label: "Select",
	options: selectOptions
};