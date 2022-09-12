import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbLink from "./eb-link.vue";

export default {
	title: "Link",
	component: EbLink
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbLink
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-link v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Link"
};