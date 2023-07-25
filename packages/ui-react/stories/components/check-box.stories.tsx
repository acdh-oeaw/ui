import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckBox } from "@/src/components/check-box";

const meta = {
	title: "Components/CheckBox",
	component: CheckBox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Apple",
	},
};
