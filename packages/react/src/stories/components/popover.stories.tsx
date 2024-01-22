import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import {
	Dialog,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/dialog";
import { Popover, PopoverArrow } from "@/components/popover";

const meta: Meta<typeof Popover> = {
	title: "Components/Popover",
	component: Popover,
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
			<DialogTrigger>
				<Button>Open popover</Button>
				<Popover {...args}>
					<PopoverArrow />
					<Dialog>
						<DialogHeader>
							<DialogTitle>Ice cream</DialogTitle>
							<DialogDescription>Please select your favourite flavor.</DialogDescription>
						</DialogHeader>
					</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
};
