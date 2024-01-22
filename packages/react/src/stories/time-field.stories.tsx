import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { TimeField } from "@/components/time-field";

const meta: Meta<typeof TimeField> = {
	title: "Components/TimeField",
	component: TimeField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Event time",
	},
};

export const Validation: Story = {
	args: {
		isRequired: true,
		label: "Event time",
	},
	render(args) {
		return (
			<Form className="flex flex-col items-start gap-2">
				<TimeField {...args} />
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
