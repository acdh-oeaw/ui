import type { Meta, StoryObj } from "@storybook/react";

import {
	Breadcrumb,
	BreadcrumbLink,
	Breadcrumbs,
	BreadcrumbSeparator,
} from "@/components/breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
	title: "Components/Breadcrumbs",
	component: Breadcrumbs,
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
			<Breadcrumbs {...args}>
				<Breadcrumb>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
					<BreadcrumbSeparator />
				</Breadcrumb>
				<Breadcrumb>
					<BreadcrumbLink href="/react-aria">React Aria</BreadcrumbLink>
					<BreadcrumbSeparator />
				</Breadcrumb>
				<Breadcrumb>
					<BreadcrumbLink>Breadcrumbs</BreadcrumbLink>
				</Breadcrumb>
			</Breadcrumbs>
		);
	},
};
