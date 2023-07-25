import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "@/button";

const meta = {
	title: "Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: { control: "select", options: ["sm", "md", "lg", "icon"] },
		variant: {
			control: "select",
			options: ["primary", "secondary", "negative", "positive", "outline", "ghost", "link"],
		},
		onPress: { action: "pressed" },
	},
	args: {
		children: "Button",
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		size: "md",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		size: "md",
		variant: "secondary",
	},
};
