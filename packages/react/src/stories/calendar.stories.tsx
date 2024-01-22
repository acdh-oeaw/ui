import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@/components/calendar";

const meta: Meta<typeof Calendar> = {
	title: "Components/Calendar",
	component: Calendar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		"aria-label": "Event date",
	},
};
