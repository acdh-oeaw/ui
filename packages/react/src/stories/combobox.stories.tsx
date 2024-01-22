import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Combobox, ComboboxItem, ComboboxSection } from "@/components/combobox";
import { Form } from "@/components/form";

const meta: Meta<typeof Combobox> = {
	title: "Components/Combobox",
	component: Combobox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: "Ice cream flavor",
	},
	render(args) {
		return (
			<Combobox {...args}>
				<ComboboxItem id="chocolate">Chocolate</ComboboxItem>
				<ComboboxItem id="mint">Mint</ComboboxItem>
				<ComboboxItem id="strawberry">Strawberry</ComboboxItem>
				<ComboboxItem id="vanilla">Vanilla</ComboboxItem>
			</Combobox>
		);
	},
};

export const DisabledKeys: Story = {
	args: {
		label: "Ice cream flavor",
		disabledKeys: ["mint"],
	},
	render(args) {
		return (
			<Combobox {...args}>
				<ComboboxItem id="chocolate">Chocolate</ComboboxItem>
				<ComboboxItem id="mint">Mint</ComboboxItem>
				<ComboboxItem id="strawberry">Strawberry</ComboboxItem>
				<ComboboxItem id="vanilla">Vanilla</ComboboxItem>
			</Combobox>
		);
	},
};

export const Sections: Story = {
	args: {
		label: "Preferred fruit or vegetable",
	},
	render(args) {
		return (
			<Combobox {...args}>
				<ComboboxSection title="Fruit">
					<ComboboxItem id="Apple">Apple</ComboboxItem>
					<ComboboxItem id="Banana">Banana</ComboboxItem>
					<ComboboxItem id="Orange">Orange</ComboboxItem>
					<ComboboxItem id="Honeydew">Honeydew</ComboboxItem>
					<ComboboxItem id="Grapes">Grapes</ComboboxItem>
					<ComboboxItem id="Watermelon">Watermelon</ComboboxItem>
					<ComboboxItem id="Cantaloupe">Cantaloupe</ComboboxItem>
					<ComboboxItem id="Pear">Pear</ComboboxItem>
				</ComboboxSection>
				<ComboboxSection title="Vegetable">
					<ComboboxItem id="Cabbage">Cabbage</ComboboxItem>
					<ComboboxItem id="Broccoli">Broccoli</ComboboxItem>
					<ComboboxItem id="Carrots">Carrots</ComboboxItem>
					<ComboboxItem id="Lettuce">Lettuce</ComboboxItem>
					<ComboboxItem id="Spinach">Spinach</ComboboxItem>
					<ComboboxItem id="Bok Choy">Bok Choy</ComboboxItem>
					<ComboboxItem id="Cauliflower">Cauliflower</ComboboxItem>
					<ComboboxItem id="Potatoes">Potatoes</ComboboxItem>
				</ComboboxSection>
			</Combobox>
		);
	},
};

export const Validation: Story = {
	args: {
		isRequired: true,
		label: "Ice cream flavor",
	},
	render(args) {
		return (
			<Form className="flex flex-col items-start gap-2">
				<Combobox {...args}>
					<ComboboxItem id="chocolate">Chocolate</ComboboxItem>
					<ComboboxItem id="mint">Mint</ComboboxItem>
					<ComboboxItem id="strawberry">Strawberry</ComboboxItem>
					<ComboboxItem id="vanilla">Vanilla</ComboboxItem>
				</Combobox>
				<Button type="submit" variant="secondary">
					Submit
				</Button>
			</Form>
		);
	},
};
