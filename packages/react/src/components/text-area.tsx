"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	TextArea as AriaTextArea,
	type TextAreaProps as AriaTextAreaProps,
} from "react-aria-components";

import { focusRing } from "@/index";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";

const textAreaStyles = compose(
	focusRing,
	variants({
		base: [
			"min-w-0 flex-1 rounded-md bg-transparent px-3 py-1 text-sm outline outline-0 transition placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
			"rounded-md border-2 shadow-sm",
		],
		variants: {
			isFocus: {
				false: "border-input forced-colors:border-[ButtonBorder]",
				true: "border-foreground forced-colors:border-[Highlight]",
			},
			isInvalid: {
				true: "border-negative forced-colors:border-[Mark]",
			},
			isDisabled: {
				true: "forced-colors:border-[GrayText]",
			},
		},
	}),
);

export type TextAreaStyles = VariantProps<typeof textAreaStyles>;

export interface TextAreaProps extends AriaTextAreaProps, TextAreaStyles {}

export const TextArea = forwardRef(function TextArea(
	props: TextAreaProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTextArea>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaTextArea
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return textAreaStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaTextArea>
	);
});

// "flex min-h-[60px] w-full",
