import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbSlider from "./eb-slider.vue";

export default {
	title: "Slider",
	component: EbSlider
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbSlider
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `
			<eb-slider v-bind="args">
				<eb-slider-slide 						
					v-for="card in 10"
					:key="card"
				>
					<eb-card 
						title="Title"
						subtitle="Subtitle"
						image="/images/modes/python/thumbnail.svg"
					/>
				</eb-slider-slide>
			</eb-slider>
		`
	};
};

export const primary: Story = template.bind({});

primary.args = {
	label: "Heading"
};