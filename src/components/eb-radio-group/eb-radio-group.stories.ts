import { Meta, Story, ArgTypes } from "@storybook/vue3";
import { EbRadioGroupOption } from "./eb-radio-group-types";
import EbRadioGroup from "./eb-radio-group.vue";

export default {
	title: "Radio Group",
	component: EbRadioGroup
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbRadioGroup
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-radio-group v-bind="args" />`
	};
};

const radioGroupOptions: Array<EbRadioGroupOption> = [
	{
		key: "1",
		title: "Option 1",
		subtitle: "Subtitle"
	},
	{
		key: "2",
		title: "Option 2",
		subtitle: "Subtitle"
	}
];

export const primary: Story = template.bind({});

primary.args = {
	label: "Select",
	options: radioGroupOptions,
	modelValue: "1"
};