import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { CheckBox, CheckBoxGroup } from "@/components/check-box";
import { Form } from "@/components/form";
import { Label } from "@/components/label";

const meta: Meta<typeof CheckBoxGroup> = {
	title: "Components/CheckBoxGroup",
	component: CheckBoxGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		defaultValue: ["chocolate"],
	},
	render(args) {
		return (
			<CheckBoxGroup {...args}>
				<Label>Ice cream</Label>
				<CheckBox value="chocolate">Chocolate</CheckBox>
				<CheckBox value="pistachio">Pistachio</CheckBox>
				<CheckBox value="hazelnut">Hazelnut</CheckBox>
			</CheckBoxGroup>
		);
	},
};

export const Disabled: Story = {
	args: {
		defaultValue: ["chocolate"],
		isDisabled: true,
	},
	render(args) {
		return (
			<CheckBoxGroup {...args}>
				<Label>Ice cream</Label>
				<CheckBox value="chocolate">Chocolate</CheckBox>
				<CheckBox value="pistachio">Pistachio</CheckBox>
				<CheckBox value="hazelnut">Hazelnut</CheckBox>
			</CheckBoxGroup>
		);
	},
};

export const Invalid: Story = {
	args: {
		defaultValue: ["chocolate"],
		isInvalid: true,
	},
	render(args) {
		return (
			<CheckBoxGroup {...args}>
				<Label>Ice cream</Label>
				<CheckBox value="chocolate">Chocolate</CheckBox>
				<CheckBox value="pistachio">Pistachio</CheckBox>
				<CheckBox value="hazelnut">Hazelnut</CheckBox>
			</CheckBoxGroup>
		);
	},
};

export const Required: Story = {
	args: {
		defaultValue: ["chocolate"],
		isRequired: true,
	},
	render(args) {
		return (
			<CheckBoxGroup {...args}>
				<Label>Ice cream</Label>
				<CheckBox value="chocolate">Chocolate</CheckBox>
				<CheckBox value="pistachio">Pistachio</CheckBox>
				<CheckBox value="hazelnut">Hazelnut</CheckBox>
			</CheckBoxGroup>
		);
	},
};

export const ReadOnly: Story = {
	args: {
		defaultValue: ["chocolate"],
		isReadOnly: true,
	},
	render(args) {
		return (
			<CheckBoxGroup {...args}>
				<Label>Ice cream</Label>
				<CheckBox value="chocolate">Chocolate</CheckBox>
				<CheckBox value="pistachio">Pistachio</CheckBox>
				<CheckBox value="hazelnut">Hazelnut</CheckBox>
			</CheckBoxGroup>
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
				<CheckBoxGroup {...args}>
					<Label>Ice cream</Label>
					<CheckBox value="chocolate">Chocolate</CheckBox>
					<CheckBox value="pistachio">Pistachio</CheckBox>
					<CheckBox value="hazelnut">Hazelnut</CheckBox>
				</CheckBoxGroup>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
