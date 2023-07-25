import type { Meta, StoryObj } from "@storybook/react-vite";

import { SelectFormField, SelectFormFieldItem } from "@/src/form-fields/select-form-field";

const meta = {
	title: "Form Fields/SelectFormField",
	component: SelectFormField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof SelectFormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children(item) {
			return (
				<SelectFormFieldItem id={item.id} textValue={item.label}>
					{item.label}
				</SelectFormFieldItem>
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
