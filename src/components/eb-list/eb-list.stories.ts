import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbList from "./eb-list.vue";

export default {
	title: "List",
	component: EbList
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbList
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `
			<eb-list v-bind="args">
				<eb-list-item 
					v-for="item in 10"  
					:key="item"
					left-title="Title"
					left-subtitle="Subtitle"
					right-title="Title"
					right-subtitle="Subtitle"
					thumbnail="/images/modes/html/logo.svg"
				/>
			</eb-list>
		`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Heading"
};