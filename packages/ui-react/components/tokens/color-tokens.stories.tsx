import { cn } from "@acdh-oeaw/style-variants";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";

const meta = {
	title: "Design system/Color tokens",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const SemanticColorTokens: Story = {
	render() {
		return <ColorTokens />;
	},
};

function ColorTokens(): ReactNode {
	const blocks: Array<{
		name: string;
		description: string;
		tokens: Array<{
			name: string;
			description: string;
			color: { className: string; background?: "default" | "inverse" };
		}>;
	}> = [
		{
			name: "Text",
			description: "Used for the words on an interface.",
			tokens: [
				{
					name: "text.strong",
					description:
						"Primary text, like headings, body content, and form labels to ensure it’s prominent and legible.",
					color: {
						className: "bg-text-strong",
					},
				},
				{
					name: "text.weak",
					description: "Secondary text to make it less prominent.",
					color: {
						className: "bg-text-weak",
					},
				},
				{
					name: "text.weaker",
					description: "Used for placeholder text.",
					color: {
						className: "bg-text-weaker",
					},
				},
				{
					name: "text.brand",
					description: "Text links to help indicate they’re interactive.",
					color: {
						className: "bg-text-brand",
					},
				},
				{
					name: "text.disabled",
					description: "Text used in elements with a disabled state, like disabled buttons.",
					color: {
						className: "bg-text-disabled",
					},
				},
				{
					name: "text.negative",
					description:
						"Text that indicates a negative message such as an error that needs urgent attention.",
					color: {
						className: "bg-text-negative",
					},
				},
				{
					name: "text.positive",
					description:
						"Text that warns people to be cautious and that taking an action could be risky.",
					color: {
						className: "bg-text-positive",
					},
				},
				{
					name: "text.warning",
					description:
						"Text that indicates a positive message or that an action was completed as expected.",
					color: {
						className: "bg-text-warning",
					},
				},
				{
					name: "text.informative",
					description: "Text that conveys neutral information in a badge or alert.",
					color: {
						className: "bg-text-informative",
					},
				},
				{
					name: "text.inverse.strong",
					description: "Primary text on high contrast backgrounds.",
					color: {
						className: "bg-text-inverse-strong",
						background: "inverse",
					},
				},
				{
					name: "text.inverse.weak",
					description: "Secondary text on high contrast backgrounds.",
					color: {
						className: "bg-text-inverse-weak",
						background: "inverse",
					},
				},
				{
					name: "text.inverse.disabled",
					description: "Disabled text on high contrast backgrounds.",
					color: {
						className: "bg-text-inverse-disabled",
						background: "inverse",
					},
				},
			],
		},
		{
			name: "Stroke",
			description: "Used for borders on interface elements.",
			tokens: [
				{
					name: "stroke.strong",
					description: "Non-decorative borders on interface elements like form input fields.",
					color: {
						className: "bg-stroke-strong",
					},
				},
				{
					name: "stroke.weak",
					description:
						"Decorative borders, like dividing lines, that aren’t critical to identifying interface elements.",
					color: {
						className: "bg-stroke-weak",
					},
				},
				{
					name: "stroke.selected",
					description: "Borders of currently selected elements like tabs.",
					color: {
						className: "bg-stroke-selected",
					},
				},
				{
					name: "stroke.focus",
					description: "Focus ring of elements in a focus state.",
					color: {
						className: "bg-stroke-focus",
					},
				},
				{
					name: "stroke.disabled",
					description: "Borders of elements in a disabled state, like disabled buttons.",
					color: {
						className: "bg-stroke-disabled",
					},
				},
				{
					name: "stroke.brand.strong",
					description: "Borders of interactive elements like buttons.",
					color: {
						className: "bg-stroke-brand-strong",
					},
				},
				{
					name: "stroke.brand.weak",
					description: "Decorative borders of interactive elements.",
					color: {
						className: "bg-stroke-brand-weak",
					},
				},
				{
					name: "stroke.negative.strong",
					description: "Borders on destructive buttons.",
					color: {
						className: "bg-stroke-negative-strong",
					},
				},
				{
					name: "stroke.negative.weak",
					description:
						"Decorative borders on elements that indicate an urgent or negative message, like error alerts.",
					color: {
						className: "bg-stroke-negative-weak",
					},
				},
				{
					name: "stroke.positive.strong",
					description: "Borders on elements that indicate a positive message, like success alerts.",
					color: {
						className: "bg-stroke-positive-strong",
					},
				},
				{
					name: "stroke.positive.weak",
					description:
						"Decorative borders on elements that indicate a positive message, like success alerts.",
					color: {
						className: "bg-stroke-positive-weak",
					},
				},
				{
					name: "stroke.warning.strong",
					description: "Borders on elements that warn people to be cautious.",
					color: {
						className: "bg-stroke-warning-strong",
					},
				},
				{
					name: "stroke.warning.weak",
					description:
						"Decorative borders on elements that warn people to be cautious, like warning alerts.",
					color: {
						className: "bg-stroke-warning-weak",
					},
				},
				{
					name: "stroke.informative.strong",
					description:
						"Borders on elements that convey neutral information, like a badge or alert.",
					color: {
						className: "bg-stroke-informative-strong",
					},
				},
				{
					name: "stroke.informative.weak",
					description:
						"Decorative borders on elements that convey neutral information, like a badge or alert.",
					color: {
						className: "bg-stroke-informative-weak",
					},
				},
				{
					name: "stroke.inverse.strong",
					description: "Non-decorative borders for elements on high contrast backgrounds.",
					color: {
						className: "bg-stroke-inverse-strong",
						background: "inverse",
					},
				},
				{
					name: "stroke.inverse.weak",
					description: "Decorative borders for elements on high contrast backgrounds.",
					color: {
						className: "bg-stroke-inverse-weak",
						background: "inverse",
					},
				},
				{
					name: "stroke.inverse.disabled",
					description: "Borders for disabled elements on high contrast backgrounds.",
					color: {
						className: "bg-stroke-inverse-disabled",
						background: "inverse",
					},
				},
			],
		},
		{
			name: "Icon",
			description: "Used for icons.",
			tokens: [
				{
					name: "icon.neutral",
					description: "Default icon colour when paired with text.strong.",
					color: {
						className: "bg-icon-neutral",
					},
				},
				{
					name: "icon.brand",
					description:
						"Icons in interactive elements, like buttons, that help convey the brand personality.",
					color: {
						className: "bg-icon-brand",
					},
				},
				{
					name: "icon.disabled",
					description: "Icons in elements with a disabled state.",
					color: {
						className: "bg-icon-disabled",
					},
				},
				{
					name: "icon.negative",
					description:
						"Icons that indicate a negative message like an error that needs urgent attention.",
					color: {
						className: "bg-icon-negative",
					},
				},
				{
					name: "icon.positive",
					description: "Icons in elements that indicate a positive message, like success alerts.",
					color: {
						className: "bg-icon-positive",
					},
				},
				{
					name: "icon.warning",
					description: "Icons in elements that warn people to be cautious.",
					color: {
						className: "bg-icon-warning",
					},
				},
				{
					name: "icon.informative",
					description: "Icons in elements that convey neutral information, like a badge or alert.",
					color: {
						className: "bg-icon-informative",
					},
				},
				{
					name: "icon.inverse",
					description: "Icons on high contrast backgrounds.",
					color: {
						className: "bg-icon-inverse",
						background: "inverse",
					},
				},
				{
					name: "icon.inverse.strong",
					description: "High contrast icons on high contrast backgrounds.",
					color: {
						className: "bg-icon-inverse-strong",
						background: "inverse",
					},
				},
				{
					name: "icon.inverse.disabled",
					description: "Disabled icons on high contrast backgrounds.",
					color: {
						className: "bg-icon-inverse-disabled",
						background: "inverse",
					},
				},
			],
		},
		{
			name: "Fill",
			description: "Used for foreground components that sit on solid background surfaces.",
			tokens: [
				{
					name: "fill.strong",
					description: "Neutral fill for high contrast foreground components, like buttons.",
					color: {
						className: "bg-fill-strong",
					},
				},
				{
					name: "fill.weak",
					description: "Neutral fill for low contrast foreground components, like badges.",
					color: {
						className: "bg-fill-weak",
					},
				},
				{
					name: "fill.weaker",
					description:
						"Neutral fill for large foreground components to help ensure they’re not too prominent.",
					color: {
						className: "bg-fill-weaker",
					},
				},
				{
					name: "fill.hover",
					description: "Fill for interactive elements in a hover state.",
					color: {
						className: "bg-fill-hover",
					},
				},
				{
					name: "fill.press",
					description: "Fill for interactive elements in a press state.",
					color: {
						className: "bg-fill-press",
					},
				},
				{
					name: "fill.selected",
					description: "Fill for interactive elements in a selected state.",
					color: {
						className: "bg-fill-selected",
					},
				},
				{
					name: "fill.disabled",
					description: "Fill for interactive elements in a disabled state.",
					color: {
						className: "bg-fill-disabled",
					},
				},
				{
					name: "fill.overlay",
					description: "Fill for transparent page overlays behind modal dialogs.",
					color: {
						className: "bg-fill-overlay",
					},
				},
				{
					name: "fill.brand.strong",
					description: "Fill for high contrast interactive elements like buttons.",
					color: {
						className: "bg-fill-brand-strong",
					},
				},
				{
					name: "fill.brand.weak",
					description: "Fill for low contrast interactive elements like badges.",
					color: {
						className: "bg-fill-brand-weak",
					},
				},
				{
					name: "fill.negative.strong",
					description: "Fill for high contrast destructive elements like destructive buttons.",
					color: {
						className: "bg-fill-negative-strong",
					},
				},
				{
					name: "fill.negative.weak",
					description:
						"Fill for low contrast elements that indicate a negative message like error alerts and badges.",
					color: {
						className: "bg-fill-negative-weak",
					},
				},
				{
					name: "fill.positive.strong",
					description: "Fill for high contrast elements that indicate a positive message.",
					color: {
						className: "bg-fill-positive-strong",
					},
				},
				{
					name: "fill.positive.weak",
					description:
						"Fill for low contrast elements that indicate a positive message, like success alerts and badges.",
					color: {
						className: "bg-fill-positive-weak",
					},
				},
				{
					name: "fill.warning.strong",
					description: "Fill for high contrast elements that warn people to be cautious.",
					color: {
						className: "bg-fill-warning-strong",
					},
				},
				{
					name: "fill.warning.weak",
					description:
						"Fill for low contrast elements that warn people to be cautious, like warning alerts and badges.",
					color: {
						className: "bg-fill-warning-weak",
					},
				},
				{
					name: "fill.informative.strong",
					description: "Fill for high contrast elements that convey neutral information.",
					color: {
						className: "bg-fill-informative-strong",
					},
				},
				{
					name: "fill.informative.weak",
					description:
						"Fill for low contrast elements that convey neutral information, like a badge or alert.",
					color: {
						className: "bg-fill-informative-weak",
					},
				},
				{
					name: "fill.inverse.strong",
					description:
						"Neutral fill for high contrast foreground components on high contrast backgrounds.",
					color: {
						className: "bg-fill-inverse-strong",
						background: "inverse",
					},
				},
				{
					name: "fill.inverse.weak",
					description:
						"Neutral fill for low contrast foreground components on high contrast backgrounds.",
					color: {
						className: "bg-fill-inverse-weak",
						background: "inverse",
					},
				},
				{
					name: "fill.inverse.hover",
					description:
						"Fill for interactive elements on high contrast backgrounds in a hover state.",
					color: {
						className: "bg-fill-inverse-hover",
						background: "inverse",
					},
				},
				{
					name: "fill.inverse.press",
					description:
						"Fill for interactive elements on high contrast backgrounds in a press state.",
					color: {
						className: "bg-fill-inverse-press",
						background: "inverse",
					},
				},
				{
					name: "fill.inverse.disabled",
					description:
						"Fill for interactive elements on high contrast backgrounds in a disabled state.",
					color: {
						className: "bg-fill-inverse-disabled",
						background: "inverse",
					},
				},
				{
					name: "fill.white",
					description: "Fill that remains white across light and dark mode.",
					color: {
						className: "bg-fill-white",
					},
				},
				{
					name: "fill.yellow",
					description: "Fill that remains yellow across light and dark mode.",
					color: {
						className: "bg-fill-yellow",
					},
				},
			],
		},
		{
			name: "Background",
			description:
				"Used for solid background surfaces that transparent foreground components sit on.",
			tokens: [
				{
					name: "background.base",
					description: "Default background with no elevation.",
					color: {
						className: "bg-background-base",
					},
				},
				{
					name: "background.raised",
					description:
						"Slightly elevated background that sits just above the base, for components like cards.",
					color: {
						className: "bg-background-raised",
					},
				},
				{
					name: "background.overlay",
					description:
						"Background that floats high above the page, for components like dropdown menus.",
					color: {
						className: "bg-background-overlay",
					},
				},
				{
					name: "background.sunken",
					description: "Background that sits below the base background.",
					color: {
						className: "bg-background-sunken",
					},
				},
				{
					name: "background.alternate",
					description: "Low contrast background to help differentiate certain areas of a page.",
					color: {
						className: "bg-background-alternate",
					},
				},
				{
					name: "background.brand",
					description: "High contrast background that helps convey the brand personality.",
					color: {
						className: "bg-background-brand",
					},
				},
				{
					name: "background.inverse",
					description: "High contrast background to help differentiate certain areas of a page.",
					color: {
						className: "bg-background-inverse",
					},
				},
			],
		},
	];

	return (
		<main className="mx-auto flex max-w-screen-xl flex-col gap-y-12 bg-background-base px-8 py-16">
			<div className="flex flex-col gap-y-3">
				<h1 className="text-3xl font-strong text-text-strong">Color tokens</h1>
				<p className="max-w-screen-md text-text-weak">
					Semantic color tokens. Background colors are solid. Foreground colors are semi-transparent
					to ensure proper contrast.
				</p>
			</div>
			<div className="flex flex-col gap-y-16">
				{blocks.map((block) => {
					return (
						<section key={block.name} className="flex flex-col gap-y-6">
							<header className="flex flex-col gap-y-2">
								<h2 className="text-2xl font-strong text-text-strong">{block.name}</h2>
								<p className="text-text-weak">{block.description}</p>
							</header>
							<table className="text-sm">
								<thead>
									<tr className="border-y border-stroke-weak">
										<th className="py-3 pr-2 text-left font-strong" scope="col">
											Token
										</th>
										<th className="px-2 py-3 text-left font-strong whitespace-nowrap" scope="col">
											Usage
										</th>
										<th className="px-2 py-3 text-center font-strong whitespace-nowrap" scope="col">
											Light mode
										</th>
										<th className="px-2 py-3 text-center font-strong whitespace-nowrap" scope="col">
											Dark mode
										</th>
									</tr>
								</thead>
								<tbody>
									{block.tokens.map((token) => {
										return (
											<tr key={token.name} className="border-b border-stroke-weak">
												<th
													className="py-4 pr-2 text-left font-strong text-text-strong"
													scope="row"
												>
													{token.name}
												</th>
												<td className="px-2 py-4 text-left text-text-weak">{token.description}</td>
												<td
													className="bg-background-base px-6 py-4 text-center"
													data-ui-color-scheme="light"
												>
													<div
														className="mx-auto w-fit rounded-full border border-stroke-weak bg-background-base p-1"
														data-ui-color-scheme={
															token.color.background === "inverse" ? "dark" : "light"
														}
													>
														<div
															className={cn(
																"size-8 rounded-full border border-stroke-weak",
																token.color.className,
															)}
															data-ui-color-scheme="light"
														/>
													</div>
												</td>
												<td
													className="bg-background-base px-6 py-4 text-center"
													data-ui-color-scheme="dark"
												>
													<div
														className="mx-auto w-fit rounded-full border border-stroke-weak bg-background-base p-1"
														data-ui-color-scheme={
															token.color.background === "inverse" ? "light" : "dark"
														}
													>
														<div
															className={cn(
																"size-8 rounded-full border border-stroke-weak",
																token.color.className,
															)}
															data-ui-color-scheme="dark"
														/>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</section>
					);
				})}
			</div>
		</main>
	);
}
