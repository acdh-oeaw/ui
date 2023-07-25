import type { Meta, StoryObj } from "@storybook/react-vite";

import {
	ComboBoxFormField,
	ComboBoxFormFieldItem,
} from "@/components/form-fields/combobox-form-field";
import { SelectFormField, SelectFormFieldItem } from "@/components/form-fields/select-form-field";
import { TextAreaFormField } from "@/components/form-fields/text-area-form-field";
import { TextInputFormField } from "@/components/form-fields/text-input-form-field";
import { Button } from "@/components/primitives/button";
import { Form } from "@/components/primitives/form";
import { fruits } from "@/data/fruits";

const meta = {
	title: "Examples/Form",
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(_args, _context) {
		return (
			<Form>
				<TextInputFormField description="Please enter your name." isRequired={true} label="Name" />
				<TextInputFormField
					description="Please enter your email address."
					isRequired={true}
					label="Email address"
					type="email"
				/>
				<TextAreaFormField
					description="Please enter a message."
					isRequired={true}
					label="Message"
				/>
				<ComboBoxFormField
					description="Please select your favorite fruit."
					isRequired={true}
					items={fruits}
					label="Favorite fruit"
					placeholder="Select a fruit"
				>
					{(item) => {
						return <ComboBoxFormFieldItem key={item.id}>{item.label}</ComboBoxFormFieldItem>;
					}}
				</ComboBoxFormField>
				<SelectFormField
					description="Please select your favorite fruit."
					isRequired={true}
					items={fruits}
					label="Favorite fruit"
					placeholder="Select a fruit"
				>
					{(item) => {
						return <SelectFormFieldItem key={item.id}>{item.label}</SelectFormFieldItem>;
					}}
				</SelectFormField>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
