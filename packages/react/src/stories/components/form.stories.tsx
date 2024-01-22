import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Form } from "@/components/form";
import { FormSection } from "@/components/form-section";
import { FormSectionTitle } from "@/components/form-section-title";
import { Label } from "@/components/label";
import { TextArea } from "@/components/text-area";
import { TextField } from "@/components/text-field";
import { TextInput } from "@/components/text-input";

const meta: Meta<typeof Form> = {
	title: "Components/Form",
	component: Form,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {},
	render(args) {
		return (
			<Form {...args} className="grid gap-y-6">
				<FormSection>
					<FormSectionTitle>Food</FormSectionTitle>

					<TextField isRequired={true} name="iceCream">
						<Label>Ice cream</Label>
						<TextInput />
						<FieldDescription>Please enter your favourite flavor.</FieldDescription>
						<FieldError />
					</TextField>

					<TextField isRequired={true} name="comment">
						<Label>Comment</Label>
						<TextArea />
						<FieldDescription>Please leave a comment.</FieldDescription>
						<FieldError />
					</TextField>
				</FormSection>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
