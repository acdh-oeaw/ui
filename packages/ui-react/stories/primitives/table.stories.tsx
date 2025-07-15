import { cn } from "@acdh-oeaw/style-variants";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { fruits } from "@/src/data";
import { Table } from "@/src/primitives/table";
import { TableBody } from "@/src/primitives/table-body";
import { TableCell } from "@/src/primitives/table-cell";
import { TableColumn } from "@/src/primitives/table-column";
import { TableHeader } from "@/src/primitives/table-header";
import { TableRow } from "@/src/primitives/table-row";

const meta = {
	title: "Primitives/Table",
	component: Table,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		"aria-label": "Fruits",
	},
	render(args) {
		return (
			<Table {...args} className="max-w-full rounded-weak outline-none">
				<TableHeader>
					<TableColumn
						className="border-y border-stroke-weak px-4 py-1.5 text-left text-sm font-strong text-text-strong text-text-weak"
						isRowHeader={true}
					>
						Label
					</TableColumn>
					<TableColumn className="border-y border-stroke-weak px-4 py-1.5 text-left text-sm font-strong text-text-strong text-text-weak">
						Description
					</TableColumn>
				</TableHeader>
				<TableBody>
					{fruits.map((row) => {
						return (
							<TableRow
								key={row.id}
								className={cn([
									"relative isolate cursor-default rounded-weak outline-none odd:bg-fill-weaker",
								])}
							>
								<TableCell className="border-b border-stroke-weak px-4 py-2 text-left text-base text-text-weak">
									{row.label}
								</TableCell>
								<TableCell className="border-b border-stroke-weak px-4 py-2 text-left text-base text-text-weak">
									{row.description}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		);
	},
};
