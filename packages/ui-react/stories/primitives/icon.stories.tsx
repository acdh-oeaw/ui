import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuIcon } from "lucide-react";

import { Icon } from "@/src/primitives/icon";

const meta = {
	title: "Primitives/Icon",
	component: Icon,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <MenuIcon />,
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
