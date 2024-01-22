import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Checkbox, CheckboxGroup } from "@/components/checkbox";
import { Form } from "@/components/form";

const meta: Meta<typeof CheckboxGroup> = {
	title: "Components/CheckboxGroup",
	component: CheckboxGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Cities",
		isDisabled: false,
		isRequired: false,
		description: "",
	},
	render(args) {
		return (
			<CheckboxGroup {...args}>
				<Checkbox value="sf">San Francisco</Checkbox>
				<Checkbox value="ny">New York</Checkbox>
				<Checkbox value="sydney">Sydney</Checkbox>
				<Checkbox value="london">London</Checkbox>
				<Checkbox value="tokyo">Tokyo</Checkbox>
			</CheckboxGroup>
		);
	},
};

export const Validation: Story = {
	args: {
		label: "Cities",
		isDisabled: false,
		isRequired: true,
		description: "",
	},
	render(args) {
		return (
			<Form className="flex flex-col items-start gap-2">
				<CheckboxGroup {...args}>
					<Checkbox value="sf">San Francisco</Checkbox>
					<Checkbox value="ny">New York</Checkbox>
					<Checkbox value="sydney">Sydney</Checkbox>
					<Checkbox value="london">London</Checkbox>
					<Checkbox value="tokyo">Tokyo</Checkbox>
				</CheckboxGroup>
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
