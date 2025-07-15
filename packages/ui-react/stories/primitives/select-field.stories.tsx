import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { fruits, sections } from "@/src/data";
import { Dropdown } from "@/src/primitives/dropdown";
import { DropdownItem } from "@/src/primitives/dropdown-item";
import { DropdownItemDescription } from "@/src/primitives/dropdown-item-description";
import { DropdownItemLabel } from "@/src/primitives/dropdown-item-label";
import { DropdownSection } from "@/src/primitives/dropdown-section";
import { DropdownSectionHeader } from "@/src/primitives/dropdown-section-header";
import { DropdownSectionItems } from "@/src/primitives/dropdown-section-items";
import { Popover } from "@/src/primitives/popover";
import { SelectControl } from "@/src/primitives/select-control";
import { SelectField } from "@/src/primitives/select-field";
import { SelectValue } from "@/src/primitives/select-value";

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
					<Dropdown items={fruits}>
						{(item) => {
							return (
								<DropdownItem key={item.id} textValue={item.label}>
									{item.label}
								</DropdownItem>
							);
						}}
					</Dropdown>
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
					<Dropdown items={fruits}>
						{(item) => {
							return (
								<DropdownItem
									key={item.id}
									className={`inline-grid h-[unset]! gap-y-0.5 ${args.size === "sm" ? "py-1.5" : "py-2"}`} // FIXME:
									textValue={item.label}
								>
									<DropdownItemLabel>{item.label}</DropdownItemLabel>
									<DropdownItemDescription className="text-sm">
										{item.description}
									</DropdownItemDescription>
								</DropdownItem>
							);
						}}
					</Dropdown>
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
					<Dropdown items={sections}>
						{(section) => {
							return (
								<DropdownSection key={section.id}>
									<DropdownSectionHeader>{section.label}</DropdownSectionHeader>
									<DropdownSectionItems items={section.children}>
										{(item) => {
											return (
												<DropdownItem key={item.id} textValue={item.label}>
													{item.label}
												</DropdownItem>
											);
										}}
									</DropdownSectionItems>
								</DropdownSection>
							);
						}}
					</Dropdown>
				</Popover>
			</SelectField>
		);
	},
};
