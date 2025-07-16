import type { Meta, StoryObj } from "@storybook/react-vite";
import { StarIcon } from "lucide-react";

import {
	Badge,
	Icon,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@/src";
import { fruits } from "@/src/data";

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
			<Table {...args} className="max-w-full outline-none">
				<TableHeader>
					<TableColumn isRowHeader={true}>Label</TableColumn>
					<TableColumn>Description</TableColumn>
					<TableColumn>Rating</TableColumn>
					<TableColumn>Tags</TableColumn>
					<TableColumn>Origin</TableColumn>
				</TableHeader>
				<TableBody>
					{fruits.map((row) => {
						return (
							<TableRow key={row.id} variant="striped">
								<TableCell>{row.label}</TableCell>
								<TableCell>{row.description}</TableCell>
								<TableCell>
									<span className="inline-flex gap-x-0.5 align-text-top">
										{[...Array(row.rating).keys()].map((index) => {
											return (
												<Icon key={index}>
													<StarIcon className="text-fill-yellow" />
												</Icon>
											);
										})}
									</span>
								</TableCell>
								<TableCell>
									<span className="inline-flex gap-x-1">
										{row.tags.map((tag) => {
											return (
												<Badge key={tag} size="sm">
													{tag}
												</Badge>
											);
										})}
									</span>
								</TableCell>
								<TableCell>{row.origin}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		);
	},
};
