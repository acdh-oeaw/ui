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
		isDisabled: false,
		isRequired: false,
	},
	render(args) {
		return (
			<RadioGroup {...args}>
				<Label>Favorite sport</Label>
				<Radio value="soccer">Soccer</Radio>
				<Radio value="baseball">Baseball</Radio>
				<Radio value="basketball">Basketball</Radio>
			</RadioGroup>
		);
	},
};

export const Validation: Story = {
	args: {
		isDisabled: false,
		isRequired: true,
	},
	render(args) {
		return (
			<Form className="flex flex-col items-start gap-4">
				<RadioGroup {...args}>
					<Label>Favorite sport</Label>
					<Radio value="soccer">Soccer</Radio>
					<Radio value="baseball">Baseball</Radio>
					<Radio value="basketball">Basketball</Radio>
				</RadioGroup>
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
