"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	ToggleButton as AriaToggleButton,
	type ToggleButtonProps as AriaToggleButtonProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const toggleButtonStyles = compose(
	focusRing,
	variants({
		base: "cursor-default rounded-lg border border-background/10 px-5 py-2 text-center text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition forced-color-adjust-none forced-colors:border-[ButtonBorder]",
		variants: {
			isSelected: {
				false:
					"bg-neutral-100 text-neutral-800 hover:bg-neutral-200 pressed:bg-neutral-300 forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText]",
				true: "bg-neutral-700 text-white hover:bg-neutral-800 pressed:bg-neutral-900 forced-colors:!bg-[Highlight] forced-colors:!text-[HighlightText]",
			},
			isDisabled: {
				true: "border-background/5 bg-neutral-100 text-neutral-300 forced-colors:border-[GrayText] forced-colors:!bg-[ButtonFace] forced-colors:!text-[GrayText]",
			},
		},
	}),
);

export type ToggleButtonStyles = VariantProps<typeof toggleButtonStyles>;

export interface ToggleButtonProps extends AriaToggleButtonProps, ToggleButtonStyles {}

export const ToggleButton = forwardRef(function ToggleButton(
	props: ToggleButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaToggleButton>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaToggleButton
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return toggleButtonStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaToggleButton>
	);
});
