import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Label } from "@/components/label";
import { Radio, RadioGroup } from "@/components/radio-group";

const meta: Meta<typeof RadioGroup> = {
	title: "Components/RadioGroup",
	component: RadioGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		defaultValue: "chocolate",
	},
	render(args) {
		return (
			<RadioGroup {...args}>
				<Label>Ice cream</Label>
				<Radio value="chocolate">Chocolate</Radio>
				<Radio value="pistachio">Pistachio</Radio>
				<Radio value="hazelnut">Hazelnut</Radio>
			</RadioGroup>
		);
	},
};

export const Disabled: Story = {
	args: {
		defaultValue: "chocolate",
		isDisabled: true,
	},
	render(args) {
		return (
			<RadioGroup {...args}>
				<Label>Ice cream</Label>
				<Radio value="chocolate">Chocolate</Radio>
				<Radio value="pistachio">Pistachio</Radio>
				<Radio value="hazelnut">Hazelnut</Radio>
			</RadioGroup>
		);
	},
};

export const Invalid: Story = {
	args: {
		defaultValue: "chocolate",
		isInvalid: true,
	},
	render(args) {
		return (
			<RadioGroup {...args}>
				<Label>Ice cream</Label>
				<Radio value="chocolate">Chocolate</Radio>
				<Radio value="pistachio">Pistachio</Radio>
				<Radio value="hazelnut">Hazelnut</Radio>
			</RadioGroup>
		);
	},
};

export const Required: Story = {
	args: {
		defaultValue: "chocolate",
		isRequired: true,
	},
	render(args) {
		return (
			<RadioGroup {...args}>
				<Label>Ice cream</Label>
				<Radio value="chocolate">Chocolate</Radio>
				<Radio value="pistachio">Pistachio</Radio>
				<Radio value="hazelnut">Hazelnut</Radio>
			</RadioGroup>
		);
	},
};

export const ReadOnly: Story = {
	args: {
		defaultValue: "chocolate",
		isReadOnly: true,
	},
	render(args) {
		return (
			<RadioGroup {...args}>
				<Label>Ice cream</Label>
				<Radio value="chocolate">Chocolate</Radio>
				<Radio value="pistachio">Pistachio</Radio>
				<Radio value="hazelnut">Hazelnut</Radio>
			</RadioGroup>
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
				<RadioGroup {...args}>
					<Label>Ice cream</Label>
					<Radio value="chocolate">Chocolate</Radio>
					<Radio value="pistachio">Pistachio</Radio>
					<Radio value="hazelnut">Hazelnut</Radio>
				</RadioGroup>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
