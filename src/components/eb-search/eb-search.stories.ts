import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbSearch from "./eb-search.vue";

export default {
	title: "Search",
	component: EbSearch
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbSearch
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-search v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	placeholder: "Search..."
};