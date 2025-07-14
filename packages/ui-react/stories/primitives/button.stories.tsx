import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react/jsx-runtime";
import { fn } from "storybook/test";

import { Button } from "@/src/primitives/button";
import { PendingIndicator } from "@/src/primitives/pending-indicator";

const meta = {
	title: "Primitives/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {
		onPress: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Fruits",
	},
};

export const SmallSolidBrand: Story = {
	args: {
		...Default.args,
		size: "sm",
		tone: "brand",
		variant: "solid",
	},
};

export const SmallSolidNeutral: Story = {
	args: {
		...Default.args,
		size: "sm",
		tone: "neutral",
		variant: "solid",
	},
};

export const SmallSolidInverse: Story = {
	args: {
		...Default.args,
		size: "sm",
		tone: "inverse",
		variant: "solid",
	},
};

export const SmallSolidNegative: Story = {
	args: {
		...Default.args,
		size: "sm",
		tone: "negative",
		variant: "solid",
	},
};

export const SmallSolidPositive: Story = {
	args: {
		...Default.args,
		size: "sm",
		tone: "positive",
		variant: "solid",
	},
};

export const SmallSolidWarning: Story = {
	args: {
		...Default.args,
		size: "sm",
		tone: "warning",
		variant: "solid",
	},
};

export const SmallSolidInformative: Story = {
	args: {
		...Default.args,
		size: "sm",
		tone: "informative",
		variant: "solid",
	},
};

export const WithPendingIndicator: Story = {
	args: {
		...Default.args,
		children({ isPending }) {
			return (
				<Fragment>
					{isPending ? <PendingIndicator /> : null}
					{Default.args!.children as string}
				</Fragment>
			);
		},
		isPending: true,
	},
};
