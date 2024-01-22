import type { Meta, StoryObj } from "@storybook/react";
import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
	Menu,
	MenuItem,
	MenuSection,
	MenuSeparator,
	MenuTrigger,
	SubMenuTrigger,
} from "@/components/menu";

const meta: Meta<typeof Menu> = {
	title: "Components/Menu",
	component: Menu,
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
			<MenuTrigger>
				<Button className="px-2" variant="secondary">
					<MoreHorizontalIcon aria-hidden={true} className="size-5 shrink-0" />
					<span className="sr-only">Open menu</span>
				</Button>
				<Menu {...args}>
					<MenuItem id="new">New…</MenuItem>
					<MenuItem id="open">Open...</MenuItem>
					<MenuSeparator />
					<MenuItem id="save">Save</MenuItem>
					<MenuItem id="saveAs">Save as...</MenuItem>
					<MenuSeparator />
					<MenuItem id="print">Print...</MenuItem>
				</Menu>
			</MenuTrigger>
		);
	},
};

export const DisabledItems: Story = {
	args: {
		disabledKeys: ["save"],
	},
	render(args) {
		return (
			<MenuTrigger>
				<Button className="px-2" variant="secondary">
					<MoreHorizontalIcon aria-hidden={true} className="size-5 shrink-0" />
					<span className="sr-only">Open menu</span>
				</Button>
				<Menu {...args}>
					<MenuItem id="new">New…</MenuItem>
					<MenuItem id="open">Open...</MenuItem>
					<MenuSeparator />
					<MenuItem id="save">Save</MenuItem>
					<MenuItem id="saveAs">Save as...</MenuItem>
					<MenuSeparator />
					<MenuItem id="print">Print...</MenuItem>
				</Menu>
			</MenuTrigger>
		);
	},
};

export const Sections: Story = {
	args: {},
	render(args) {
		return (
			<MenuTrigger>
				<Button className="px-2" variant="secondary">
					<MoreHorizontalIcon aria-hidden={true} className="size-5 shrink-0" />
					<span className="sr-only">Open menu</span>
				</Button>
				<Menu {...args}>
					<MenuSection title="Your Content">
						<MenuItem id="repos">Repositories</MenuItem>
						<MenuItem id="projects">Projects</MenuItem>
						<MenuItem id="organizations">Organizations</MenuItem>
						<MenuItem id="stars">Stars</MenuItem>
						<MenuItem id="sponsors">Sponsors</MenuItem>
					</MenuSection>
					<MenuSection title="Your Account">
						<MenuItem id="profile">Profile</MenuItem>
						<MenuItem id="status">Set status</MenuItem>
						<MenuItem id="sign-out">Sign out</MenuItem>
					</MenuSection>
				</Menu>
			</MenuTrigger>
		);
	},
};

export const Submenu: Story = {
	args: {},
	render(args) {
		return (
			<MenuTrigger>
				<Button className="px-2" variant="secondary">
					<MoreHorizontalIcon aria-hidden={true} className="size-5 shrink-0" />
					<span className="sr-only">Open menu</span>
				</Button>
				<Menu {...args}>
					<MenuSection title="Your Content">
						<MenuItem id="repos">Repositories</MenuItem>
						<MenuItem id="projects">Projects</MenuItem>
						<MenuItem id="organizations">Organizations</MenuItem>
						<MenuItem id="stars">Stars</MenuItem>
						<MenuItem id="sponsors">Sponsors</MenuItem>
					</MenuSection>
					<MenuSection title="Your Account">
						<SubMenuTrigger>
							<MenuItem id="profile">Profile</MenuItem>
							<Menu>
								<MenuItem id="profile-settings">Settings</MenuItem>
								<MenuItem id="profile-delete">Delete profile</MenuItem>
							</Menu>
						</SubMenuTrigger>
						<MenuItem id="status">Set status</MenuItem>
						<MenuItem id="sign-out">Sign out</MenuItem>
					</MenuSection>
				</Menu>
			</MenuTrigger>
		);
	},
};
