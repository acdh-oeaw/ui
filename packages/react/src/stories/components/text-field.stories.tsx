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
				<Label>Ice cream</Label>
				<TextInput />
			</TextField>
		);
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
	render(args) {
		return (
			<TextField {...args}>
				<Label>Ice cream</Label>
				<TextInput />
			</TextField>
		);
	},
};

export const Invalid: Story = {
	args: {
		isInvalid: true,
	},
	render(args) {
		return (
			<TextField {...args}>
				<Label>Ice cream</Label>
				<TextInput />
			</TextField>
		);
	},
};

export const Required: Story = {
	args: {
		isRequired: true,
	},
	render(args) {
		return (
			<TextField {...args}>
				<Label>Ice cream</Label>
				<TextInput />
			</TextField>
		);
	},
};

export const ReadOnly: Story = {
	args: {
		isReadOnly: true,
	},
	render(args) {
		return (
			<TextField {...args}>
				<Label>Ice cream</Label>
				<TextInput />
			</TextField>
		);
	},
};

export const Multiline: Story = {
	args: {},
	render(args) {
		return (
			<TextField {...args}>
				<Label>Ice cream</Label>
				<TextArea />
			</TextField>
		);
	},
};

export const Field: Story = {
	args: {
		isRequired: true,
		name: "iceCream",
	},
	render(args) {
		return (
			<Form className="grid gap-y-6">
				<TextField {...args}>
					<Label>Ice cream</Label>
					<TextInput />
					<FieldDescription>Please enter your favourite flavor.</FieldDescription>
					<FieldError />
				</TextField>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
