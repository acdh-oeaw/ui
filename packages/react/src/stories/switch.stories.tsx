import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@/components/switch";

const meta: Meta<typeof Switch> = {
	title: "Components/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		children: "Wi-Fi",
	},
};
