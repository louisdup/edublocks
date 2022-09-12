import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbModal from "./eb-modal.vue";
import EbModalHeader from "./eb-modal-header/eb-modal-header.vue";

export default {
	title: "Modal",
	component: EbModal,
	argTypes: {
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
			EbModal,
			EbModalHeader
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `
			<eb-modal>
				<eb-modal-header 
					:title="args.title" 
					:align="args.align" 
					:icon="args.icon"
					:iconColor="args.iconColor"
				/>
				<eb-modal-content>
					<eb-label label="Content goes here" />
				</eb-modal-content>
				<eb-modal-footer align="right">
					<eb-button label="Button" color="white" />
					<eb-button label="Button" color="pink" />
				</eb-modal-footer>
			</eb-modal />
		`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	title: "Modal Title",
};

export const withIcon: Story = template.bind({});

withIcon.args = {
	title: "Modal Title",
	align: "center",
	icon: ["fas", "plus"],
	iconColor: "pink"
};