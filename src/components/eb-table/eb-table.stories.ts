import { Meta, Story, ArgTypes } from "@storybook/vue3";
import EbTable from "./eb-table.vue";
import { EbTableHeader } from "./eb-table-types";

export default {
	title: "Table",
	component: EbTable
} as Meta;

const template: Story = (args: ArgTypes) => {
	return {
		components: {
			EbTable
		},
		setup(): ArgTypes {
			return { args };
		},
		template: `
			<eb-table v-bind="args">
				<eb-table-row>
					<eb-table-cell>
						<eb-list-item 
							left-title="Title"
							left-subtitle="Subtitle"
							thumbnail="/images/platforms/html/logo.svg"
						/>
					</eb-table-cell>
					<eb-table-cell>
						<eb-label label="Label 2"/>
					</eb-table-cell>
					<eb-table-cell>
						<eb-label label="Label 3"/>
					</eb-table-cell>
					<eb-table-cell>
						<eb-label label="Hidden Column"/>
					</eb-table-cell>
				</eb-table-row>
			</eb-table>
		`
	};
};

const tableHeaders: Array<EbTableHeader> = [
	{
		label: "Header 1"
	},
	{
		label: "Header 2"
	},
	{
		label: "Header 3"
	},
	{
		label: "Header 4",
		hidden: true
	}
];

export const primary: Story = template.bind({});

primary.args = {
	label: "Heading",
	headers: tableHeaders
};