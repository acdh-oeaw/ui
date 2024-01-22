"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	OverlayArrow as AriaPopoverArrow,
	type OverlayArrowProps as AriaPopoverArrowProps,
	Popover as AriaPopover,
	PopoverContext as AriaPopoverContext,
	type PopoverProps as AriaPopoverProps,
	useSlottedContext,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const popoverStyles = variants({
	base: "rounded-md border border-background/10 bg-popover bg-clip-padding text-popover-foreground shadow-md forced-colors:bg-[Canvas]",
	variants: {
		isEntering: {
			true: "duration-200 ease-out animate-in fade-in placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1",
		},
		isExiting: {
			true: "duration-150 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1",
		},
	},
});

export type PopoverStyles = VariantProps<typeof popoverStyles>;

export interface PopoverProps extends AriaPopoverProps, PopoverStyles {}

export const Popover = forwardRef(function Popover(
	props: PopoverProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaPopover>>,
) {
	const { children, className, ...rest } = props;

	const popoverContext = useSlottedContext(AriaPopoverContext);
	const offset = popoverContext?.trigger === "SubmenuTrigger" ? 2 : 8;

	return (
		<AriaPopover
			ref={forwardedRef}
			offset={offset}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return popoverStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaPopover>
	);
});

export const popoverArrowStyles = variants({
	base: "block fill-background stroke-black/10 stroke-1 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
});

export type PopoverArrowStyles = VariantProps<typeof popoverArrowStyles>;

export interface PopoverArrowProps
	extends Omit<AriaPopoverArrowProps, "children">,
		PopoverArrowStyles {}

export const PopoverArrow = forwardRef(function PopoverArrow(
	props: PopoverArrowProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaPopoverArrow>>,
) {
	const { className, ...rest } = props;

	return (
		<AriaPopoverArrow ref={forwardedRef} {...rest} className="group">
			<svg width={12} height={12} viewBox="0 0 12 12" className={popoverArrowStyles({ className })}>
				<path d="M0 0 L6 6 L12 0" />
			</svg>
		</AriaPopoverArrow>
	);
});
