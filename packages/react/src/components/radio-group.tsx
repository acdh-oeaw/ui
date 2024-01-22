"use client";

import { type ElementRef, Fragment } from "react";
import {
	composeRenderProps,
	Radio as AriaRadio,
	RadioGroup as AriaRadioGroup,
	type RadioGroupProps as AriaRadioGroupProps,
	type RadioProps as AriaRadioProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const radioGroupStyles = variants({
	base: "group flex flex-col gap-1.5",
});

export type RadioGroupStyles = VariantProps<typeof radioGroupStyles>;

export interface RadioGroupProps extends AriaRadioGroupProps, RadioGroupStyles {}

export const RadioGroup = forwardRef(function RadioGroup(
	props: RadioGroupProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaRadioGroup>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaRadioGroup
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return radioGroupStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return (
					<div className="flex gap-1.5 group-orientation-horizontal:gap-4 group-orientation-vertical:flex-col">
						{children}
					</div>
				);
			})}
		</AriaRadioGroup>
	);
});

export const radioStyles = variants({
	base: "group flex items-center gap-2 text-sm font-medium leading-none transition disabled:cursor-not-allowed disabled:opacity-50 forced-colors:disabled:text-[GrayText]",
});

export type RadioStyles = VariantProps<typeof radioStyles>;

const _radioBoxStyles = compose(
	focusRing,
	variants({
		base: "size-4 rounded-full border-2 bg-background transition-all",
		variants: {
			isSelected: {
				false: "border-foreground/50 group-pressed:border-foreground/40",
				true: "border-[5px] border-primary group-pressed:border-primary/80 forced-colors:!border-[Highlight]",
			},
			isInvalid: {
				true: "border-negative group-pressed:border-negative/90 forced-colors:!border-[Mark]",
			},
			isDisabled: {
				true: "forced-colors:!border-[GrayText]",
			},
		},
	}),
);

export interface RadioProps extends AriaRadioProps, RadioStyles {}

export const Radio = forwardRef(function Radio(
	props: RadioProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaRadio>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaRadio
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return radioStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return (
					<Fragment>
						<div className={_radioBoxStyles(renderProps)} />
						{children}
					</Fragment>
				);
			})}
		</AriaRadio>
	);
});
