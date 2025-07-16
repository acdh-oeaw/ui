import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldLabel } from "@/src";

const meta = {
	title: "Primitives/FieldLabel",
	component: FieldLabel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof FieldLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Fruits",
		isRequired: true,
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
