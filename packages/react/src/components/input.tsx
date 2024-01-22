"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const inputStyles = variants({
	base: "h-9 min-w-0 flex-1 bg-transparent px-3 py-1.5 text-sm outline outline-0 transition placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
});

export type InputStyles = VariantProps<typeof inputStyles>;

export interface InputProps extends Omit<AriaInputProps, "children">, InputStyles {}

export const Input = forwardRef(function Input(
	props: InputProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaInput>>,
) {
	const { className, ...rest } = props;

	return (
		<AriaInput
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return inputStyles({ ...renderProps, className });
			})}
		/>
	);
});

// "flex w-full file:border-0 file:bg-transparent file:text-sm file:font-medium",
