"use client";

import { type ElementRef, Fragment } from "react";
import {
	composeRenderProps,
	Switch as AriaSwitch,
	type SwitchProps as AriaSwitchProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const switchStyles = variants({
	base: "group flex items-center gap-2 text-sm text-neutral-800 transition disabled:text-neutral-300 forced-colors:disabled:text-[GrayText]",
});

export type SwitchStyles = VariantProps<typeof switchStyles>;

const _switchTrackStyles = compose(
	focusRing,
	variants({
		base: "flex h-4 w-7 shrink-0 cursor-default items-center rounded-full border border-transparent px-px shadow-inner transition duration-200 ease-in-out",
		variants: {
			isSelected: {
				false: "bg-neutral-400 group-pressed:bg-neutral-500",
				true: "bg-neutral-700 group-pressed:bg-neutral-800 forced-colors:!bg-[Highlight]",
			},
			isDisabled: {
				true: "bg-neutral-200 forced-colors:border-[GrayText] forced-colors:group-selected:!bg-[GrayText]",
			},
		},
	}),
);

const _switchHandleStyles = variants({
	base: "size-3 transform rounded-full bg-white shadow outline outline-1 -outline-offset-1 outline-transparent transition duration-200 ease-in-out",
	variants: {
		isSelected: {
			false: "translate-x-0",
			true: "translate-x-[100%]",
		},
		isDisabled: {
			true: "forced-colors:outline-[GrayText]",
		},
	},
});

export interface SwitchProps extends AriaSwitchProps, SwitchStyles {}

export const Switch = forwardRef(function Switch(
	props: SwitchProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSwitch>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaSwitch
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return switchStyles({ ...renderProps, className });
			})}
		>
			{(renderProps) => {
				return (
					<Fragment>
						<div className={_switchTrackStyles(renderProps)}>
							<span className={_switchHandleStyles(renderProps)} />
						</div>
						{children}
					</Fragment>
				);
			}}
		</AriaSwitch>
	);
});
