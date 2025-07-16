import type { Meta, StoryObj } from "@storybook/react-vite";

import { PendingIndicator } from "@/src";

const meta = {
	title: "Primitives/PendingIndicator",
	component: PendingIndicator,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof PendingIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		"aria-label": "Pending...",
	},
};

export const SizeSmall: Story = {
	args: {
		...Default.args,
		size: "sm",
	},
};

export const SizeMedium: Story = {
	args: {
		...Default.args,
		size: "md",
	},
};

export const SizeLarge: Story = {
	args: {
		...Default.args,
		size: "lg",
	},
};

export const SizeExtraLarge: Story = {
	args: {
		...Default.args,
		size: "xl",
	},
};
