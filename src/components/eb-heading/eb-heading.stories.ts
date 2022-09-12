import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbHeading from "./eb-heading.vue";

export default {
	title: "Heading",
	component: EbHeading,
	argTypes: {
		color: {
			options: [
				"black", 
				"gray"
			],
			control: {
				 type: "select" 
			}
		},
		size: {
			options: [
				"xs", 
				"sm", 
				"normal", 
				"md", 
				"lg", 
				"xl", 
				"2xl", 
				"3xl", 
				"4xl", 
				"5xl", 
				"6xl", 
				"7xl", 
				"8xl", 
				"9xl"
			],
			control: { 
				type: "select" 
			}
		},
		weight: {
			options: [
				"light", 
				"normal", 
				"medium", 
				"semibold", 
				"bold", 
				"black"
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
		},
	}
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbHeading
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-heading v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Heading"
};