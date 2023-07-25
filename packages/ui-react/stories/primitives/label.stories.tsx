import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "@/src/primitives/label";

const meta = {
	title: "Primitives/Label",
	component: Label,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Fruit",
	},
};
