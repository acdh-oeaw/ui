import type { Meta, StoryObj } from "@storybook/react-vite";

import { RequiredIndicator } from "@/components/primitives/required-indicator";

const meta = {
	title: "Primitives/RequiredIndicator",
	component: RequiredIndicator,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof RequiredIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
