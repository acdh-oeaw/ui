import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Form } from "@/components/form";
import { Label } from "@/components/label";
import { NumberField } from "@/components/number-field";
import { NumberInput } from "@/components/number-input";

const meta: Meta<typeof NumberField> = {
	title: "Components/NumberField",
	component: NumberField,
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
			<NumberField {...args}>
				<Label>Ice cream cones</Label>
				<NumberInput />
			</NumberField>
		);
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
	render(args) {
		return (
			<NumberField {...args}>
				<Label>Ice cream cones</Label>
				<NumberInput />
			</NumberField>
		);
	},
};

export const Invalid: Story = {
	args: {
		isInvalid: true,
	},
	render(args) {
		return (
			<NumberField {...args}>
				<Label>Ice cream cones</Label>
				<NumberInput />
			</NumberField>
		);
	},
};

export const Required: Story = {
	args: {
		isRequired: true,
	},
	render(args) {
		return (
			<NumberField {...args}>
				<Label>Ice cream cones</Label>
				<NumberInput />
			</NumberField>
		);
	},
};

export const ReadOnly: Story = {
	args: {
		isReadOnly: true,
	},
	render(args) {
		return (
			<NumberField {...args}>
				<Label>Ice cream cones</Label>
				<NumberInput />
			</NumberField>
		);
	},
};

export const Field: Story = {
	args: {
		isRequired: true,
		name: "iceCreamCones",
	},
	render(args) {
		return (
			<Form className="grid gap-y-6">
				<NumberField {...args}>
					<Label>Ice cream cones</Label>
					<NumberInput />
					<FieldDescription>Please enter how many cones you want to purchase.</FieldDescription>
					<FieldError />
				</NumberField>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
