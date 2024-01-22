import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { CheckBox } from "@/components/check-box";
import { Form } from "@/components/form";

const meta: Meta<typeof CheckBox> = {
	title: "Components/CheckBox",
	component: CheckBox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		value: "chocolate",
	},
	render(args) {
		return <CheckBox {...args}></CheckBox>;
	},
};

export const Indeterminate: Story = {
	args: {
		value: "chocolate",
		isIndeterminate: true,
	},
	render(args) {
		return <CheckBox {...args}></CheckBox>;
	},
};

export const Disabled: Story = {
	args: {
		value: "chocolate",
		isDisabled: true,
	},
	render(args) {
		return <CheckBox {...args}></CheckBox>;
	},
};

export const Invalid: Story = {
	args: {
		value: "chocolate",
		isInvalid: true,
	},
	render(args) {
		return <CheckBox {...args}></CheckBox>;
	},
};

export const Required: Story = {
	args: {
		value: "chocolate",
		isRequired: true,
	},
	render(args) {
		return <CheckBox {...args}></CheckBox>;
	},
};

export const ReadOnly: Story = {
	args: {
		value: "chocolate",
		isReadOnly: true,
	},
	render(args) {
		return <CheckBox {...args}></CheckBox>;
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
				<CheckBox {...args}></CheckBox>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
