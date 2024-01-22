"use client";

import type { ElementRef } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const buttonStyles = compose(
	focusRing,
	variants({
		base: "inline-flex cursor-default items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 py-2 text-center text-sm font-medium transition",
		variants: {
			size: {
				sm: "h-8 px-3 text-xs",
				md: "h-9 px-4 py-2",
				lg: "h-10 px-8",
			},
			variant: {
				primary:
					"bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 pressed:bg-primary/80",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 pressed:bg-secondary/70",
				negative:
					"bg-negative text-negative-foreground shadow-sm hover:bg-negative/90 pressed:bg-negative/80",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground pressed:bg-accent/90",
				ghost: "hover:bg-accent hover:text-accent-foreground pressed:bg-accent/90",
				link: "text-primary underline-offset-4 hover:underline",
			},
			isDisabled: {
				true: "disabled:opacity-50 forced-colors:text-[GrayText]",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "primary",
		},
	}),
);

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
			{children}
		</AriaButton>
	);
});
