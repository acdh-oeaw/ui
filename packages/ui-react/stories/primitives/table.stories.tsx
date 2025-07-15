import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from "@/src/primitives/table";

const meta = {
	title: "Primitives/Table",
	component: Table,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return <Table {...args}></Table>;
	},
};
