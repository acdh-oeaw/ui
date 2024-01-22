import type { Meta, StoryObj } from "@storybook/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { Group } from "react-aria-components"; // FIXME:

import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Separator } from "@/components/separator";
import { ToggleButton } from "@/components/toggle-button";
import { Toolbar } from "@/components/toolbar";

const meta: Meta<typeof Toolbar> = {
	title: "Components/Toolbar",
	component: Toolbar,
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
			<Toolbar aria-label="Text formatting" {...args}>
				<Group aria-label="Style" className="contents">
					<ToggleButton aria-label="Bold" className="p-2.5">
						<BoldIcon aria-hidden={true} className="size-4 shrink-0" />
					</ToggleButton>
					<ToggleButton aria-label="Italic" className="p-2.5">
						<ItalicIcon aria-hidden={true} className="size-4 shrink-0" />
					</ToggleButton>
					<ToggleButton aria-label="Underline" className="p-2.5">
						<UnderlineIcon aria-hidden={true} className="size-4 shrink-0" />
					</ToggleButton>
				</Group>
				<Separator orientation={args.orientation === "vertical" ? "horizontal" : "vertical"} />
				<Group aria-label="Clipboard" className="contents">
					<Button variant="secondary">Copy</Button>
					<Button variant="secondary">Paste</Button>
					<Button variant="secondary">Cut</Button>
				</Group>
				<Separator orientation={args.orientation === "vertical" ? "horizontal" : "vertical"} />
				<Checkbox>Night Mode</Checkbox>
			</Toolbar>
		);
	},
};
