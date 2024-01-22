import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Label } from "@/components/label";
import {
	Select,
	SelectListBox,
	SelectListBoxItem,
	SelectPopover,
	SelectTrigger,
	SelectValue,
} from "@/components/select";

const meta: Meta<typeof Select> = {
	title: "Components/Select",
	component: Select,
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
			<Select {...args}>
				<Label>Ice cream</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListBox>
						<SelectListBoxItem id="chocolate" textValue="Chocolate">
							Chocolate
						</SelectListBoxItem>
						<SelectListBoxItem id="pistachio" textValue="Pistachio">
							Pistachio
						</SelectListBoxItem>
						<SelectListBoxItem id="hazelnut" textValue="Hazelnut">
							Hazelnut
						</SelectListBoxItem>
					</SelectListBox>
				</SelectPopover>
			</Select>
		);
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
	render(args) {
		return (
			<Select {...args}>
				<Label>Ice cream</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListBox>
						<SelectListBoxItem id="chocolate" textValue="Chocolate">
							Chocolate
						</SelectListBoxItem>
						<SelectListBoxItem id="pistachio" textValue="Pistachio">
							Pistachio
						</SelectListBoxItem>
						<SelectListBoxItem id="hazelnut" textValue="Hazelnut">
							Hazelnut
						</SelectListBoxItem>
					</SelectListBox>
				</SelectPopover>
			</Select>
		);
	},
};

export const Invalid: Story = {
	args: {
		isInvalid: true,
	},
	render(args) {
		return (
			<Select {...args}>
				<Label>Ice cream</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListBox>
						<SelectListBoxItem id="chocolate" textValue="Chocolate">
							Chocolate
						</SelectListBoxItem>
						<SelectListBoxItem id="pistachio" textValue="Pistachio">
							Pistachio
						</SelectListBoxItem>
						<SelectListBoxItem id="hazelnut" textValue="Hazelnut">
							Hazelnut
						</SelectListBoxItem>
					</SelectListBox>
				</SelectPopover>
			</Select>
		);
	},
};

export const Required: Story = {
	args: {
		isRequired: true,
	},
	render(args) {
		return (
			<Select {...args}>
				<Label>Ice cream</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListBox>
						<SelectListBoxItem id="chocolate" textValue="Chocolate">
							Chocolate
						</SelectListBoxItem>
						<SelectListBoxItem id="pistachio" textValue="Pistachio">
							Pistachio
						</SelectListBoxItem>
						<SelectListBoxItem id="hazelnut" textValue="Hazelnut">
							Hazelnut
						</SelectListBoxItem>
					</SelectListBox>
				</SelectPopover>
			</Select>
		);
	},
};

export const ReadOnly: Story = {
	args: {
		isReadOnly: true,
	},
	render(args) {
		return (
			<Select {...args}>
				<Label>Ice cream</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListBox>
						<SelectListBoxItem id="chocolate" textValue="Chocolate">
							Chocolate
						</SelectListBoxItem>
						<SelectListBoxItem id="pistachio" textValue="Pistachio">
							Pistachio
						</SelectListBoxItem>
						<SelectListBoxItem id="hazelnut" textValue="Hazelnut">
							Hazelnut
						</SelectListBoxItem>
					</SelectListBox>
				</SelectPopover>
			</Select>
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
				<Select {...args}>
					<Label>Ice cream</Label>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectPopover>
						<SelectListBox>
							<SelectListBoxItem id="chocolate" textValue="Chocolate">
								Chocolate
							</SelectListBoxItem>
							<SelectListBoxItem id="pistachio" textValue="Pistachio">
								Pistachio
							</SelectListBoxItem>
							<SelectListBoxItem id="hazelnut" textValue="Hazelnut">
								Hazelnut
							</SelectListBoxItem>
						</SelectListBox>
					</SelectPopover>
				</Select>

				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
