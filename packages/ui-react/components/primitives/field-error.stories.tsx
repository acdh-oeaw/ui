import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldError } from "@/components/primitives/field-error";

const meta = {
	title: "Primitives/FieldError",
	component: FieldError,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof FieldError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "This is a field error.",
	},
};
