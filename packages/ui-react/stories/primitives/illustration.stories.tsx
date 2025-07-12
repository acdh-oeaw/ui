import type { Meta, StoryObj } from "@storybook/react-vite";
import { FolderSearchIcon } from "lucide-react";

import { Illustration } from "@/src/primitives/illustration";

const meta = {
	title: "Primitives/Illustration",
	component: Illustration,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Illustration>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <FolderSearchIcon />,
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
