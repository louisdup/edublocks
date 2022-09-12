import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbButton from "./eb-button.vue";

export default {
	title: "Button",
	component: EbButton,
	argTypes: {
		color: {
			options: [
				"pink",
				"white",
				"green",
				"navy",
				"red"
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
			EbButton
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `<eb-button v-bind="args" />`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Button"
};

export const withIcon: Story = template.bind({});

withIcon.args = {
	label: "Button",
	icon: ["fas", "plus"]
};

export const loading: Story = template.bind({});

loading.args = {
	isLoading: true
};

export const disabled: Story = template.bind({});

disabled.args = {
	label: "Button",
	isDisabled: true
};

export const fullWidth: Story = template.bind({});

fullWidth.args = {
	label: "Button",
	isFullWidth: true
};