import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { DateField } from "@/components/date-field";
import { Form } from "@/components/form";

const meta: Meta<typeof DateField> = {
	title: "Components/DateField",
	component: DateField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Event date",
	},
};

export const Validation: Story = {
	args: {
		isRequired: true,
		label: "Event date",
	},
	render(args) {
		return (
			<Form className="flex flex-col items-start gap-2">
				<DateField {...args} />
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
