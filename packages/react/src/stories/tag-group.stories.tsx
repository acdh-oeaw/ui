import type { Meta, StoryObj } from "@storybook/react";

import { Tag, TagGroup } from "@/components/tag-group";

const meta: Meta<typeof TagGroup> = {
	title: "Components/TagGroup",
	component: TagGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Ice cream flavor",
		selectionMode: "single",
	},
	render(args) {
		return (
			<TagGroup {...args}>
				<Tag>Chocolate</Tag>
				<Tag>Mint</Tag>
				<Tag>Strawberry</Tag>
				<Tag>Vanilla</Tag>
			</TagGroup>
		);
	},
};
