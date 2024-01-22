import type { Meta, StoryObj } from "@storybook/react";

import { RangeCalendar } from "@/components/range-calendar";

const meta: Meta<typeof RangeCalendar> = {
	title: "Components/RangeCalendar",
	component: RangeCalendar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		"aria-label": "Trip dates",
	},
};
