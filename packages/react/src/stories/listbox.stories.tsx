import type { Meta, StoryObj } from "@storybook/react";

import { Listbox, ListboxItem } from "@/components/listbox";

const meta: Meta<typeof Listbox> = {
	title: "Components/Listbox",
	component: Listbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		"aria-label": "Ice cream flavor",
	},
	render(args) {
		return (
			<Listbox {...args}>
				<ListboxItem id="chocolate">Chocolate</ListboxItem>
				<ListboxItem id="mint">Mint</ListboxItem>
				<ListboxItem id="strawberry">Strawberry</ListboxItem>
				<ListboxItem id="vanilla">Vanilla</ListboxItem>
			</Listbox>
		);
	},
};

export const DisabledItems: Story = {
	args: {
		"aria-label": "Ice cream flavor",
		disabledKeys: ["mint"],
	},
	render(args) {
		return (
			<Listbox {...args}>
				<ListboxItem id="chocolate">Chocolate</ListboxItem>
				<ListboxItem id="mint">Mint</ListboxItem>
				<ListboxItem id="strawberry">Strawberry</ListboxItem>
				<ListboxItem id="vanilla">Vanilla</ListboxItem>
			</Listbox>
		);
	},
};
