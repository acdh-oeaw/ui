"use client";

import type { ElementRef } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

import { TouchTarget } from "@/components/touch-target";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const buttonStyles = variants({
	base: [
		"inline-flex cursor-default items-center justify-center gap-x-2 whitespace-nowrap transition",
		"rounded-md px-3 py-1.5",
		"text-sm font-medium leading-normal",
		"border",

		"disabled:opacity-50",
	],
	variants: {
		// size: {
		// 	sm: "",
		// 	md: "",
		// },
		variant: {
			solid: [
				"dark:border-neutral-0/5 border-neutral-950/90",
				"text-neutral-0 bg-neutral-900 dark:bg-neutral-600",
				"hover:bg-neutral-900/90 dark:hover:bg-neutral-600/90", // TODO: overlay layer hover:bg-white/5 darh:hover:bg-white/10
				"shadow-sm dark:shadow-none",
				"disabled:shadow-none",
			],
			// negative: [],
			// positive: [],
			outline: [
				"dark:border-neutral-0/15 border-neutral-950/10",
				"pressed:bg-neutral-950/[2.5%] dark:hover:bg-neutral-0/5 dark:pressed:bg-neutral-0/5 bg-transparent hover:bg-neutral-950/[2.5%]",
				"dark:text-neutral-0 text-neutral-950",
			],
			plain: [
				"border-transparent",
				"pressed:bg-neutral-950/5 hover:bg-neutral-950/5",
				"dark:text-neutral-0 text-neutral-950",
				"dark:hover:bg-neutral-0/10 dark:pressed:bg-neutral-0/10",
			],
		},
	},
	defaultVariants: {
		// size: "md",
		variant: "solid",
	},
});

export type ButtonStyles = VariantProps<typeof buttonStyles>;

export interface ButtonProps extends AriaButtonProps, ButtonStyles {}

export const Button = forwardRef(function Button(
	props: ButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaButton>>,
) {
	const { children, className, variant, ...rest } = props;

	return (
		<AriaButton
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return buttonStyles({ ...renderProps, className, variant });
			})}
		>
			{composeRenderProps(children, (children, _renderProps) => {
				return <TouchTarget>{children}</TouchTarget>;
			})}
		</AriaButton>
	);
});
