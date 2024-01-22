import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "@/components/toggle-button";

const meta: Meta<typeof ToggleButton> = {
	title: "Components/ToggleButton",
	component: ToggleButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		children: "Pin",
	},
};
