import type { Meta, StoryObj } from "@storybook/react-vite";

import {
	ComboBoxFormField,
	ComboBoxFormFieldItem,
} from "@/components/form-fields/combobox-form-field";
import { type Fruit, fruits } from "@/data/fruits";

const meta = {
	title: "Form Fields/ComboBoxFormField",
	component: ComboBoxFormField<Fruit>,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof ComboBoxFormField<Fruit>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children(item) {
			return <ComboBoxFormFieldItem>{item.label}</ComboBoxFormFieldItem>;
		},
		description: "Please select your favorite fruit.",
		label: "Fruit",
		items: fruits,
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
		selectedKey: fruits.at(0)?.id,
	},
};

export const ReadOnly: Story = {
	args: {
		...Default.args,
		isReadOnly: true,
		selectedKey: fruits.at(0)?.id,
	},
};
