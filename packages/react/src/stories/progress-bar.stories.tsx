import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "@/components/progress-bar";

const meta: Meta<typeof ProgressBar> = {
	title: "Components/ProgressBar",
	component: ProgressBar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Loading…",
		value: 80,
	},
};
