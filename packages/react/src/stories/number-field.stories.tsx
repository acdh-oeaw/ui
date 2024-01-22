import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
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
				<Label>Cookies</Label>
				<NumberInput placeholder="Cookies" />
			</NumberField>
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
				<NumberField {...args}>
					<Label>Cookies</Label>
					<NumberInput placeholder="Cookies" />
				</NumberField>
				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
