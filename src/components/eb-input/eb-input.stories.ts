import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbInput from "./eb-input.vue";

export default {
	title: "Input",
	component: EbInput
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbInput
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-input v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Input",
	placeholder: "Placeholder...",
	type: "text"
};