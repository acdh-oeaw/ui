import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import {
	ListBox,
	ListBoxItem,
	ListBoxItemDescription,
	ListBoxItemLabel,
	ListBoxSection,
	ListBoxSectionHeader,
	ListBoxSectionItems,
	Popover,
	SelectControl,
	SelectField,
	SelectValue,
} from "@/src";
import { fruits, sections } from "@/src/data";

const meta = {
	title: "Primitives/SelectField",
	component: SelectField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {
		onSelectionChange: fn(),
	},
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		"aria-label": "Fruits",
		placeholder: "Select a fruit",
	},
	render(args) {
		return (
			<SelectField {...args}>
				<SelectControl>
					<SelectValue />
				</SelectControl>
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
			</SelectField>
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

export const ItemDescriptions: Story = {
	args: {
		...Default.args,
	},
	render(args) {
		return (
			<SelectField {...args}>
				<SelectControl>
					<SelectValue>
						{(value) => {
							return value.selectedText; // FIXME:
						}}
					</SelectValue>
				</SelectControl>
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
			</SelectField>
		);
	},
};

export const Sections: Story = {
	args: {
		...Default.args,
	},
	render(args) {
		return (
			<SelectField {...args}>
				<SelectControl>
					<SelectValue />
				</SelectControl>
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
			</SelectField>
		);
	},
};
