import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbListItem from "./eb-list-item.vue";

export default {
	title: "List Item",
	component: EbListItem,
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
			EbListItem
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-list-item v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	leftTitle: "Title",
	leftSubtitle: "Subtitle",
	thumbnail: "/images/modes/html/logo.svg"
};

export const button: Story = template.bind({});

button.args = {
	leftTitle: "Title",
	leftSubtitle: "Subtitle",
	thumbnail: "/images/modes/html/logo.svg",
	isButton: true
};

export const withRightContent: Story = template.bind({});

withRightContent.args = {
	leftTitle: "Title",
	leftSubtitle: "Subtitle",
	rightTitle: "Title",
	rightSubtitle: "Subtitle",
	thumbnail: "/images/modes/html/logo.svg"
};

export const fullWidth: Story = template.bind({});

fullWidth.args = {
	leftTitle: "Title",
	leftSubtitle: "Subtitle",
	rightTitle: "Title",
	rightSubtitle: "Subtitle",
	thumbnail: "/images/modes/html/logo.svg",
	isFullWidth: true
};