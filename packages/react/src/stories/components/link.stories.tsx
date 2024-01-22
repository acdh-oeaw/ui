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
		href: "/",
	},
	render(args) {
		return <Link {...args}>Go to page</Link>;
	},
};

export const Disabled: Story = {
	args: {},
	render(args) {
		return <Link {...args}>Go to page</Link>;
	},
};
