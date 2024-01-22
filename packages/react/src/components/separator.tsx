"use client";

import type { ElementRef } from "react";
import {
	Separator as AriaSeparator,
	type SeparatorProps as AriaSeparatorProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const separatorStyles = variants({
	base: "bg-neutral-300 forced-colors:bg-[ButtonBorder]",
	variants: {
		orientation: {
			horizontal: "h-px w-full",
			vertical: "w-px",
		},
	},
	defaultVariants: {
		orientation: "horizontal",
	},
});

export type SeparatorStyles = VariantProps<typeof separatorStyles>;

export interface SeparatorProps extends AriaSeparatorProps, SeparatorStyles {}

export const Separator = forwardRef(function Separator(
	props: SeparatorProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSeparator>>,
) {
	const { className, orientation, ...rest } = props;

	return (
		<AriaSeparator
			ref={forwardedRef}
			{...rest}
			className={separatorStyles({ className, orientation })}
		/>
	);
});
