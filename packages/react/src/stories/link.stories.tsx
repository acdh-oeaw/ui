import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "@/components/link";

const meta: Meta<typeof Link> = {
	title: "Components/Link",
	component: Link,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		children: "The missing link",
		href: "https://www.imdb.com/title/tt6348138/",
		target: "_blank",
	},
};
