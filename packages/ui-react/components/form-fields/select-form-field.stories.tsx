import type { Meta, StoryObj } from "@storybook/react-vite";

import { SelectFormField, SelectFormFieldItem } from "@/components/form-fields/select-form-field";
import { type Fruit, fruits } from "@/data/fruits";

const meta = {
	title: "Form Fields/SelectFormField",
	component: SelectFormField<Fruit>,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof SelectFormField<Fruit>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children(item) {
			return <SelectFormFieldItem>{item.label}</SelectFormFieldItem>;
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

// FIXME:
// export const ReadOnly: Story = {
// 	args: {
// 		...Default.args,
// 		isReadOnly: true,
// 		selectedKey: fruits.at(0)?.id,
// 	},
// };
