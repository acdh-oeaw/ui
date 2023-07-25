import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

const buttonStyles = styles({
	base: [
		"relative isolate inline-flex items-baseline justify-center rounded-md text-center font-strong whitespace-nowrap transition select-none",
		"outline-stroke-focus focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 forced-colors:outline-[Highlight]",
		"disabled:forced-colors:text-[GrayText]",
	],
	variants: {
		size: {
			xs: ["h-8 gap-x-2 px-3 py-1.5 text-xs/4.5", "*:data-[slot=icon]:size-3.5"],
			sm: ["h-9 gap-x-2 px-3.5 py-1.75 text-sm/5", "*:data-[slot=icon]:size-4"],
			md: ["h-10 gap-x-2 px-4 py-2.25 text-sm/5", "*:data-[slot=icon]:size-4"],
			lg: ["h-11 gap-x-2 px-4.5 py-2.25 text-base/6", "*:data-[slot=icon]:size-4.5"],
			xl: ["h-12 gap-x-2.5 px-5 py-2.75 text-base/6", "*:data-[slot=icon]:size-4.5"],
			"2xl": ["h-16 gap-x-3 px-7 py-4.75 text-base/6", "*:data-[slot=icon]:size-4.5"],
		},
		tone: {
			brand: [
				"[--_button-color-icon:var(--color-icon-brand)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-brand-strong)] [--_button-color-weak:var(--color-fill-brand-weak)]",
			],
			neutral: [
				"[--_button-color-icon:var(--color-icon-neutral)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-strong)] [--_button-color-weak:var(--color-fill-weak)]",
			],
			inverse: [
				"[--_button-color-icon:var(--color-icon-inverse)] [--_button-color-inverse:var(--color-text-strong)] [--_button-color-strong:var(--color-fill-inverse-strong)] [--_button-color-weak:var(--color-fill-inverse-weak)]",
			],
			negative: [
				"[--_button-color-icon:var(--color-icon-negative)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-negative-strong)] [--_button-color-weak:var(--color-fill-negative-weak)]",
			],
			positive: [
				"[--_button-color-icon:var(--color-icon-positive)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-positive-strong)] [--_button-color-weak:var(--color-fill-positive-weak)]",
			],
			warning: [
				"[--_button-color-icon:var(--color-icon-notice)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-warning-strong)] [--_button-color-weak:var(--color-fill-warning-weak)]",
			],
			informative: [
				"[--_button-color-icon:var(--color-icon-informative)] [--_button-color-inverse:var(--color-text-inverse-strong)] [--_button-color-strong:var(--color-fill-informative-strong)] [--_button-color-weak:var(--color-fill-informative-weak)]",
			],
		},
		variant: {
			solid: [
				"border border-transparent bg-(--_button-color-strong) text-(--_button-color-inverse) shadow",
				"after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:transition hover:after:bg-fill-hover",
				"disabled:bg-fill-disabled",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
			subtle: [
				"bg-(--_button-color-weak)",
				"after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:transition hover:after:bg-fill-hover",
				"disabled:text-text-disabled",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
			outline: [
				"border border-(--_button-color-strong) text-(--_button-color-strong)",
				"after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:transition hover:after:bg-fill-hover",
				"disabled:border-stroke-disabled disabled:text-text-disabled",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
			plain: [
				"*:data-[slot=icon]:text-(--_button-color-icon)",
				"after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:transition hover:after:bg-fill-hover",
				"disabled:text-text-disabled",
			],
			text: [
				"text-(--_button-color-strong) underline",
				"disabled:text-text-disabled",
				"*:data-[slot=icon]:text-(--_button-color-icon)",
			],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
		tone: "neutral",
		variant: "solid",
	},
});

type ButtonStylesProps = GetVariantProps<typeof buttonStyles>;

interface ButtonProps extends AriaButtonProps, ButtonStylesProps {}

export function Button(props: Readonly<ButtonProps>): ReactNode {
	const { children, className, size, tone, variant, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return buttonStyles({ className, size, tone, variant });
			})}
		>
			{children}
		</AriaButton>
	);
}
