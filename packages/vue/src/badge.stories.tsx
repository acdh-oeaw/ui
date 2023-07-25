import { type Meta, type StoryObj } from "@storybook/vue3";

import { Badge } from "@/badge";

const meta = {
	title: "Badge",
	component: Badge,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "negative", "positive", "outline"],
		},
	},
	args: {
		default: "Badge",
	},
	render(args) {
		return {
			setup() {
				return () => <Badge {...args}>{args.default}</Badge>;
			},
		};
	},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
};
