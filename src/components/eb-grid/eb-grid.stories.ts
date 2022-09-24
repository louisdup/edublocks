import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbGrid from "./eb-grid.vue";

export default {
	title: "Grid",
	component: EbGrid
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbGrid
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `
			<eb-grid v-bind="args">
				<eb-card 
					v-for="card in 10"
					:key="card"
					title="Title"
					subtitle="Subtitle"
					image="/images/modes/python/thumbnail.svg"
				/>
			</eb-grid>
		`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Heading"
};