import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

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

const fruits = [
	{ id: "apple", label: "Apple", description: "Red or green fruit" },
	{ id: "apricot", label: "Apricot", description: "Small orange fruit" },
	{ id: "banana", label: "Banana", description: "Long yellow fruit" },
	{ id: "blackberry", label: "Blackberry", description: "Dark berry" },
	{ id: "blueberry", label: "Blueberry", description: "Blue berry" },
	{ id: "cantaloupe", label: "Cantaloupe", description: "Orange melon" },
	{ id: "cherry", label: "Cherry", description: "Small red fruit" },
	{ id: "dragonfruit", label: "Dragonfruit", description: "Exotic pink fruit" },
	{ id: "fig", label: "Fig", description: "Sweet purple fruit" },
	{ id: "grape", label: "Grape", description: "Small round fruit" },
	{ id: "guava", label: "Guava", description: "Tropical fruit" },
	{ id: "kiwi", label: "Kiwi", description: "Brown fuzzy fruit" },
	{ id: "lemon", label: "Lemon", description: "Sour yellow fruit" },
	{ id: "lime", label: "Lime", description: "Green citrus fruit" },
	{ id: "mango", label: "Mango", description: "Sweet tropical fruit" },
	{ id: "papaya", label: "Papaya", description: "Orange tropical fruit" },
	{ id: "passionfruit", label: "Passionfruit", description: "Tart tropical fruit" },
	{ id: "peach", label: "Peach", description: "Juicy stone fruit" },
	{ id: "pear", label: "Pear", description: "Green or yellow fruit" },
	{ id: "pineapple", label: "Pineapple", description: "Spiky tropical fruit" },
	{ id: "plum", label: "Plum", description: "Purple stone fruit" },
	{ id: "pomegranate", label: "Pomegranate", description: "Red seeded fruit" },
	{ id: "raspberry", label: "Raspberry", description: "Red berry" },
	{ id: "strawberry", label: "Strawberry", description: "Sweet red berry" },
	{ id: "watermelon", label: "Watermelon", description: "Large green melon" },
];

const vegetables = [
	{ id: "artichoke", label: "Artichoke" },
	{ id: "arugula", label: "Arugula" },
	{ id: "asparagus", label: "Asparagus" },
	{ id: "beet", label: "Beet" },
	{ id: "broccoli", label: "Broccoli" },
	{ id: "brussels_sprout", label: "Brussels Sprout" },
	{ id: "cabbage", label: "Cabbage" },
	{ id: "carrot", label: "Carrot" },
	{ id: "cauliflower", label: "Cauliflower" },
	{ id: "celery", label: "Celery" },
	{ id: "chard", label: "Chard" },
	{ id: "collard_greens", label: "Collard Greens" },
	{ id: "corn", label: "Corn" },
	{ id: "cucumber", label: "Cucumber" },
	{ id: "eggplant", label: "Eggplant" },
	{ id: "fennel", label: "Fennel" },
	{ id: "garlic", label: "Garlic" },
	{ id: "kale", label: "Kale" },
	{ id: "leek", label: "Leek" },
	{ id: "lettuce", label: "Lettuce" },
	{ id: "okra", label: "Okra" },
	{ id: "onion", label: "Onion" },
	{ id: "parsnip", label: "Parsnip" },
	{ id: "pea", label: "Pea" },
	{ id: "pepper", label: "Pepper" },
];

const sections = [
	{ id: "fruits", label: "Fruits", children: fruits },
	{ id: "vegetables", label: "Vegetables", children: vegetables },
];

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
