import type { Meta, StoryObj } from "@storybook/react";
import { HelpCircleIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Dialog, DialogTitle, DialogTrigger } from "@/components/dialog";
import { Popover } from "@/components/popover";

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
				<Button aria-label="Help" variant="icon">
					<HelpCircleIcon aria-hidden={true} className="size-4 shrink-0" />
				</Button>
				<Popover {...args} className="max-w-[250px]">
					<Dialog>
						<DialogTitle slot="title">Help</DialogTitle>
						<p className="text-sm">For help accessing your account, please contact support.</p>
					</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
};
