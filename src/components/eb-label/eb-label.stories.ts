import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbLabel from "./eb-label.vue";

export default {
	title: "Label",
	component: EbLabel,
	argTypes: {
		color: {
			options: [
				"black", 
				"gray"
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
			EbLabel
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-label v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Label"
};