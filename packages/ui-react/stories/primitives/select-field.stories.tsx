import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { ListBox } from "@/src/primitives/list-box";
import { ListBoxItem } from "@/src/primitives/list-box-item";
import { Popover } from "@/src/primitives/popover";
import { SelectControl } from "@/src/primitives/select-control";
import { SelectField } from "@/src/primitives/select-field";
import { SelectValue } from "@/src/primitives/select-value";

const items = [
	{ id: "apple", label: "Apple" },
	{ id: "apricot", label: "Apricot" },
	{ id: "banana", label: "Banana" },
	{ id: "blackberry", label: "Blackberry" },
	{ id: "blueberry", label: "Blueberry" },
	{ id: "cantaloupe", label: "Cantaloupe" },
	{ id: "cherry", label: "Cherry" },
	{ id: "dragonfruit", label: "Dragonfruit" },
	{ id: "fig", label: "Fig" },
	{ id: "grape", label: "Grape" },
	{ id: "guava", label: "Guava" },
	{ id: "kiwi", label: "Kiwi" },
	{ id: "lemon", label: "Lemon" },
	{ id: "lime", label: "Lime" },
	{ id: "mango", label: "Mango" },
	{ id: "papaya", label: "Papaya" },
	{ id: "passionfruit", label: "Passionfruit" },
	{ id: "peach", label: "Peach" },
	{ id: "pear", label: "Pear" },
	{ id: "pineapple", label: "Pineapple" },
	{ id: "plum", label: "Plum" },
	{ id: "pomegranate", label: "Pomegranate" },
	{ id: "raspberry", label: "Raspberry" },
	{ id: "strawberry", label: "Strawberry" },
	{ id: "watermelon", label: "Watermelon" },
];

const meta = {
	title: "Primitives/SelectField",
	component: SelectField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {
		onSelectionChange: fn(),
	},
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		"aria-label": "Fruits",
		placeholder: "Select a fruit",
	},
	render(args) {
		return (
			<SelectField {...args}>
				<SelectControl>
					<SelectValue />
				</SelectControl>
				<Popover>
					<ListBox items={items}>
						{(item) => {
							return <ListBoxItem key={item.id}>{item.label}</ListBoxItem>;
						}}
					</ListBox>
				</Popover>
			</SelectField>
		);
	},
};

export const Small: Story = {
	args: {
		...Default.args,
		size: "sm",
	},
	render: Default.render,
};

export const Medium: Story = {
	args: {
		...Default.args,
		size: "md",
	},
	render: Default.render,
};

export const Large: Story = {
	args: {
		...Default.args,
		size: "lg",
	},
	render: Default.render,
};
