import { DEFAULT_VALIDATION_RESULT } from "@react-stately/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldErrorContext } from "react-aria-components";

import { FieldErrorMessage } from "@/src";

const meta = {
	title: "Primitives/FieldErrorMessage",
	component: FieldErrorMessage,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof FieldErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Please select your favorite fruit.",
	},
	render(args) {
		return (
			<FieldErrorContext value={{ ...DEFAULT_VALIDATION_RESULT, isInvalid: true }}>
				<FieldErrorMessage {...args} />
			</FieldErrorContext>
		);
	},
};

export const SizeSmall: Story = {
	args: {
		...Default.args,
		size: "sm",
	},
	render: Default.render,
};

export const SizeMedium: Story = {
	args: {
		...Default.args,
		size: "md",
	},
	render: Default.render,
};

export const SizeLarge: Story = {
	args: {
		...Default.args,
		size: "lg",
	},
	render: Default.render,
};
