"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { type ReactNode, useMemo } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

import { StylesContext, useStylesContext } from "@/src/primitives/styles-context";

export const buttonStyles = styles({
	base: [
		"relative isolate rounded-weak border text-center font-strong whitespace-nowrap outline-offset-2 outline-transparent transition",
		"after:pointer-events-none after:absolute after:-inset-px after:-z-1 after:rounded-[inherit] after:transition",
		"hover:after:bg-fill-hover",
		"pressed:after:bg-fill-press",
		"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus focus-visible:outline-solid",
	],
	variants: {
		shape: {
			default: ["inline-flex items-center"],
			square: ["inline-grid place-items-center"],
		},
		size: {
			sm: ["text-sm/5"],
			md: ["text-base/6"],
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
		[{ size: "sm", shape: "default" }, "h-9 gap-x-2 px-3.5"],
		[{ size: "md", shape: "default" }, "h-10 gap-x-2 px-4"],
		[{ size: "lg", shape: "default" }, "h-11 gap-x-2 px-4.5"],

		[{ size: "sm", shape: "square" }, "size-9"],
		[{ size: "md", shape: "square" }, "size-10"],
		[{ size: "lg", shape: "square" }, "size-11"],
	],
	defaults: {
		shape: "default",
		size: "md",
		tone: "neutral",
		variant: "solid",
	},
});

export type ButtonStylesProps = GetVariantProps<typeof buttonStyles>;

export interface ButtonProps extends AriaButtonProps, ButtonStylesProps {}

export function Button(props: Readonly<ButtonProps>): ReactNode {
	const { children, className, shape, size, tone, variant, ...rest } = useStylesContext(props);

	const stylesProps = useMemo(() => {
		return { size, tone };
	}, [size, tone]);

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return buttonStyles({ className, shape, size, tone, variant });
			})}
		>
			{composeRenderProps(children, (children) => {
				return <StylesContext value={stylesProps}>{children}</StylesContext>;
			})}
		</AriaButton>
	);
}
