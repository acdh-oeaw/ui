import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@/components/slider";

const meta: Meta<typeof Slider> = {
	title: "Components/Slider",
	component: Slider,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Range",
		defaultValue: [30, 60],
		thumbLabels: ["start", "end"],
	},
};
