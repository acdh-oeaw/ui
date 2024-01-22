import type { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {},
	render(args) {
		return <Button {...args}>Click me</Button>;
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
	render(args) {
		return <Button {...args}>Click me</Button>;
	},
};

export const WithIcon: Story = {
	args: {},
	render(args) {
		return (
			<Button {...args}>
				<PlusIcon aria-hidden={true} className="size-5 shrink-0" />
				Add item
			</Button>
		);
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
	},
	render(args) {
		return <Button {...args}>Click me</Button>;
	},
};

export const OutlineDisabled: Story = {
	args: {
		isDisabled: true,
		variant: "outline",
	},
	render(args) {
		return <Button {...args}>Click me</Button>;
	},
};

export const Plain: Story = {
	args: {
		variant: "plain",
	},
	render(args) {
		return <Button {...args}>Click me</Button>;
	},
};

export const PlainDisabled: Story = {
	args: {
		isDisabled: true,
		variant: "plain",
	},
	render(args) {
		return <Button {...args}>Click me</Button>;
	},
};
