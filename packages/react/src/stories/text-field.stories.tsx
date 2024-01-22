import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Form } from "@/components/form";
import { Label } from "@/components/label";
import { TextArea } from "@/components/text-area";
import { TextField } from "@/components/text-field";
import { TextInput } from "@/components/text-input";

const meta: Meta<typeof TextField> = {
	title: "Components/TextField",
	component: TextField,
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
			<TextField {...args}>
				<Label>Email</Label>
				<TextInput placeholder="Email" type="email" />
			</TextField>
		);
	},
};

export const Mulitline: Story = {
	args: {},
	render(args) {
		return (
			<TextField {...args}>
				<Label>Message</Label>
				<TextArea placeholder="Type your message here." />
			</TextField>
		);
	},
};

export const Validation: Story = {
	args: {
		isRequired: true,
	},
	render(args) {
		return (
			<Form className="flex flex-col items-start gap-4">
				<TextField {...args}>
					<Label>Email</Label>
					<TextInput placeholder="Email" type="email" />
					<FieldDescription>Provide your email address.</FieldDescription>
					<FieldError />
				</TextField>
				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
