"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	Toolbar as AriaToolbar,
	type ToolbarProps as AriaToolbarProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const toolbarStyles = variants({
	base: "flex gap-2",
	variants: {
		orientation: {
			horizontal: "flex-row",
			vertical: "flex-col items-start",
		},
	},
});

export type ToolbarStyles = VariantProps<typeof toolbarStyles>;

export interface ToolbarProps extends AriaToolbarProps, ToolbarStyles {}

export const Toolbar = forwardRef(function Toolbar(
	props: ToolbarProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaToolbar>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaToolbar
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return toolbarStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaToolbar>
	);
});
