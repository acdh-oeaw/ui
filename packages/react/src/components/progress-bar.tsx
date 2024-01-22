"use client";

import { type ElementRef, Fragment } from "react";
import {
	composeRenderProps,
	ProgressBar as AriaProgressBar,
	type ProgressBarProps as AriaProgressBarProps,
} from "react-aria-components";

import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const progressBarStyles = variants({
	base: "flex flex-col gap-1",
});

export type ProgressBarStyles = VariantProps<typeof progressBarStyles>;

export interface ProgressBarProps extends AriaProgressBarProps, ProgressBarStyles {
	label?: string;
}

export const ProgressBar = forwardRef(function ProgressBar(
	props: ProgressBarProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaProgressBar>>,
) {
	const { children, className, label, ...rest } = props;

	return (
		<AriaProgressBar
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return progressBarStyles({ ...renderProps, className });
			})}
		>
			{(renderProps) => {
				const { percentage, valueText, isIndeterminate } = renderProps;

				return (
					<Fragment>
						<div className="flex justify-between gap-2">
							{label != null ? <Label>{label}</Label> : null}
							<span className="text-sm text-neutral-600">{valueText}</span>
						</div>
						<div className="relative h-2 w-64 overflow-hidden rounded-full bg-neutral-300 outline outline-1 -outline-offset-1 outline-transparent">
							<div
								className={`absolute top-0 h-full rounded-full bg-blue-600 forced-colors:bg-[Highlight] ${isIndeterminate ? "left-full duration-1000 ease-out animate-in slide-out-to-right-full repeat-infinite [--tw-enter-translate-x:calc(-16rem-100%)]" : "left-0"}`}
								style={{ width: (isIndeterminate ? 40 : percentage) + "%" }}
							/>
						</div>
					</Fragment>
				);
			}}
		</AriaProgressBar>
	);
});
