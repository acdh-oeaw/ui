import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		isDisabled: false,
		children: "Button",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		isDisabled: false,
		children: "Button",
		variant: "secondary",
	},
};

export const Negative: Story = {
	args: {
		isDisabled: false,
		children: "Button",
		variant: "negative",
	},
};

export const Outline: Story = {
	args: {
		isDisabled: false,
		children: "Button",
		variant: "outline",
	},
};

export const Ghost: Story = {
	args: {
		isDisabled: false,
		children: "Button",
		variant: "ghost",
	},
};
