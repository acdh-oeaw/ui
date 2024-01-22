"use client";

import { type ComponentPropsWithoutRef, type ElementRef, Fragment } from "react";
import {
	composeRenderProps,
	Radio as AriaRadio,
	RadioGroup as AriaRadioGroup,
	type RadioGroupProps as AriaRadioGroupProps,
	type RadioProps as AriaRadioProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const radioGroupStyles = variants({
	base: ["group grid content-start items-start gap-y-1.5"],
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
			{children}
		</AriaRadioGroup>
	);
});

export const radioStyles = variants({
	base: ["group grid grid-cols-[auto_auto] items-center justify-start gap-x-2 text-sm"],
});

export type RadioStyles = VariantProps<typeof radioStyles>;

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
			{composeRenderProps(children, (children, _renderProps) => {
				return (
					<Fragment>
						<RadioBox />
						{children}
					</Fragment>
				);
			})}
		</AriaRadio>
	);
});

export const radioBoxStyles = variants({
	base: [
		"inline-grid aspect-square size-4 place-content-center transition",
		"rounded-full",
		"dark:border-neutral-0/15 dark:group-hover:border-neutral-0/30 border border-neutral-950/15 group-hover:border-neutral-950/30",
		"bg-neutral-0 dark:bg-neutral-0/5",
		"shadow-sm dark:shadow-none",

		"group-selected:bg-neutral-50",
		// "disabled:border-neutral-950/25 disabled:bg-neutral-950/5 disabled:opacity-50 dark:disabled:border-neutral-0/20 dark:disabled:bg-neutral-0/[2.5%]",

		// "outline outline-0 outline-neutral-950 invalid:outline-negative-500 focus:outline-1 focus-visible:outline-2 focus-visible:outline-offset-2 dark:outline-neutral-0 forced-colors:outline-[Highlight]",
	],
});

export type RadioBoxStyles = VariantProps<typeof radioBoxStyles>;

export interface RadioBoxProps extends ComponentPropsWithoutRef<"div">, RadioBoxStyles {}

export const RadioBox = forwardRef(function RadioBox(
	props: RadioBoxProps,
	forwardedRef: ForwardedRef<ElementRef<"div">>,
) {
	const { className, ...rest } = props;

	return (
		<div ref={forwardedRef} {...rest} className={radioBoxStyles({ className })}>
			<span className={radioBoxIndicatorStyles()} />
		</div>
	);
});

const radioBoxIndicatorStyles = variants({
	base: [
		"size-2 transition",
		"rounded-full",
		"bg-transparent group-hover:bg-neutral-950/15",
		"group-selected:bg-neutral-950",
	],
});
