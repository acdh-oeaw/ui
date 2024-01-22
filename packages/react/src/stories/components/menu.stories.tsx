import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Menu, MenuItem, MenuPopover, MenuSeparator, MenuTrigger } from "@/components/menu";

const meta: Meta<typeof Menu> = {
	title: "Components/Menu",
	component: Menu,
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
		return (
			<MenuTrigger>
				<Button>Open menu</Button>
				<MenuPopover>
					<Menu {...args}>
						<MenuItem>Buy chocolate</MenuItem>
						<MenuItem>Bake muffins</MenuItem>
						<MenuSeparator />
						<MenuItem>Destroy coconut</MenuItem>
					</Menu>
				</MenuPopover>
			</MenuTrigger>
		);
	},
};
