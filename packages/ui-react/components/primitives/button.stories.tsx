import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { fn } from "storybook/test";

import { Button } from "@/components/primitives/button";

type ButtonProps = ComponentProps<typeof Button>;

const meta = {
	title: "Primitives/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "select" },
			description: "Size",
			options: ["xs", "sm", "md", "lg", "xl", "2xl"] as Array<ButtonProps["size"]>,
			table: { defaultValue: { summary: "md" as ButtonProps["size"] } },
		},
		tone: {
			control: { type: "select" },
			description: "Tone",
			options: [
				"brand",
				"neutral",
				"inverse",
				"negative",
				"positive",
				"warning",
				"informative",
			] as Array<ButtonProps["tone"]>,
			table: { defaultValue: { summary: "neutral" as ButtonProps["tone"] } },
		},
		variant: {
			control: { type: "select" },
			description: "Variant",
			options: ["solid", "subtle", "outline", "plain", "text"] as Array<ButtonProps["variant"]>,
			table: { defaultValue: { summary: "solid" as ButtonProps["variant"] } },
		},
	},
	args: {
		onPress: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Button",
	},
};

export const StyleVariants: Story = {
	args: {
		children: "Button",
	},
	render(args, _context) {
		const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
		const tones = [
			"brand",
			"neutral",
			"inverse",
			"negative",
			"positive",
			"warning",
			"informative",
		] as const;
		const variants = ["solid", "subtle", "outline", "plain", "text"] as const;

		return (
			<div className="flex flex-col gap-y-12">
				{sizes.map((size) => {
					return (
						<div key={size} className="flex flex-col gap-y-4 text-sm">
							<h2 className="text-lg font-strong">Size: {size}</h2>
							<table>
								<thead>
									<tr>
										<th className="p-2 text-left font-strong">Variant / Tone</th>
										{tones.map((tone) => {
											return (
												<th key={tone} className="p-2 font-strong" scope="col">
													{tone}
												</th>
											);
										})}
									</tr>
								</thead>
								<tbody>
									{variants.map((variant) => {
										return (
											<tr key={variant}>
												<th className="p-2 font-strong" id={variant} scope="row">
													{variant}
												</th>
												{tones.map((tone) => {
													return (
														<td
															key={tone}
															className="p-2 text-center"
															headers={[variant, tone].join(" ")}
															id={tone}
														>
															<div className="flex flex-col items-center gap-y-1.5">
																<Button size={size} tone={tone} variant={variant}>
																	{args.children}
																</Button>
																<Button isDisabled={true} size={size} tone={tone} variant={variant}>
																	{args.children}
																</Button>
															</div>
														</td>
													);
												})}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					);
				})}
			</div>
		);
	},
};

export const WithLongLabel: Story = {
	args: {
		children: "This button has a very long label",
	},
};
