import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressCircle } from "@/src/primitives/progress-circle";

const meta = {
	title: "Primitives/ProgressCircle",
	component: ProgressCircle,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof ProgressCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
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
