import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldDescription } from "@/src";

const meta = {
	title: "Primitives/FieldDescription",
	component: FieldDescription,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof FieldDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Please select your favorite fruit.",
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
