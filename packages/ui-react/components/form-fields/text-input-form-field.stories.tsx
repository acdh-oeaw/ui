import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextInputFormField } from "@/components/form-fields/text-input-form-field";

const meta = {
	title: "Form Fields/TextInputFormField",
	component: TextInputFormField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof TextInputFormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		description: "Please tell us all about your favorite fruit.",
		label: "Fruit",
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: "This fruit is rotten.",
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
