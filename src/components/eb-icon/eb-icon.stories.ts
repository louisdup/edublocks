import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbIcon from "./eb-icon.vue";

export default {
	title: "Icon",
	component: EbIcon,
	argTypes: {
		color: {
			options: [
				"black", 
				"gray",
				"white",
				"red",
				"blue",
				"green",
				"orange",
				"pink"
			],
			control: {
				 type: "select" 
			}
		},
		backgroundColor: {
			options: [
				"red", 
				"blue",
				"green",
				"orange",
				"pink",
				"transparent"
			],
			control: {
				 type: "select" 
			}
		},
		align: {
			options: [
				"left", 
				"center", 
				"right"
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
			EbIcon
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-icon v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	icon: ["fas", "plus"]
};