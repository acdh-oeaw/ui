import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { fruits, sections } from "@/src/data";
import { ComboBoxControl } from "@/src/primitives/combo-box-control";
import { ComboBoxField } from "@/src/primitives/combo-box-field";
import { ComboBoxInput } from "@/src/primitives/combo-box-input";
import { Dropdown } from "@/src/primitives/dropdown";
import { DropdownItem } from "@/src/primitives/dropdown-item";
import { DropdownItemDescription } from "@/src/primitives/dropdown-item-description";
import { DropdownItemLabel } from "@/src/primitives/dropdown-item-label";
import { DropdownSection } from "@/src/primitives/dropdown-section";
import { DropdownSectionHeader } from "@/src/primitives/dropdown-section-header";
import { DropdownSectionItems } from "@/src/primitives/dropdown-section-items";
import { Popover } from "@/src/primitives/popover";

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
			</ComboBoxField>
		);
	},
};
