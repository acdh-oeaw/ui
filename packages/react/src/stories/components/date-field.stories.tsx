import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { DateField } from "@/components/date-field";
import { DateInput, DateSegment } from "@/components/date-input";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Form } from "@/components/form";
import { Label } from "@/components/label";

const meta: Meta<typeof DateField> = {
	title: "Components/DateField",
	component: DateField,
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
			<DateField {...args}>
				<Label>Ice cream cones expiry date</Label>
				<DateInput>
					{(segment) => {
						return <DateSegment segment={segment} />;
					}}
				</DateInput>
			</DateField>
		);
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
	render(args) {
		return (
			<DateField {...args}>
				<Label>Ice cream cones expiry date</Label>
				<DateInput>
					{(segment) => {
						return <DateSegment segment={segment} />;
					}}
				</DateInput>
			</DateField>
		);
	},
};

export const Invalid: Story = {
	args: {
		isInvalid: true,
	},
	render(args) {
		return (
			<DateField {...args}>
				<Label>Ice cream cones expiry date</Label>
				<DateInput>
					{(segment) => {
						return <DateSegment segment={segment} />;
					}}
				</DateInput>
			</DateField>
		);
	},
};

export const Required: Story = {
	args: {
		isRequired: true,
	},
	render(args) {
		return (
			<DateField {...args}>
				<Label>Ice cream cones expiry date</Label>
				<DateInput>
					{(segment) => {
						return <DateSegment segment={segment} />;
					}}
				</DateInput>
			</DateField>
		);
	},
};

export const ReadOnly: Story = {
	args: {
		isReadOnly: true,
	},
	render(args) {
		return (
			<DateField {...args}>
				<Label>Ice cream cones expiry date</Label>
				<DateInput>
					{(segment) => {
						return <DateSegment segment={segment} />;
					}}
				</DateInput>
			</DateField>
		);
	},
};

export const Field: Story = {
	args: {
		isRequired: true,
		name: "iceCreamConesExpiryDate",
	},
	render(args) {
		return (
			<Form className="grid gap-y-6">
				<DateField {...args}>
					<Label>Ice cream cones expiry date</Label>
					<DateInput>
						{(segment) => {
							return <DateSegment segment={segment} />;
						}}
					</DateInput>
					<FieldDescription>Please enter how many cones you want to purchase.</FieldDescription>
					<FieldError />
				</DateField>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
