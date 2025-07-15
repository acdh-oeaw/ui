import type { Meta, StoryObj } from "@storybook/react-vite";

import { Form } from "@/src/primitives/form";

const meta = {
	title: "Primitives/Form",
	component: Form,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return <Form {...args}></Form>;
	},
};
