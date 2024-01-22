import type { Meta, StoryObj } from "@storybook/react";

import { GridList, GridListItem } from "@/components/grid-list";

const meta: Meta<typeof GridList> = {
	title: "Components/GridList",
	component: GridList,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		"aria-label": "Ice cream flavors",
		onAction: null,
		selectionMode: "multiple",
	},
	render(args) {
		return (
			<GridList {...args}>
				<GridListItem id="chocolate">Chocolate</GridListItem>
				<GridListItem id="mint">Mint</GridListItem>
				<GridListItem id="strawberry">Strawberry</GridListItem>
				<GridListItem id="vanilla">Vanilla</GridListItem>
			</GridList>
		);
	},
};

export const DisabledItems: Story = {
	args: {
		"aria-label": "Ice cream flavors",
		onAction: null,
		selectionMode: "multiple",
		disabledKeys: ["mint"],
	},
	render(args) {
		return (
			<GridList {...args}>
				<GridListItem id="chocolate">Chocolate</GridListItem>
				<GridListItem id="mint">Mint</GridListItem>
				<GridListItem id="strawberry">Strawberry</GridListItem>
				<GridListItem id="vanilla">Vanilla</GridListItem>
			</GridList>
		);
	},
};
