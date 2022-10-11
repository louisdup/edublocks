import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbChip from "./eb-chip.vue";

export default {
	title: "Chip",
	component: EbChip,
	argTypes: {
		color: {
			options: [
				"black",
				"white",
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
			EbChip
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-chip v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	title: "Title",
	subtitle: "Subtitle",
	thumbnail: "/images/modes/html/logo.svg"
};

export const fullWidth: Story = template.bind({});

fullWidth.args = {
	title: "Title",
	subtitle: "Subtitle",
	thumbnail: "/images/modes/html/logo.svg",
	isFullWidth: true
};