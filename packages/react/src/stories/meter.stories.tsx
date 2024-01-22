import type { Meta, StoryObj } from "@storybook/react";

import { Meter } from "@/components/meter";

const meta: Meta<typeof Meter> = {
	title: "Components/Meter",
	component: Meter,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Storage space",
		value: 80,
	},
};
