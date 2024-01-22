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

export const iconButtonStyles = compose(
	focusRing,
	variants({
		base: "inline-flex aspect-square cursor-default items-center justify-center rounded-md p-1 text-sm text-muted-foreground transition hover:bg-accent pressed:bg-accent/90",
		variants: {
			size: {
				sm: "h-8",
				md: "h-9",
				lg: "h-10",
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

export type IconButtonStyles = VariantProps<typeof iconButtonStyles>;

export interface IconButtonProps extends AriaButtonProps, IconButtonStyles {}

export const IconButton = forwardRef(function IconButton(
	props: IconButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaButton>>,
) {
	const { children, className, variant, ...rest } = props;

	return (
		<AriaButton
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return iconButtonStyles({ ...renderProps, className, variant });
			})}
		>
			{children}
		</AriaButton>
	);
});
