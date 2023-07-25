import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldLabel } from "@/src/components/field-label";

const meta = {
	title: "Components/FieldLabel",
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
		children: "Fruit",
	},
};

export const Required: Story = {
	args: {
		children: "Fruit",
		isRequired: true,
	},
};
