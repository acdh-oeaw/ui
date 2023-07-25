"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

/** @interal */
export const buttonStyles = styles({
	base: [
		"relative isolate inline-flex items-center justify-center rounded-sm border text-center font-strong whitespace-nowrap outline-offset-2 outline-transparent transition",
		"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition",
		"hover:after:bg-fill-hover",
		"pressed:after:bg-fill-press",
		"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus",
	],
	variants: {
		shape: {
			default: [],
			square: [],
		},
		size: {
			sm: ["text-sm/5"],
			md: ["text-sm/5"],
			lg: ["text-base/6"],
		},
		tone: {
			brand: [
				"[--_button-color-strong:var(--color-fill-brand-strong)] [--_button-color-weak:var(--color-fill-brand-weak)]",
			],
			neutral: [
				"[--_button-color-strong:var(--color-fill-strong)] [--_button-color-weak:var(--color-fill-weak)]",
			],
			inverse: [
				"[--_button-color-strong:var(--color-fill-inverse-strong)] [--_button-color-weak:var(--color-fill-inverse-weak)]",
			],
			negative: [
				"[--_button-color-strong:var(--color-fill-negative-strong)] [--_button-color-weak:var(--color-fill-negative-weak)]",
			],
			positive: [
				"[--_button-color-strong:var(--color-fill-positive-strong)] [--_button-color-weak:var(--color-fill-positive-weak)]",
			],
			warning: [
				"[--_button-color-strong:var(--color-fill-warning-strong)] [--_button-color-weak:var(--color-fill-warning-weak)]",
			],
			informative: [
				"[--_button-color-strong:var(--color-fill-informative-strong)] [--_button-color-weak:var(--color-fill-informative-weak)]",
			],
		},
		variant: {
			solid: [
				"border-transparent bg-(--_button-color-strong) text-text-inverse-strong shadow-raised",
				"pressed:shadow-none",
				"disabled:bg-fill-disabled",
			],
			outline: [
				"border-(--_button-color-strong) text-(--_button-color-strong)",
				"disabled:border-stroke-disabled disabled:text-text-disabled",
			],
			plain: [
				"border-transparent text-(--_button-color-strong) underline",
				"disabled:text-text-disabled",
			],
		},
	},
	combinations: [
		[{ shape: "default", size: "sm" }, "h-9 gap-x-1.5 px-3.5 py-[calc(--spacing(2)-1px)]"],
		[{ shape: "default", size: "md" }, "h-10 gap-x-1.5 px-4 py-[calc(--spacing(2.5)-1px)]"],
		[{ shape: "default", size: "lg" }, "h-11 gap-x-1.5 px-4.5 py-[calc(--spacing(2.5)-1px)]"],

		[{ shape: "square", size: "sm" }, "size-9"],
		[{ shape: "square", size: "md" }, "size-10"],
		[{ shape: "square", size: "lg" }, "size-11"],
	],
	defaults: {
		shape: "default",
		size: "md",
		tone: "brand",
		variant: "solid",
	},
});

/** @interal */
export type ButtonStylesProps = GetVariantProps<typeof buttonStyles>;

export interface ButtonProps extends AriaButtonProps, ButtonStylesProps {}

export function Button(props: Readonly<ButtonProps>): ReactNode {
	const { children, className, shape, size, tone, variant, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return buttonStyles({ className, shape, size, tone, variant });
			})}
		>
			{children}
		</AriaButton>
	);
}
