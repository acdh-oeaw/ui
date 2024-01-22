"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	Link as AriaLink,
	type LinkProps as AriaLinkProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const linkStyles = compose(
	focusRing,
	variants({
		base: "rounded underline underline-offset-4 transition disabled:cursor-default disabled:no-underline forced-colors:disabled:text-[GrayText]",
		variants: {
			variant: {
				primary: "text-blue-600 underline decoration-blue-600/60 hover:decoration-blue-600",
				secondary:
					"text-neutral-700 underline decoration-neutral-700/50 hover:decoration-neutral-700",
				text: "text-foreground underline decoration-foreground/50 hover:decoration-foreground",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}),
);

export type LinkStyles = VariantProps<typeof linkStyles>;

export interface LinkProps extends AriaLinkProps, LinkStyles {}

export const Link = forwardRef(function Link(
	props: LinkProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaLink>>,
) {
	const { children, className, variant, ...rest } = props;

	return (
		<AriaLink
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return linkStyles({ ...renderProps, className, variant });
			})}
		>
			{children}
		</AriaLink>
	);
});
