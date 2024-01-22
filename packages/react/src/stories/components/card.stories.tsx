import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
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
			<Card {...args}>
				<CardHeader>
					<CardTitle>Ice cream</CardTitle>
					<CardDescription>Please select your favourite flavor.</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button>Thanks</Button>
				</CardFooter>
			</Card>
		);
	},
};

export const WithImage: Story = {
	args: {},
	render(args) {
		return (
			<Card {...args}>
				<div className="relative -mx-6 -mt-6 aspect-video overflow-auto rounded-t-md border-b">
					<img
						alt=""
						className="absolute inset-0 size-full object-cover"
						src="https://source.unsplash.com/random"
					/>
				</div>
				<CardHeader>
					<CardTitle>Ice cream</CardTitle>
					<CardDescription>Please select your favourite flavor.</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button>Thanks</Button>
				</CardFooter>
			</Card>
		);
	},
};
