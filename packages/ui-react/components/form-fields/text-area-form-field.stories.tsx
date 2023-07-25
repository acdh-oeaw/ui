import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextAreaFormField } from "@/components/form-fields/text-area-form-field";

const meta = {
	title: "Form Fields/TextAreaFormField",
	component: TextAreaFormField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof TextAreaFormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		description: "Please tell us all about your favorite fruits.",
		label: "Fruits",
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: "These fruits are rotten.",
		isInvalid: true,
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		isDisabled: true,
		value: "Blueberry",
	},
};

export const ReadOnly: Story = {
	args: {
		...Default.args,
		isReadOnly: true,
		value: "Blueberry",
	},
};
