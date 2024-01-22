import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { SearchField } from "@/components/search-field";

const meta: Meta<typeof SearchField> = {
	title: "Components/SearchField",
	component: SearchField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Search",
	},
};

export const Validation: Story = {
	args: {
		isRequired: true,
		label: "Search",
	},
	render(args) {
		return (
			<Form className="flex flex-col items-start gap-2">
				<SearchField {...args} />
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
