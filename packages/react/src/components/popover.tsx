import type { ElementRef } from "react";
import {
	composeRenderProps,
	OverlayArrow as AriaPopoverArrow,
	type OverlayArrowProps as AriaPopoverArrowProps,
	Popover as AriaPopover,
	type PopoverProps as AriaPopoverProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const popoverStyles = variants({
	base: [
		"placement-bottom:mt-2 placement-top:mb-2 group w-[280px] rounded-lg bg-white ring-1 ring-black/10 drop-shadow-lg",
	],
	variants: {
		isEntering: {
			true: "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 duration-200 ease-out",
		},
		isExiting: {
			true: "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 duration-150 ease-in",
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

	return (
		<AriaPopover
			ref={forwardedRef}
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
	base: [],
});

export type PopoverArrowStyles = VariantProps<typeof popoverArrowStyles>;

export interface PopoverArrowProps extends AriaPopoverArrowProps, PopoverArrowStyles {}

export const PopoverArrow = forwardRef(function PopoverArrow(
	props: PopoverArrowProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaPopoverArrow>>,
) {
	const { className, ...rest } = props;

	return (
		<AriaPopoverArrow
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return popoverArrowStyles({ ...renderProps, className });
			})}
		>
			<svg
				className="group-placement-bottom:rotate-180 fill-neutral-0 block size-4"
				height={12}
				viewBox="0 0 12 12"
				width={12}
			>
				<path d="M0 0L6 6L12 0" />
			</svg>
		</AriaPopoverArrow>
	);
});
