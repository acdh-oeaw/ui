import type { Meta, StoryObj } from "@storybook/react-vite";
import { DollarSignIcon } from "lucide-react";
import { fn } from "storybook/test";

import {
	ComboBoxControl,
	ComboBoxField,
	ComboBoxInput,
	Icon,
	ListBox,
	ListBoxItem,
	ListBoxItemDescription,
	ListBoxItemLabel,
	ListBoxSection,
	ListBoxSectionHeader,
	ListBoxSectionItems,
	Popover,
} from "@/src";
import { fruits, sections } from "@/src/data";
import { ClearButton } from "@/src/primitives/clear-button";

const meta = {
	title: "Primitives/ComboBoxField",
	component: ComboBoxField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {
		onSelectionChange: fn(),
	},
} satisfies Meta<typeof ComboBoxField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		"aria-label": "Fruits",
		// placeholder: "Select a fruit",
	},
	render(args) {
		return (
			<ComboBoxField {...args}>
				<ComboBoxControl>
					<ComboBoxInput />
				</ComboBoxControl>
				<Popover>
					<ListBox items={fruits}>
						{(item) => {
							return (
								<ListBoxItem key={item.id} textValue={item.label}>
									{item.label}
								</ListBoxItem>
							);
						}}
					</ListBox>
				</Popover>
			</ComboBoxField>
		);
	},
};

export const Small: Story = {
	args: {
		...Default.args,
		size: "sm",
	},
	render: Default.render,
};

export const Medium: Story = {
	args: {
		...Default.args,
		size: "md",
	},
	render: Default.render,
};

export const Large: Story = {
	args: {
		...Default.args,
		size: "lg",
	},
	render: Default.render,
};

export const Disabled: Story = {
	args: {
		...Default.args,
		isDisabled: true,
	},
	render: Default.render,
};

export const DisabledItems: Story = {
	args: {
		...Default.args,
		disabledKeys: ["peach"],
	},
	render: Default.render,
};

export const WithIcon: Story = {
	args: {
		...Default.args,
	},
	render(args) {
		return (
			<ComboBoxField {...args}>
				<ComboBoxControl>
					<Icon className="mx-2">
						<DollarSignIcon />
					</Icon>
					<ComboBoxInput />
				</ComboBoxControl>
				<Popover>
					<ListBox items={fruits}>
						{(item) => {
							return (
								<ListBoxItem key={item.id} textValue={item.label}>
									{item.label}
								</ListBoxItem>
							);
						}}
					</ListBox>
				</Popover>
			</ComboBoxField>
		);
	},
};

export const WithClearButton: Story = {
	args: {
		...Default.args,
	},
	render(args) {
		return (
			<ComboBoxField {...args}>
				<ComboBoxControl>
					<ComboBoxInput />
					<ClearButton />
				</ComboBoxControl>
				<Popover>
					<ListBox items={fruits}>
						{(item) => {
							return (
								<ListBoxItem key={item.id} textValue={item.label}>
									{item.label}
								</ListBoxItem>
							);
						}}
					</ListBox>
				</Popover>
			</ComboBoxField>
		);
	},
};

export const ItemDescriptions: Story = {
	args: {
		...Default.args,
	},
	render(args) {
		return (
			<ComboBoxField {...args}>
				<ComboBoxControl>
					<ComboBoxInput />
				</ComboBoxControl>
				<Popover>
					<ListBox items={fruits}>
						{(item) => {
							return (
								<ListBoxItem
									key={item.id}
									className={`inline-grid h-[unset]! gap-y-0.5 ${args.size === "sm" ? "py-1.5" : "py-2"}`} // FIXME:
									textValue={item.label}
								>
									<ListBoxItemLabel>{item.label}</ListBoxItemLabel>
									<ListBoxItemDescription className="text-sm">
										{item.description}
									</ListBoxItemDescription>
								</ListBoxItem>
							);
						}}
					</ListBox>
				</Popover>
			</ComboBoxField>
		);
	},
};

export const Sections: Story = {
	args: {
		...Default.args,
	},
	render(args) {
		return (
			<ComboBoxField {...args}>
				<ComboBoxControl>
					<ComboBoxInput />
				</ComboBoxControl>
				<Popover>
					<ListBox items={sections}>
						{(section) => {
							return (
								<ListBoxSection key={section.id}>
									<ListBoxSectionHeader>{section.label}</ListBoxSectionHeader>
									<ListBoxSectionItems items={section.children}>
										{(item) => {
											return (
												<ListBoxItem key={item.id} textValue={item.label}>
													{item.label}
												</ListBoxItem>
											);
										}}
									</ListBoxSectionItems>
								</ListBoxSection>
							);
						}}
					</ListBox>
				</Popover>
			</ComboBoxField>
		);
	},
};
