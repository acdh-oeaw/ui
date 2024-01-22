"use client";

import type { ElementRef } from "react";
import { Button as AriaButton, Group as AriaGroup } from "react-aria-components";

import { Input, type InputProps } from "@/components/input";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const numberInputStyles = variants({
	base: [],
});

export type NumberInputStyles = VariantProps<typeof numberInputStyles>;

export interface NumberInputProps extends InputProps, NumberInputStyles {}

export const NumberInput = forwardRef(function NumberInput(
	props: NumberInputProps,
	forwardedRef: ForwardedRef<ElementRef<typeof Input>>,
) {
	const { children, className, ...rest } = props;

	// FIXME: increment/decrement buttons
	return (
		<Input ref={forwardedRef} {...rest} className={numberInputStyles({ className })} type="number">
			{children}
		</Input>
	);
});
