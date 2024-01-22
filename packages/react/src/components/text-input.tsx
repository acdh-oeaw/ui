"use client";

import type { ElementRef } from "react";
import { composeRenderProps } from "react-aria-components";

import { Input, type InputProps } from "@/components/input";
import { focusRing } from "@/index";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";

const textInputStyles = compose(
	focusRing,
	variants({
		base: "rounded-md border-2 shadow-sm",
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

export type TextInputStyles = VariantProps<typeof textInputStyles>;

export interface TextInputProps extends InputProps, TextInputStyles {}

export const TextInput = forwardRef(function TextInput(
	props: TextInputProps,
	forwardedRef: ForwardedRef<ElementRef<typeof Input>>,
) {
	const { className, ...rest } = props;

	return (
		<Input
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return textInputStyles({ ...renderProps, className });
			})}
		/>
	);
});
