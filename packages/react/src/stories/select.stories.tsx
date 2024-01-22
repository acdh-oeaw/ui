import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import {
	Select,
	SelectItem,
	SelectListbox,
	SelectPopover,
	SelectSection,
	SelectTrigger,
	SelectValue,
} from "@/components/select";
import { Label } from "@/index";

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
				<Label>Ice cream flavor</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListbox>
						<SelectItem id="chocolate">Chocolate</SelectItem>
						<SelectItem id="mint">Mint</SelectItem>
						<SelectItem id="strawberry">Strawberry</SelectItem>
						<SelectItem id="vanilla">Vanilla</SelectItem>
					</SelectListbox>
				</SelectPopover>
			</Select>
		);
	},
};

export const DisabledItems: Story = {
	args: {
		disabledKeys: ["mint"],
	},
	render(args) {
		return (
			<Select {...args}>
				<Label>Ice cream flavor</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListbox>
						<SelectItem id="chocolate">Chocolate</SelectItem>
						<SelectItem id="mint">Mint</SelectItem>
						<SelectItem id="strawberry">Strawberry</SelectItem>
						<SelectItem id="vanilla">Vanilla</SelectItem>
					</SelectListbox>
				</SelectPopover>
			</Select>
		);
	},
};

export const Sections: Story = {
	args: {},
	render(args) {
		return (
			<Select {...args}>
				<Label>Preferred fruit or vegetable</Label>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPopover>
					<SelectListbox>
						<SelectSection title="Fruit">
							<SelectItem id="Apple">Apple</SelectItem>
							<SelectItem id="Banana">Banana</SelectItem>
							<SelectItem id="Orange">Orange</SelectItem>
							<SelectItem id="Honeydew">Honeydew</SelectItem>
							<SelectItem id="Grapes">Grapes</SelectItem>
							<SelectItem id="Watermelon">Watermelon</SelectItem>
							<SelectItem id="Cantaloupe">Cantaloupe</SelectItem>
							<SelectItem id="Pear">Pear</SelectItem>
						</SelectSection>
						<SelectSection title="Vegetable">
							<SelectItem id="Cabbage">Cabbage</SelectItem>
							<SelectItem id="Broccoli">Broccoli</SelectItem>
							<SelectItem id="Carrots">Carrots</SelectItem>
							<SelectItem id="Lettuce">Lettuce</SelectItem>
							<SelectItem id="Spinach">Spinach</SelectItem>
							<SelectItem id="Bok Choy">Bok Choy</SelectItem>
							<SelectItem id="Cauliflower">Cauliflower</SelectItem>
							<SelectItem id="Potatoes">Potatoes</SelectItem>
						</SelectSection>
					</SelectListbox>
				</SelectPopover>
			</Select>
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
				<Select {...args}>
					<Label>Ice cream flavor</Label>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectPopover>
						<SelectListbox>
							<SelectItem id="chocolate">Chocolate</SelectItem>
							<SelectItem id="mint">Mint</SelectItem>
							<SelectItem id="strawberry">Strawberry</SelectItem>
							<SelectItem id="vanilla">Vanilla</SelectItem>
						</SelectListbox>
					</SelectPopover>
				</Select>
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
