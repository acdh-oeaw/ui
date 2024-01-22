import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		children: "Checkbox",
		isDisabled: false,
	},
};
