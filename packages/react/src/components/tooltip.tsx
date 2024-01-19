import type { ElementRef } from "react";
import {
	composeRenderProps,
	OverlayArrow as AriaTooltipArrow,
	type OverlayArrowProps as AriaTooltipArrowProps,
	Tooltip as AriaTooltip,
	type TooltipProps as AriaTooltipProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const tooltipStyles = variants({
	base: "group rounded-lg border border-neutral-800 bg-neutral-700 px-3 py-1 text-sm text-white shadow-[inset_0_1px_0_0_theme(colors.neutral.600)] drop-shadow-lg will-change-transform",
	variants: {
		isEntering: {
			true: "duration-200 ease-out animate-in fade-in placement-left:slide-in-from-right-0.5 placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5",
		},
		isExiting: {
			true: "duration-150 ease-in animate-out fade-out placement-left:slide-out-to-right-0.5 placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5",
		},
	},
});

export type TooltipStyles = VariantProps<typeof tooltipStyles>;

export interface TooltipProps extends AriaTooltipProps, TooltipStyles {}

export const Tooltip = forwardRef(function Tooltip(
	props: TooltipProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTooltip>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaTooltip
			ref={forwardedRef}
			offset={8}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return tooltipStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaTooltip>
	);
});

export const tooltipArrowStyles = variants({
	base: "fill-neutral-700 stroke-neutral-800 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
});

export type TooltipArrowStyles = VariantProps<typeof tooltipArrowStyles>;

export interface TooltipArrowProps
	extends Omit<AriaTooltipArrowProps, "children">,
		TooltipArrowStyles {}

export const TooltipArrow = forwardRef(function TooltipArrow(
	props: TooltipArrowProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTooltipArrow>>,
) {
	const { className, ...rest } = props;

	return (
		<AriaTooltipArrow ref={forwardedRef} {...rest} className="group">
			<svg width={12} height={12} viewBox="0 0 12 12" className={tooltipArrowStyles({ className })}>
				<path d="M0 0 L6 6 L12 0" />
			</svg>
		</AriaTooltipArrow>
	);
});
