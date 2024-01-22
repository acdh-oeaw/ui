import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { DateRangePicker } from "@/components/date-range-picker";
import { Form } from "@/components/form";

const meta: Meta<typeof DateRangePicker> = {
	title: "Components/DateRangePicker",
	component: DateRangePicker,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Trip dates",
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
				<DateRangePicker {...args} />
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
