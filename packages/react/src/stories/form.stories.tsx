import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { DateField } from "@/components/date-field";
import { Form } from "@/components/form";
import { TextField } from "@/components/text-field";

const meta: Meta<typeof Form> = {
	title: "Components/Form",
	component: Form,
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
			<Form {...args}>
				<TextField isRequired label="Email" name="email" type="email" />
				<DateField isRequired label="Birth date" />
				<div className="flex gap-2">
					<Button type="submit">Submit</Button>
					<Button type="reset" variant="secondary">
						Reset
					</Button>
				</div>
			</Form>
		);
	},
};
