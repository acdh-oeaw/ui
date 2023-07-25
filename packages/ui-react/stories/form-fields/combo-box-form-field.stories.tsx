import type { Meta, StoryObj } from "@storybook/react-vite";

import { ComboBoxFormField, ComboBoxFormFieldItem } from "@/src/form-fields/combo-box-form-field";

const meta = {
	title: "Form Fields/ComboBoxFormField",
	component: ComboBoxFormField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof ComboBoxFormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children(item) {
			return (
				<ComboBoxFormFieldItem id={item.id} textValue={item.label}>
					{item.label}
				</ComboBoxFormFieldItem>
			);
		},
		description: "Please select your favorite fruit.",
		items: [
			{ id: "apple", label: "Apple" },
			{ id: "banana", label: "Banana" },
			{ id: "cherry", label: "Cherry" },
			{ id: "date", label: "Date" },
		],
		label: "Fruit",
	},
};
