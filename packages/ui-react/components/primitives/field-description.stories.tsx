import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldDescription } from "@/components/primitives/field-description";

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
		children: "This is a field description.",
	},
};
