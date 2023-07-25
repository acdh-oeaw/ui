import type { Meta, StoryObj } from "@storybook/react-vite";

import { FieldDescription } from "@/src/primitives/field-description";

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
