import type { Meta, StoryObj } from "@storybook/react";
import { PrinterIcon, SaveIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Tooltip, TooltipTrigger } from "@/components/tooltip";

const meta: Meta<typeof Tooltip> = {
	title: "Components/Tooltip",
	component: Tooltip,
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
			<div className="flex gap-2">
				<TooltipTrigger>
					<Button className="px-2" variant="secondary">
						<SaveIcon aria-hidden={true} className="size-5 shrink-0" />
						<span className="sr-only">Save</span>
					</Button>
					<Tooltip {...args}>Save</Tooltip>
				</TooltipTrigger>
				<TooltipTrigger>
					<Button className="px-2" variant="secondary">
						<PrinterIcon aria-hidden={true} className="size-5 shrink-0" />
						<span className="sr-only">Print</span>
					</Button>
					<Tooltip {...args}>Print</Tooltip>
				</TooltipTrigger>
			</div>
		);
	},
};
